import React from "react";
import CloseIcon from '@mui/icons-material/Close';
import {Button, FormControl, InputLabel, MenuItem, TextField} from "@mui/material";
import Select, { SelectChangeEvent } from '@mui/material/Select';




const Sort: React.FC = () => {

    const [industry, setIndustry] = React.useState('');
    const sortRef = React.useRef<HTMLDivElement>(null);



    const handleChange = (event: SelectChangeEvent) => {
        setIndustry(event.target.value as string);
    };



    return (
        <div ref={sortRef} className="sort-container">

            <div className='sort-title'>
                <h4>Фильтры</h4>
                <span>
                    Сбросить все
                    <CloseIcon fontSize="small"/>
                </span>


            </div>
            <div className='industry'>
                <h5>Отрасль</h5>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Выберите отрасль</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={industry}
                        label="industry"
                         size="small"
                        onChange={handleChange}
                    >
                        <MenuItem value={10} >Ten</MenuItem>
                        <MenuItem value={20}>Twenty</MenuItem>
                        <MenuItem value={30}>Thirty</MenuItem>
                    </Select>
                </FormControl>
            </div>
            <div className='salary'>
               <h5>Оклад</h5>
                <TextField InputLabelProps={{ shrink: true }} size="small"/>
                <TextField InputLabelProps={{ shrink: true }} size="small"/>

            </div>

            <Button variant="contained" className='filter-button'>Применить</Button>

        </div>
    )
}

export default Sort;