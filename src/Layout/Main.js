import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer/Footer';
import Header from '../Components/Header/Header';

const Main = () => {
    return (
        <div className=''>
            <Header></Header>

            <div>
                <Outlet></Outlet>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default Main;