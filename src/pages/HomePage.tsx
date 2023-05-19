import React from "react";
import Sort from "../components/Sort";
import Search from "../components/Search";
import VacancyBlock from "../components/VacancyBlock";
import {fetchToken, fetchVacancies} from "../Redux/vacancy/asyncActions";
import {useSelector} from "react-redux";
import {useAppDispatch} from "../Redux/store";
import {selectVacancyData} from "../Redux/vacancy/selectors";
import {CircularProgress, createTheme, Pagination, Stack, ThemeProvider} from "@mui/material";
import {fetchCategories} from "../Redux/filter/asyncActions";
import {selectCategoryData} from "../Redux/filter/selectors";
import {setCurrentPageRedux} from "../Redux/filter/slice";
import EmptyPage from "../components/EmptyPage";


const theme = createTheme({
    palette: {
        primary: {
            main: '#5E96FC',
            contrastText: '#fff'
        },
    },
});


export const HomePage: React.FC = () => {
    const {categoryId, paymentFrom, paymentTo, searchValue} = useSelector(selectCategoryData);
    const {currentPage} = useSelector(selectCategoryData)
    const {items, total, status} = useSelector(selectVacancyData);
    const [page, setPage] = React.useState(1);
    const dispatch = useAppDispatch();
    const search = searchValue ? `${searchValue}` : '';


    const getVacancies = async () => {
        dispatch(
            fetchVacancies({
                    categoryId,
                    paymentFrom,
                    paymentTo,
                    search,
                    currentPage,
            })
        );
        window.scrollTo(0, 0);
    }

    const vacancies = items.map((obj: any) =>
        <VacancyBlock
            data-elem={'vacancy-' + obj.id}
            key={obj.id}
            town_title={obj.town.title}
            type_of_work_title={obj.type_of_work.title}
            {...obj}
        />);

    React.useEffect(() => {
        dispatch(fetchToken());
        dispatch(fetchCategories());
    }, [])

    React.useEffect(() => {
        getVacancies();
         console.log(search);

    }, [page])


    return (
        <div className='content'>
            <Sort />
            <div className='main-block'>
                <div className='search-block'>
                    <Search />
                </div>
                {(items.length < 1 && status === 'success') ? (
                    <EmptyPage />
                ) : items.length < 1 ? (
                    <div className='loader-wrapper'>
                        <CircularProgress />
                    </div>
                    ) : (
                    <div className='vacancy-list'>
                        {vacancies}
                    </div>
                )}
                <div className='pagination'>
                    <ThemeProvider theme={theme}>
                        <Stack spacing={2}>
                            <Pagination
                                count={
                                    total > 500 ? Math.floor(500 / 4) : (Math.floor(total / 4) - 1)
                                   }
                                page={currentPage}
                                shape="rounded"
                                color='primary'
                                onChange={(_, num) => {
                                    setPage(num)
                                    dispatch(setCurrentPageRedux(num))
                                }}
                            />
                        </Stack>
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )
}