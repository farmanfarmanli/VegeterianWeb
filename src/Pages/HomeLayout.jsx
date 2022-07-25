import React from 'react'
import { Outlet } from "react-router-dom";
import Header from "../components/Home/Header"
import Search from "../components/Home/Search"

const HomeLayout = () => {
    return (
        <>
            <Header />
            <Search />
            <Outlet />
        </>
    )
}

export default HomeLayout