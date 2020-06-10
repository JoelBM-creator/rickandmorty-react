import React, {useState, useEffect} from 'react';
import styled from "styled-components";

import axios from 'axios';

import line from "./uploads/line.png";

const StyledDashboard = styled.div`
    .grid-body {
          position: relative;
          z-index: 2;
          display: grid;
          height: calc(100vh - 8em);
          padding: 4em;
          grid-column-gap: 8em;
          grid-template-columns: 50px 1fr 1fr 200px;
          grid-template-rows: 250px 100px 1fr 1fr 1fr;
          grid-template-areas: "asset-top" "name character-name avatar avatar" "about character-description avatar avatar" "asset-bottom character-text avatar avatar" "asset-bottom learn-more arrow other-line";
          
          .asset-top {
            width: 50%;
            text-align: center;
            
            svg {
                padding-left: 5px;
             }
            
            .asset-line {
                width: 20%;
                padding-left: .6rem;
            }
          }
          
          .about {
            margin: 0px 0px 80px;
          }
          
          .asset-top-name {
            font-size: 25px;
            writing-mode: vertical-rl;
            transform: rotate(180deg);
            display: flex;
            justify-self: left;
            font-wight: 600;
          }
          
          .about-mobile {
            display: none;
          }
          .more-info-mobile{
            display: none;
          }
           
          h1 {
            padding-top: 5px;
            text-transform: uppercase;
          }
          h1:after {
            position: relative; 
            top: -0.5em;
            color: red;
            content: '____';
          }
          
          .asset-bottom {
            width: 50%;
            text-align: center;
            
            svg {
                padding-left: 5px;
             }
            
            .asset-line {
                width: 20%;
                padding-left: .6rem;
            }
          }
          
          .more-info {
            display: grid;
            align-items: center;
            margin-top: -200px;
            
            svg {
                width: 20%;
            }
            &:hover{
               cursor: pointer;
            } 
          }
          
          .character-label {
            width: 50%;
            background: #233160;
            padding: 1em;
            color: white;
            border-radius: 10px;
            text-align: left;
            font-size: 20px;
            font-weight: 600; 
          }
          
          .more-label {
             background: #7bc767;
             font-size: 15px;
          }
          
          .character-img {
            border-radius: 35%;
            -webkit-box-reflect: below 0px -webkit-gradient(linear, left top, left bottom, from(transparent), color-stop(70%, transparent) , to(rgba(250, 250, 250, 0.1)));
          }
          
          .more {
            display: flex;
            align-items: center;
            font-size: 25px;
            text-transform: uppercase;
            
            .flecha-line {
                width: .6%;
                margin-left: 75px;
               transform: rotate(90deg); 
            }
            .fa-flecha-der {
                width: 4%;
                margin-left: 7%;
            }
          }
          
          .more-character {
            display: flex;
            align-items: center;
            
            svg {
                width: 10%;
            }
            &:hover{
               cursor: pointer;
            } 
          }
    }
    
    @media (max-width: 1440px) {
        .grid-body {
            column-gap: 2em;
        }
    }

    @media screen and (max-width: 1024px) {
        body {
            background-position: left 50px top;
        }
        .grid-body {
            height: auto;
            padding: 2em 0;
            width: auto;
            margin: 0 auto;
            column-gap: 1em;
            grid-template-columns: 50px 1fr 1fr;
            grid-template-rows: repeat(6, auto);
            margin-top: 10%;
        }
        
        .asset-top, .asset-bottom, .more, .more-character {
            display: none !important;
        }
        
        .asset-top-name {
            font-size: 45px !important;
        }
        .character-name {
            padding-top: 2px;
            margin-right: 2%;
            font-size: 30px;
        }
        .about {
            display: none !important;
        }
        .about-mobile {
            display: flex !important;
        }
        .mobile-hidden {
            display: none;
        }
        .more-info {
            display: none !important;
        }
        .more-info-mobile {
            display: block !important;
            padding-left: 80%;
            place-self: center;
            width: 50%;
        }
        .character-img {
            width: 100%;
        }
        .character-label {
            font-size: 30px !important;
        }
       
    
`;

