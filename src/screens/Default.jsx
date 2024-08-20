import Logo from './_components/Logo';
import Description from "./_components/Description";
import OpenLink from "../components/OpenLink";
import LessonInfo from './_components/LessonInfo';


import Contador from './_components/Contador';
import React from 'react';
import FilterableProductTable from '../components/FilterableProductTable';

const PRODUCTS = [
  { category: 'Fruits', price: '$1', stocked: true, name: 'Apple' },
  { category: 'Fruits', price: '$1', stocked: true, name: 'Dragonfruit' },
  { category: 'Fruits', price: '$2', stocked: false, name: 'Passionfruit' },
  { category: 'Vegetables', price: '$2', stocked: true, name: 'Spinach' },
  { category: 'Vegetables', price: '$4', stocked: false, name: 'Pumpkin' },
  { category: 'Vegetables', price: '$1', stocked: true, name: 'Peas' }
];


const Default = () => {
    return (
        <>
            <header className="App-header">
            
                <Contador />
                <FilterableProductTable products={PRODUCTS} />
                <Logo />
                <Description />
                <OpenLink 
                    title="Learn React" 
                    url="https://reactjs.org" 
                />

                <OpenLink 
                    title="Mi proyecto React (Git)" 
                    url="https://github.com/Pamela101998/react_clases" 
                />

                <LessonInfo 
                    unit="1" 
                    title="Introducción a React y estructura de proyecto" 
                />

                <LessonInfo 
                    unit="2" 
                    title="Context API para la gestión del estado global en aplicación React" 
                />  
            </header>
        </>
    );
};
export default Default;



   
