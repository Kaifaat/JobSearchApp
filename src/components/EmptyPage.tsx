import React from 'react';
import NotfoundImage from "../assets/img/Frame.png";
import {Button} from "@mui/material";
import {Link} from "react-router-dom";

const EmptyPage = () => {
    return (
        <div className='not-found-page-wrapper'>
            <img src={NotfoundImage}/>
            Упс, здесь еще ничего нет!

        </div>
    );
};

export default EmptyPage;