export function Dashboard() {
    const [char, setChar] = useState([]);
    const [ Id, setId ] = useState(1);

    useEffect(() => {
        axios
            .get(`https://rickandmortyapi.com/api/character/${Id}`)
            .then(res => {
                setChar(res.data);
                console.log("Response: ", res);
            })
            .catch(err => {
                console.log(err.message);
            });
    }, [Id]);

    function pasarArriba(a){
        if(Id === 1 ){
            console.log('No se puede pasar hacía atras!');
        } else {
            setId(Id - a);
            console.log(Id);
        }
    }

    function pasarAbajo(a) {
        if(Id === 591){
            console.log('No se puede pasar hacía adelante!');
        } else {
            setId(Id + a);
            console.log(Id);
        }
    }

    return (
        <>
            <StyledDashboard>
                <div className={"grid-body"}>
                    <div className={"asset-top"}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                             className="svg-inline--fa fa-ellipsis-v fa-w-6 fa-2x">
                            <path fill="currentColor"
                                  d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                                  className=""></path>
                        </svg>
                        <img className={"asset-line"} src={line} alt={"line"}/>

                    </div>

                    <div/>
                    <div/>
                    <div/>

                    <div className={"asset-top-name"}>
                        NAME
                    </div>
                    <div className={"character-name"}>
                        <h1>{char.name}</h1>
                    </div>
                    <div/><div className={"mobile-hidden"}/>
                    <div className={"asset-top-name about-mobile"}>ABOUT</div>
                    <div className={"asset-top-name about"}>
                        ABOUT
                    </div>

                    <div>
                        <h3 className={"character-label"}> Gender: {char.gender} </h3>
                        <h3 className={"character-label"}> Species: {char.species} </h3>
                        <h3 className={"character-label"}> Status: {char.status} </h3>
                    </div>
                    <div>
                        <img src={char.image} className={"character-img"} alt={"character-img"}/>
                    </div>

                    <div/>

                    <div className={"asset-bottom"}>
                        <img className={"asset-line"} src={line} alt={"line"}/>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="ellipsis-v" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 192 512"
                             className="svg-inline--fa fa-ellipsis-v fa-w-6 fa-2x">
                            <path fill="currentColor"
                                  d="M96 184c39.8 0 72 32.2 72 72s-32.2 72-72 72-72-32.2-72-72 32.2-72 72-72zM24 80c0 39.8 32.2 72 72 72s72-32.2 72-72S135.8 8 96 8 24 40.2 24 80zm0 352c0 39.8 32.2 72 72 72s72-32.2 72-72-32.2-72-72-72-72 32.2-72 72z"
                                  className=""></path>
                        </svg>
                    </div>

                    <div className={"div-more-label"}>
                        <span>
                            <h3 className={"character-label more-label"}> Type:  {char.type}  </h3>
                            <h3 className={"character-label more-label"}> Origin: {char.origin && char.origin.name} </h3>
                            <h3 className={"character-label more-label"}> Location: {char.location && char.location.name} </h3>
                        </span>
                    </div>

                    <div/>

                    <div className={"more-info"}>
                        <svg onClick={(e) => pasarArriba(1)}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                             className="svg-inline--fa fa-chevron-up fa-w-14 fa-2x">
                            <title>Back Character</title>
                            <path fill="currentColor"
                                  d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
                                  className=""></path>
                        </svg>

                        <svg onClick={(e) => pasarAbajo(1)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                             className="svg-inline--fa fa-chevron-down fa-w-14 fa-2x">
                            <title>Next Character</title>
                            <path fill="currentColor"
                                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                  className=""></path>
                        </svg>
                    </div>

                    <div/>

                    <div className={"more-info-mobile"}>
                        <svg onClick={(e) => pasarArriba(1)}  aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-up" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                             className="svg-inline--fa fa-chevron-up fa-w-14 fa-2x">
                            <title>Back Character</title>
                            <path fill="currentColor"
                                  d="M240.971 130.524l194.343 194.343c9.373 9.373 9.373 24.569 0 33.941l-22.667 22.667c-9.357 9.357-24.522 9.375-33.901.04L224 227.495 69.255 381.516c-9.379 9.335-24.544 9.317-33.901-.04l-22.667-22.667c-9.373-9.373-9.373-24.569 0-33.941L207.03 130.525c9.372-9.373 24.568-9.373 33.941-.001z"
                                  className=""></path>
                        </svg>

                        <svg onClick={(e) => pasarAbajo(1)} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                             className="svg-inline--fa fa-chevron-down fa-w-14 fa-2x">
                            <title>Next Character</title>
                            <path fill="currentColor"
                                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                  className=""></path>
                        </svg>
                    </div>

                    <div className={"more"}>
                        Learn more
                        <img className={"flecha-line"} src={line} alt={"flecha"}/>
                        <svg className={"fa-flecha-der"} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <path
                                d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0c-4.167,4.167-4.167,10.917,0,15.083  l141.792,141.792H10.667C4.771,245.333,0,250.104,0,256c0,5.896,4.771,10.667,10.667,10.667h464.917L333.792,408.458  c-4.167,4.167-4.167,10.917,0,15.083c2.083,2.083,4.813,3.125,7.542,3.125s5.458-1.042,7.542-3.125l160-160  C513.042,259.375,513.042,252.625,508.875,248.458z"/>
                            <path
                                d="M508.875,248.458l-160-160c-4.167-4.167-10.917-4.167-15.083,0  c-4.167,4.167-4.167,10.917,0,15.083l141.792,141.792H10.667C4.771,245.333,0,250.104,0,256c0,5.896,4.771,10.667,10.667,10.667  h464.917L333.792,408.458c-4.167,4.167-4.167,10.917,0,15.083c2.083,2.083,4.813,3.125,7.542,3.125s5.458-1.042,7.542-3.125l160-160  C513.042,259.375,513.042,252.625,508.875,248.458z"/>
                        </svg>
                    </div>
                    <div className={"more-character"}>
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="chevron-down" role="img"
                             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"
                             className="svg-inline--fa fa-chevron-down fa-w-14 fa-2x">
                            <title>Working in progres... </title>
                            <path fill="currentColor"
                                  d="M207.029 381.476L12.686 187.132c-9.373-9.373-9.373-24.569 0-33.941l22.667-22.667c9.357-9.357 24.522-9.375 33.901-.04L224 284.505l154.745-154.021c9.379-9.335 24.544-9.317 33.901.04l22.667 22.667c9.373 9.373 9.373 24.569 0 33.941L240.971 381.476c-9.373 9.372-24.569 9.372-33.942 0z"
                                  className=""></path>
                        </svg>
                    </div>
                </div>
            </StyledDashboard>
        </>
    )
}