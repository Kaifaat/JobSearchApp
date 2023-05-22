import React from 'react';
import NotfoundImage from "../assets/img/Frame.png";


const EmptyPage = () => {
    return (
        <div className='not-found-page-wrapper'>
            <img src={NotfoundImage}/>
            Упс, здесь еще ничего нет!
        </div>
    );
};

export default EmptyPage;