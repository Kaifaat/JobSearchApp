import React from "react";
import {useAppDispatch} from "../../Redux/store";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import { Link } from "react-router-dom";
import {VacancyMainParams} from "../../Redux/vacancy/types";
import {addItem, removeItem} from "../../Redux/favourites/slice";


type VacancyBlockProps = {
    profession: string;
    firm_name: string;
    town_title: string;
    catalogues_title: string;
    type_of_work_title: string;
    payment_to: number;
    payment_from: number;
    currency?: number;
    count?: 0;
    id: string;
}

const VacancyBlock: React.FC<VacancyBlockProps> = ({ profession, firm_name, town_title, catalogues_title, type_of_work_title, payment_to, payment_from, currency, id}) => {
    const dispatch = useAppDispatch();
    const [reload, setReload] = React.useState<boolean>();

    const arrFavourites = localStorage.getItem('favourites');
    const favouritesList =  JSON.parse(arrFavourites || '[]');
    const isFavourite = favouritesList.find((obj:any) => obj.id === id);

    const item: VacancyMainParams = {
        profession,
        town_title,
        type_of_work_title,
        payment_to,
        payment_from,
        id,
    };


    const onClickAddStar = () => {
        setReload(true);
        const arr = localStorage.getItem('favourites')
        let favourites = JSON.parse(arr || '[]');

        dispatch(addItem(item));
        favourites.push(item)
         localStorage.setItem('favourites', JSON.stringify(favourites));
    }

    const onClickRemoveStar = () => {
        setReload(false)
        const arr = localStorage.getItem('favourites')
        let favourites = JSON.parse(arr || '[]');
        let filteredFavourites = favourites.filter((obj: any) => {
            return obj.id !== id

        })
        dispatch(removeItem(item))

        localStorage.setItem('favourites', JSON.stringify(filteredFavourites));
    }

    return (
        <div className="vacancy-block-wrapper">
            <div className="vacancy-block">
                <Link to={`/vacancy/${id}`}>
                <p className="vacancy-block-title">{profession}</p>
                </Link>
                    <div className="vacancy-block-salary">
                        от {payment_from} {currency}
                        <span> •       {type_of_work_title}</span>
                    </div>
                <div className="vacancy-block-town">
                    <LocationOnIcon color='disabled' fontSize='small'/>
                    {town_title}
                </div>
            </div>
            {isFavourite ? (
                <StarIcon
                    data-elem={'vacancy-' + id + '-shortlist-button'}
                    className='fill-star'
                    fontSize='large'
                    sx={{ borderRadius: 20 }}
                    onClick={onClickRemoveStar}
                />
            ) : (
                <StarBorderIcon
                    data-elem={'vacancy-' + id + '-shortlist-button'}
                    className='empty-star'
                    sx={{ borderRadius: 20 }}
                    onClick={onClickAddStar}
                />
            )}
        </div>
    )
}

export default VacancyBlock;
