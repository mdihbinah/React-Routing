import React from 'react';
import Home from '../Home/Home';
import Mobile from '../Mobile/Mobile';
import Laptop from '../Mobile/Laptop/Laptop';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import SideBar from '../SideBar/SideBar';
import { Outlet, useNavigation } from 'react-router';
import './Root.css'

const Root = () => {
    const navigation = useNavigation()
    const isNavigation = Boolean(navigation.location)
    return (
        <div>
            {/* <Home></Home>
            <Mobile/>
            <Laptop/> */}
            <Header/>
            <div className="root-main">
                <SideBar/>
                {isNavigation && <span>Loading...........</span>}
                <Outlet/>
                <aside className="right-sidebar">
                    <h3>Ads / Info</h3>
                </aside>
            </div>

            <Footer/>
        </div>
    );
};

export default Root;