import React from 'react';
import Header from '../header/header';
import { Outlet } from 'react-router';
import Footer from '../footer/footer';

const root = () => {
    return (
        <Header></Header>
        <Outlet></Outlet>
        <Footer></Footer>
    );
};

export default root;