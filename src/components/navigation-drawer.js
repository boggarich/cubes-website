import React from "react";

import "../assets/sass/navigation-drawer.scss";
import $ from 'jquery';

const handleClose = () => {

    let navigationDrawer = $(".navigation-drawer");

    navigationDrawer.removeClass("show");
    navigationDrawer.find('li').removeClass('animated-slide-up');

}

export default function NavigationDrawer() {

    return(
        <div className='navigation-drawer'>

            <div className="mobile-menu-drawer-close-btn mb-5">
                <button className="btn-transparent" onClick={ handleClose } >
                    <img src={ process.env.PUBLIC_URL + "/img/close.png" } alt="page logo" className="page-logo"/> 
                </button>
            </div>

            <ul>
                <li><a href="#">Exchange</a></li>
                <li><a href="#">Markets</a></li>
                <li><a href="#">Support</a></li>
                <li><button className="btn btn-default br-20 btn-md mt-4">Sign In</button></li>
                <li><button className="btn btn-purple br-20 btn-sm">Create account</button></li>
            </ul>

        </div>
    );
    
}