import React from 'react';
import MainStep from './MainStep';
import CardStep from './CardStep';
import MapStep from './MapStep';

const stepData = [
    {
        title: 'Данные покупателя',
        component: <MainStep/>
    },
    {
        title: 'Банковская карта',
        component: <CardStep/>
    },
    {
        title: 'Адрес',
        component: <MapStep/>
    },
];


export default stepData;