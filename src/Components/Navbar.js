import React from 'react';
import styled from "styled-components";
import logo from './uploads/logo.png'

const StyledNavbar = styled.div`
    a {
       color: black;
    }

    .grid-header {
        position: relative;
        width: auto ;
        height: 5rem;
        display: flex;
        align-items: center;
        padding: 1rem;
        margin-left: 10%;
        justify-content: space-between;
        
        .round {
            width: 14%;
            color: #F7391C;
            margin-bottom: 10%;
        }
        
        .grid-logo{
            text-align: -webkit-center;
            
            .logo {
                width: 50%;
            }
        }
    
        .grid-socialnet {
            svg {
                width: 10%;
                margin-left: .5rem;
                margin-right: .5rem;
            }
            .fa-facebook-f {
                width: 15px;
            }
            width: 200px;
            text-align: end;
        
            .fa-bars {
                margin-left: 2rem;
            }
        }
    }
    
        @media screen and (max-width: 1024px) {
            .grid-header {
                width: auto !important;
            }
            .logo {
                width: 100% !important;
                padding-top: 10%;
            }
            .grid-socialnet {
                display: none;
            }
        }
`;

export function Navbar() {
    return (
        <StyledNavbar>
            <div className={"grid-header"}>
                <div className={"round"}>
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle" role="img"
                         xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                         className="svg-inline--fa fa-circle fa-w-16 fa-2x">
                        <path fill="currentColor"
                              d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8z"
                              className=""></path>
                    </svg>
                </div>
                <div className={"grid-logo"}>
                    <a href={'/rickandmorty-react'}> <img className={"logo"} src={logo} alt={"logo-rick-and-morty"}/> </a>
                </div>
                <div className={"grid-socialnet"}>
                    <a href={'https://www.instagram.com/rickandmorty'}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="instagram" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                             className="svg-inline--fa fa-instagram fa-w-14 fa-2x">
                            <path fill="currentColor"
                                  d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
                                  className=""></path>
                        </svg>
                    </a>

                    <a href={'https://www.facebook.com/RickandMorty'}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-f" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"
                             className="svg-inline--fa fa-facebook-f fa-w-10 fa-2x">
                            <path fill="currentColor"
                                  d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
                                  className=""></path>
                        </svg>
                    </a>

                    <a href={'https://twitter.com/rickandmorty'}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fab" data-icon="twitter" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                             className="svg-inline--fa fa-twitter fa-w-16 fa-2x">
                            <path fill="currentColor"
                                  d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z"
                                  className=""></path>
                        </svg>
                    </a>

                    <a href={'https://www.rickandmorty.com/'}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                             className="svg-inline--fa fa-bars fa-w-14 fa-2x">
                            <path fill="currentColor"
                                  d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"
                                  className=""></path>
                        </svg>
                    </a>
                </div>
            </div>
        </StyledNavbar>
    )
}