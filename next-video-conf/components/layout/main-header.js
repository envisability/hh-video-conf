import { useState, useCallback } from "react";
import Link from 'next/link';
import { X, Menu } from 'react-feather';

// import classes from '../../styles/main-header.module.css';

function MainHeader() {
    const logoUrl = '/images/logo.jpeg';
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
            <nav className={`navbar navbar-expand-lg navbar-light bg-white`}>
                <div className="container">
                    <Link  href='/'>
                        <a className={`navbar-brand`}>
                            <img className={`navbar-brand-img`} src={logoUrl} /></a>
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
                        <ul className={`navbar-nav ms-auto`}>
                            {/*<li className={`nav-item-group dropdown mb-2`}>*/}
                            {/*    <h3>*/}
                            {/*        Navigate*/}
                            {/*    </h3>*/}
                            {/*</li>*/}
                            <li className={`nav-item dropdown`}>
                              <Link onClick={toggle} href={'/'}>
                                <a className={`nav-link`}>
                                  Home
                                </a>
                              </Link>
                            </li>
                            <li className={`nav-item dropdown`}>
                              <Link onClick={toggle}  href='/blog'>
                                <a className={`nav-link`}>
                                  Blog
                                </a>
                              </Link>
                            </li>
                            <li className={`nav-item dropdown`}>
                              <Link onClick={toggle} href='/about'>
                              <a className={`nav-link`}>
                                  About
                              </a>
                              </Link>
                            </li>
                            {/*<li>*/}
                            {/*    <h6 className={`dropdown-header`}>*/}
                            {/*        <Link onClick={toggle}*/}
                            {/*              className="dropdown-item" href='/about'>Contact</Link>*/}
                            {/*    </h6>*/}
                            {/*</li>*/}
                        </ul>

                        <Link  href='/'>
                          <a className={`navbar-btn btn btn-sm btn-primary lift ms-auto`}>
                            Buy now
                          </a>
                        </Link>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default MainHeader;
