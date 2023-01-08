import {React, useState} from "react";
export default function Header(){
    return(
    <div id="header">
        <div className="d-flex">
            <div className="nav">
                <div className="nav-item btn">Home</div>
                <div className="nav-item btn">Shop</div>
            </div>
        </div>
    </div>)
}