import React, { Component } from "react";
import Link from "next/link";
import Router from "next/router";

class IndexPage extends Component {
    state = {};

    static async getInitialProps(context) {
        console.log(context);
        return {};
    }

    render() {
        return (
            <div>
                <h1>The main page!!!</h1>
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
