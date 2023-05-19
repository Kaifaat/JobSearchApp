import {Vacancy, VacancyMainParams} from "../Redux/vacancy/types";

export const geFavouritesFromLS = () => {
    const data = localStorage.getItem('favourites');
    const items = data ? JSON.parse(data) as VacancyMainParams[] : [];

    return {
        items
    }
}