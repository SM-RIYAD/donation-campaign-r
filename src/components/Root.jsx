import { Outlet } from "react-router-dom";
import Header from "./Header/Header";
import  { createContext, useState } from "react";

export const countContext= createContext([]);
const Root = () => {

    const [donation_Count,set_donation_Count]=useState(0);
    return (
        <div> <Header></Header>
        <countContext.Provider value={[donation_Count,set_donation_Count]} >
        <Outlet></Outlet>
        </countContext.Provider>
        
        </div>
    );
};

export default Root;