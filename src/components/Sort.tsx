import React from "react";
import CloseIcon from '@mui/icons-material/Close';




const Sort: React.FC = () => {

    const sortRef = React.useRef<HTMLDivElement>(null);


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
                <h4>Отрасль</h4>
            </div>
            <div className='salary'></div>

        </div>
    )
}

export default Sort;