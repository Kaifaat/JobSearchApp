import React from 'react';
import {useSelector} from "react-redux";
import {selectFavourites} from "../Redux/favourites/selectors";
import VacancyBlock from "../components/VacancyBlock";
import {Pagination} from "@mui/material";
import {setCurrentPageRedux} from "../Redux/filter/slice";
import EmptyPage from "../components/EmptyPage";

const Favourites = () => {
    const [page, setPage] = React.useState(1);

    const {items} = useSelector(selectFavourites);


    const checkFavourites = items.filter((obj: any, i) => {
        console.log(i)
        const range = 4;
        if ((i < (page * range)) && (i >= ((page - 1) * range))) {
            return obj
        } else {
            return false
        }
    })
    
    const favouriteItems = checkFavourites.map((obj: any) =>
        <VacancyBlock
            data-elem={'vacancy-' + obj.id}
            key={obj.id}
            // town_title={obj.town.title}
            // type_of_work_title={obj.type_of_work.title}
            // title={obj.title}
            // price={obj.price}
            // image={obj.imageUrl}
            // sizes={obj.sizes}
            // types={obj.types}
            {...obj}
            />)

    React.useEffect(() => {
        console.log(items)
        console.log(checkFavourites)
    }, [])

    return (
                <div className='favourites-wrapper'>
                    {
                        (items.length < 1) ? (
                        <EmptyPage/>
                    ) : (
                        <div className='favourites-list'>
                        {favouriteItems}
                            <Pagination
                                count={Math.ceil(items.length / 4)}
                                page={page}
                                shape="rounded"
                                color='primary'
                                onChange={(_, num) => {
                                    setPage(num)
                                    //dispatch(setCurrentPageRedux(num))
                                }}

                                // onPageChange={handleChangePage}
                            />
                        </div>
                    )}
                </div>
            )
};

export default Favourites;