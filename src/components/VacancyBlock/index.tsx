import React from "react";
import { useDispatch, useSelector } from "react-redux";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';

// import {selectCartItemById} from "../../Redux/cart/selectors";
// import {CartItem} from "../../Redux/cart/types";
// import {addItem} from "../../Redux/cart/slice";

type VacancyBlockProps = {
    profession: string;
    firm_name: string;
    town_title: string;
    catalogues_title: string;
    type_of_work_title: string;
    payment_to: number;
    payment_from: number;
    currency: number;
    count?: 0;
}

const VacancyBlock: React.FC<VacancyBlockProps> = ({ profession, firm_name, town_title, catalogues_title, type_of_work_title, payment_to, payment_from, currency}) => {
    const dispatch = useDispatch();
     // const cartItem = useSelector(selectCartItemById(id));


    // const addedCount = cartItem ? cartItem.count : 0;

    // const onClickStarr = () => {
    //     const item: FavouriteItem = {
    //         profession,
    //         firm_name,
    //         town_title,
    //         catalogues_title,
    //         type_of_work_title,
    //         payment_to,
    //         payment_from,
    //         currency,
    //         count: 0,
    //     };
    //     dispatch(addItem(item));
    // }

    return (
        <div className="vacancy-block-wrapper">
            <div className="vacancy-block">
                <h4 className="vacancy-block-title">{profession}</h4>
                    <div className="vacancy-block-salary">
                        от {payment_from} {currency}
                        <span>{type_of_work_title}</span>
                    </div>
                <div className="vacancy-block-town">
                    <LocationOnIcon color='disabled' fontSize='small'/>
                    {town_title}
                </div>

            </div>
            <StarBorderIcon
            // onClick={onClickStarr}
            />
        </div>
    )
}

export default VacancyBlock;
