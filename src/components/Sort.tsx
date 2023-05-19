import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import {Button, FormControl, InputLabel, MenuItem, TextField} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';
import {useAppDispatch} from "../Redux/store";
import {useSelector} from "react-redux";
import {selectCategoryData} from "../Redux/filter/selectors";
import {fetchVacancies} from "../Redux/vacancy/asyncActions";
import {setPaymentToRedux, setPaymentFromRedux, setCategoryIdRedux, setCurrentPageRedux} from "../Redux/filter/slice";


const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: 300,
            width: 250,
        },
    },
};

const Sort: React.FC = () => {
    const dispatch = useAppDispatch();
    const [categoryId, setCategoryId] = React.useState('');
    const [paymentFrom, setPaymentFrom] = React.useState('');
    const [paymentTo, setPaymentTo] = React.useState('');
    const [currentPage, setCurrentPage] = React.useState(1);
    const sortRef = React.useRef<HTMLDivElement>(null);
    const {items, searchValue, status} = useSelector(selectCategoryData);
    const search = searchValue ? `${searchValue}` : '';
    const jobCategoriesList = items.map((obj: any) => (
        <MenuItem key={obj.key} value={obj.key}>{obj.title_rus}</MenuItem>
    ))

    const sendFilters = async () => {
        setCurrentPage(1)
        dispatch(setCurrentPageRedux(currentPage));
        dispatch(
            fetchVacancies({
                categoryId,
                paymentFrom,
                paymentTo,
                search,
                currentPage
            })
        )
    }

    const handleChange = (event: SelectChangeEvent) => {
        setCategoryId(event.target.value as string);
        dispatch(setCategoryIdRedux(event.target.value as string))
    };

    const resetFilter = () => {
        setCategoryId('');
        setPaymentFrom('');
        setPaymentTo('');
    }

    return (
        <div ref={sortRef} className="sort-container">

            <div className='sort-title'>
                <h4>Фильтры</h4>
                <span onClick={resetFilter}>
                    Сбросить все
                    <CloseIcon fontSize="small"/>
                </span>

            </div>
            <div className='industry'>
                <h5>Отрасль</h5>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label" >Отрасль</InputLabel>
                    <Select
                        data-elem="industry-select"
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={categoryId}
                        label="industry"
                        size="small"
                        MenuProps={MenuProps}
                        onChange={handleChange}
                    >
                        {jobCategoriesList}
                    </Select>
                </FormControl>
            </div>
            <div className='salary'>
               <h5>Оклад</h5>
                <TextField
                    data-elem="salary-from-input"
                    InputLabelProps={{ shrink: true }}
                    size="small"
                    value={paymentFrom}
                    label='От'
                    inputProps={{
                        step: 1000,
                        min: 0,
                        max: 999999,
                        type: 'number',
                    }}
                    onChange={(event) => {
                        setPaymentFrom(event.target.value)
                        dispatch(setPaymentFromRedux(event.target.value))
                    }}
                />
                <TextField
                           data-elem="salary-to-input"
                           InputLabelProps={{ shrink: true }}
                           size="small"
                           label='До'
                           value={paymentTo}
                           inputProps={{
                               step: 1000,
                               min: 0,
                               max: 999999,
                               type: 'number',
                           }}
                           onChange={(event) => {
                               setPaymentTo(event.target.value)
                               dispatch(setPaymentToRedux(event.target.value))
                           }}
                />
            </div>

            <Button
                    data-elem="search-button"
                    variant="contained"
                    className='filter-button'
                    onClick={sendFilters}
            >
                Применить
            </Button>

        </div>
    )
}

export default Sort;