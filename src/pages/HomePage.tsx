import React, {useEffect} from "react";
import Sort from "../components/Sort";
import Search from "../components/Search";
import VacancyBlock from "../components/VacancyBlock";
import {fetchToken, fetchVacancies} from "../Redux/vacancy/asyncActions";
import {useDispatch, useSelector} from "react-redux";
import {useAppDispatch} from "../Redux/store";
import {selectVacancyData} from "../Redux/vacancy/selectors";
import {createTheme, Pagination, Stack, ThemeProvider} from "@mui/material";


const theme = createTheme({
    palette: {
        primary: {
            // Purple and green play nicely together.
            main: '#5E96FC',
            contrastText: '#fff'
        },
    },
});


export const HomePage: React.FC = () => {

    // const {categoryId, sort, currentPage, searchValue} = useSelector(selectFilter);
    const {items, status} = useSelector(selectVacancyData);
    const [isLoading, setIsLoading] = React.useState(true);
    const [page, setPage] = React.useState(1);
    const dispatch = useAppDispatch();


    const getVacancies = async () => {
        setIsLoading(true);

        // const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        // const sortBy = sort.sortProperty.replace('-', '');
        // const category = categoryId > 0 ? `category=${categoryId}` : '';
        // const search = searchValue ? `&search=${searchValue}` : '';

        dispatch(
            fetchVacancies(
                //page
                // sortBy,
                // order,
                // category,
                // search,
                // currentPage: String(currentPage),
            )
        );

        window.scrollTo(0, 0);
    }

    const vacancies = items.map((obj: any) =>
        <VacancyBlock
            key={obj.id}
            town_title={obj.town.title}
            // title={obj.title}
            // price={obj.price}
            // image={obj.imageUrl}
            // sizes={obj.sizes}
            // types={obj.types}
            {...obj}
            // если все свойства в объекте названы так же как и пропсы, можно использовать спред оператор
        />);

    React.useEffect(() => {
        dispatch(fetchToken());
        getVacancies();
        // console.log(items);

    }, [page])


    return (
        <div className='content'>
            <Sort />
            <div className='main-block'>
                <Search />
                <div className='vacancy-list'>
                    {vacancies}
                </div>

                <div className='pagination'>
                    <ThemeProvider theme={theme}>
                    <Stack spacing={2}>
                        <Pagination
                            count={1000 / 4}
                            page={page}
                            shape="rounded"
                            color='primary'
                            onChange={(_, num) => setPage(num)}

                            // onPageChange={handleChangePage}
                        />
                    </Stack>
                    </ThemeProvider>
                </div>

            </div>


        </div>
    )
}