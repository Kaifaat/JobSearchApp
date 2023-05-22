import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {AccessToken, SearchVacancyParams, Vacancy, VacancyList} from "./types";


export const fetchToken =  createAsyncThunk(
    'token/fetchTokenStatus',
    async () => {
        const { data } = await axios.get<AccessToken>(
            `https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/?
            login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0`
        );
        localStorage.setItem('access_token', data.access_token);
        return data;
    }
)


axios.defaults.headers.common = {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    'access_token': `${localStorage.getItem('access_token')}`
};


export const fetchVacancies = createAsyncThunk<VacancyList, SearchVacancyParams>(
    'vacancy/fetchVacanciesStatus',
    //@ts-ignore
    async (params) => {
         const {
             categoryId,
             paymentFrom,
             paymentTo,
             search,
             currentPage
         } = params;
        const { data } = await axios.get<VacancyList>(
            `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/?keyword=${search}&payment_from=${paymentFrom}&payment_to=${paymentTo}&catalogues=${categoryId}&count=4&page=${currentPage}&no_agreement=1`
        );
        return data;
    });


export const fetchOneVacancy = createAsyncThunk(
    'vacancy/fetchOneVacancy',
    //@ts-ignore
    async (id: string) => {
        const { data } = await axios.get<Vacancy>(
            `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/${id}`
        );
        return data;
    });


