import StatusBar from "components/status-bar";
import Header from "components/header";
import Footer from "components/footer";
import { Switch, Route } from 'react-router-dom';
import { PUBLIC_PREFIX } from "configs/app-config";
import PublicPage from "views/public";
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { useEffect } from "react";

export default function PublicLayout () {
    /**
     * If referral is detected then attach as a cookie which will be read by server on sign up.
     */
    useEffect(() => {
        const ref = new URLSearchParams(window.location.search).get("ref");

        if (ref) {
            const date = new Date();
            date.setTime(date.getTime() + 15 * 24 * 60 * 60 * 1000);
            let expires = 'expires=' + date.toUTCString();
            document.cookie = 'user_ref=' + ref + ';' + expires + ';path=/';
        }
    }, []);
    
    return(
        <>
        <StatusBar/>
        <Header/>
        <Content>
            <Switch>
                <Route path={PUBLIC_PREFIX}>
                    <PublicPage/>
                </Route>
            </Switch>
            <ToastContainer />
        </Content>
        <Footer/>
        </>
    )
}

const Content = styled.section`
    min-height:50vh;
    display:flex;
    justify-content:center;
    align-items:center;
    width:100%;
    padding: 20px;
    box-sizing: border-box;
`