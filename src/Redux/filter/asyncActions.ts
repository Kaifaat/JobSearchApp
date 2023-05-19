import {createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";
import {fetchVacancies} from "../vacancy/asyncActions";


export const fetchCategories =  createAsyncThunk(
    'categories/fetchCategories',
    async () => {
        const { data } = await axios.get(
            `https://startup-summer-2023-proxy.onrender.com/2.0/catalogues/`
        );
        console.log(data);
        return data;
    }
)


// export const fetchFilteredVacancies = createAsyncThunk(
//     'filter/fetchVacancies',
//     async (params) => {
//         const {
//             categoryId,
//             paymentFrom,
//             paymentTo
//         } =  params;
//         const { data } = await axios.get (
//             `https://startup-summer-2023-proxy.onrender.com/2.0/vacancies/payment_from=${paymentFrom}/payment_to=${paymentTo}/catalogues=${categoryId}/?count=4&page=1`
//         )
//         console.log(data)
//         return data
//     }
// )


axios.defaults.headers.common = {
    'x-secret-key': 'GEU4nvd3rej*jeh.eqp',
    'X-Api-App-Id': 'v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948',
    'access_token': `${localStorage.getItem('access_token')}`
};