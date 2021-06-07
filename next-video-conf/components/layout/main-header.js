import { useState, useCallback } from "react";
import Link from 'next/link';
import { X, Menu } from 'react-feather';

// import classes from '../../styles/main-header.module.css';

function MainHeader() {
    const logoUrl = process.env.PUBLIC_URL + '/img/brand.svg';
    // @ts-ignore
    const [collapsed, setCollapsed] = useState(false);

    const toggle = useCallback(
        () => {
            setCollapsed(!collapsed);
        },
        [collapsed],
    );

    return (
        <header>
            <nav className={`navbar top-index`}>
                <div className="container">
                    <Link className={`navbar-brand`} href='/'>
                        <img src={logoUrl}/>
                    </Link>
                    <button  onClick={toggle} className={`navbar-toggler`} >
                        <span className={`navbar-toggler-icon `}>
                            <Menu  />
                        </span>
                    </button>
                    <div className={`navbar-collapse ${collapsed ? "" : "collapse"}`}>
                        <button onClick={toggle}
                                className={`navbar-toggler top-index`} >
                            <X className={`fe fe-x`}/>
                        </button>
                        <ul className={`navbar-items-container`}>
                            <li className={`nav-item-group dropdown mb-2`}>
                                <h3>
                                    Navigate
                                </h3>
                            </li>
                            <li>
                                <h6 className={`dropdown-header`}>
                                    <Link onClick={toggle} href={'/'}
                                          className="dropdown-item">Home</Link>
                                </h6>
                            </li>
                            <li>
                                <h6 className={`dropdown-header`}>
                                    <Link onClick={toggle}  href='/services'
                                          className="dropdown-item">Services</Link>
                                </h6>
                            </li>
                            <li>
                                <h6 className={`dropdown-header`}>
                                    <Link onClick={toggle}
                                          className="dropdown-item" href='/about'>About</Link>
                                </h6>
                            </li>
                            <li>
                                <h6 className={`dropdown-header`}>
                                    <Link onClick={toggle}
                                          className="dropdown-item" href='/about'>Contact</Link>
                                </h6>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MainHeader;
