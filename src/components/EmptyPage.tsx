import React from 'react';
import NotfoundImage from "../assets/img/Frame.png";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const EmptyPage = () => {
    return (
        <div className='not-found-page-wrapper'>
            <img src={NotfoundImage}/>
            Упс, здесь еще ничего нет!
            <Link to='/'>
            <Button
                variant="contained"
            >Поиск вакансий</Button>
        </Link>
        </div>
    );
};

export default EmptyPage;