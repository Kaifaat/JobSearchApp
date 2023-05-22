import React from 'react';
import VacancyBlock from "../components/VacancyBlock";
import {useSelector} from "react-redux";
import {selectVacancyData} from "../Redux/vacancy/selectors";
import {fetchOneVacancy} from "../Redux/vacancy/asyncActions";
import {useAppDispatch} from "../Redux/store";
import {CircularProgress} from "@mui/material";


const FullVacancyPage = () => {
    const {item, status} = useSelector(selectVacancyData);
    const dispatch = useAppDispatch();
    const id = window.location.pathname.slice(9)


    React.useEffect(() => {
         dispatch(fetchOneVacancy(id))
    }, [])


    return (
        <div className='full-vacancy-wrapper'>
            {status === 'success' ? (
                <div className='full-vacancy-block'>
                    <VacancyBlock
                        data-elem={'vacancy-' + item.id}
                        key={item.id}
                        town_title={item.town.title}
                        profession={item.profession}
                        type_of_work_title={item.type_of_work.title}
                        payment_from={item.payment_from}
                        payment_to={item.payment_to}
                        firm_name={item.firm_name}
                        catalogues_title={item.catalogues_title}
                        id={item.id}
                    />
                <div className='description'>
                    <div className='responsibilities'>

                        <div dangerouslySetInnerHTML={{ __html: item.vacancyRichText }}/>
                    </div>
                </div>
                </div>
            ) : (
                <div className='loader-wrapper'>
                    <CircularProgress />
                </div>
                )}
        </div>
    );
};

export default FullVacancyPage;