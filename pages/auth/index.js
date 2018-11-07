import React from "react";
import User from '../components/User';

const authIndexPage = ({appName}) => {
    return (
        <div>
            <h1>The auth main page {appName}</h1>
            <User name="Myroslav" age="31"/>
        </div>
    );
};

authIndexPage.getInitialProps = (context) => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({appName: 'Super App (Auth)'})
        }, 1000)
    })
    return promise;
}

export default authIndexPage;
