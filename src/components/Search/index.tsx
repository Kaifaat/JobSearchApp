import React from 'react';
import {useSelector} from "react-redux";
import {useAppDispatch} from "../../Redux/store";
import styles from './Search.module.scss'
import {setCurrentPageRedux, setSearchValueRedux} from "../../Redux/filter/slice";
import {Button} from "@mui/material";
import {selectCategoryData} from "../../Redux/filter/selectors";
import {fetchVacancies} from "../../Redux/vacancy/asyncActions";

const Search: React.FC = () => {
    const dispatch = useAppDispatch();
    const {categoryId, paymentFrom, paymentTo} = useSelector(selectCategoryData);
    const [search, setSearch] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const inputRef = React.useRef<HTMLInputElement>(null);

    const onChangeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearch(event.target.value);
    };

    const onClickSearch = async () => {
        setCurrentPage(1)
        dispatch(setCurrentPageRedux(currentPage));
        dispatch(setSearchValueRedux(search));
        dispatch(fetchVacancies({
            categoryId,
            paymentFrom,
            paymentTo,
            search,
            currentPage
        }))
    }

    const pressEnter = (e: { keyCode: number; }) => {
        if(e.keyCode == 13) {
            setCurrentPage(1)
            dispatch(setCurrentPageRedux(currentPage));
            dispatch(setSearchValueRedux(search));
            dispatch(fetchVacancies({
                categoryId,
                paymentFrom,
                paymentTo,
                search,
                currentPage
            }))
        }
    }

    return (
        <div className={styles.root}>
            <svg
                className={styles.icon}
                height="512px" id="Layer_1" version="1.1"
                viewBox="0 0 512 512" width="512px" xmlns="http://www.w3.org/2000/svg"
            >
                <path
                    d="M344.5,298c15-23.6,23.8-51.6,23.8-81.7c0-84.1-68.1-152.3-152.1-152.3C132.1,64,64,132.2,64,216.3  c0,84.1,68.1,152.3,152.1,152.3c30.5,0,58.9-9,82.7-24.4l6.9-4.8L414.3,448l33.7-34.3L339.5,305.1L344.5,298z M301.4,131.2  c22.7,22.7,35.2,52.9,35.2,85c0,32.1-12.5,62.3-35.2,85c-22.7,22.7-52.9,35.2-85,35.2c-32.1,0-62.3-12.5-85-35.2  c-22.7-22.7-35.2-52.9-35.2-85c0-32.1,12.5-62.3,35.2-85c22.7-22.7,52.9-35.2,85-35.2C248.5,96,278.7,108.5,301.4,131.2z"/>
            </svg>
            <input
                data-elem="search-input"
                ref={inputRef}
                value={search}
                onKeyDown={pressEnter}
                onChange={onChangeInput}
                className={styles.input}
                placeholder="Введите название вакансии"/>

            <Button
                data-elem="search-button"
                variant="contained"
                className={styles.searchButton}
                size='small'
                onClick={onClickSearch}
            >Поиск</Button>
        </div>
    )
}

export default Search;
