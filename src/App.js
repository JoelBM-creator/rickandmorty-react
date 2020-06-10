import React from 'react';
import styled from 'styled-components';

import { useRoutes } from 'hookrouter';

import AppProvider from "./Components/AppProvider";
import { AppContext } from "./Components/AppProvider";
import { Dashboard } from "./Components/Dasboard";
import { Navbar } from "./Components/Navbar";



const StyledApp = styled.div`
    .background-text { 
        color: rgba(0,0,0,.1);
        font-size: 1450%;
        justify-content: center;
        display: flex;
        align-items: center;
        z-index: 1;
        white-space: nowrap;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
    }
    
    @media screen and (max-width: 1024px) {
      .background-text {
      font-size: 800%;
    }
`;

export function App() {
    const routes = {
        '/': () => <Dashboard />
    }

    const routeResult = useRoutes(routes);

    return(
        <AppProvider>
            <AppContext.Consumer>
                {({ web }) => (
                    <StyledApp>
                        <Navbar />
                        <div id={"routed-component-container"}>
                            <h1 className={"background-text"}>Rick and Morty</h1>
                            { routeResult }
                        </div>
                    </StyledApp>
                )}
            </AppContext.Consumer>
        </AppProvider>
    )
}

