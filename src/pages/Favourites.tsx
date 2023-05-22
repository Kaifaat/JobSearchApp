import React from 'react';
import {useSelector} from "react-redux";
import {selectFavourites} from "../Redux/favourites/selectors";
import VacancyBlock from "../components/VacancyBlock";
import {Button, Pagination} from "@mui/material";
import EmptyPage from "../components/EmptyPage";
import {Link} from "react-router-dom";

const Favourites = () => {
    const [page, setPage] = React.useState(1);
    const {items} = useSelector(selectFavourites);

    const checkFavourites = items.filter((obj: any, i) => {
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
            {...obj}
            />)

    return (
                <div className='favourites-wrapper'>
                    {
                        (items.length < 1) ? (
                            <div className='not-found-block'>
                        <EmptyPage/>
                            <Link to='/'>
                                <Button
                                    variant="contained"
                                >Поиск вакансий</Button>
                            </Link>
                            </div>
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
                                }}
                            />
                        </div>
                    )}
                </div>
            )
};

export default Favourites;