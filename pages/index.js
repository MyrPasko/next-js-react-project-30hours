import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
    state = {};

    /** Here server listen the promise and then render the page ONLY after
     * promise resolved.
     */
    static getInitialProps(context) {
        console.log(context);
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({appName: 'Super App'})
            }, 1000)
        })
        return promise;
    }

    render() {
        return (
            <div>
                <h1>The main Page of {this.props.appName}</h1>
                <p>
                    Go to{" "}
                    <Link href="/auth">
                        <a>Auth</a>
                    </Link>
                </p>
                <button onClick={() => Router.push("/auth")}>To Auth</button>
            </div>
        );
    }
}

export default IndexPage;
