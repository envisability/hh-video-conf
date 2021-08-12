import {Fragment} from 'react';
import MainHeader from './main-header';
import Footer from "./footer";

function Layout(props) {
    return (
        <Fragment>
            <div className="wrapper">
                <MainHeader/>
                <main>{props.children}</main>
            </div>
            <Footer/>
        </Fragment>
    );
}

export default Layout;
