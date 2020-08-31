import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios'
const URI='https://api.openweathermap.org/data/2.5/weather';
const API='f33a484cf794d08d0148764789aaba32';

export const fetchweather=async(query)=>
{
    const {data}=await axios.get(URI,
        {
         params:{
             q:query,
             units:'metric',
             APPID:API
         }
        }) ;
        return data;
}