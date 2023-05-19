import React from 'react';
import EmptyPage from "../components/EmptyPage";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div className='not-found-block'>
        <EmptyPage/>
    <Link to='/'>
        <Button
            variant="contained"
        >Поиск вакансий</Button>
    </Link>
        </div>
    );
};

export default NotFoundPage;