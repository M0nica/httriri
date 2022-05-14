import SEO from "../components/seo";
import Banner from "../components/banner";
import Header from "../components/header";
import Disclaimer from "../components/disclaimer";
import StatusCodeGrid from "../components/statusCodeGrid";
import Footer from "../components/footer";
import React from "react";

export default function Home() {
    return (
        <React.Fragment>
            <SEO />
            <div className="container">
                <main>
                    <Header />
                    <StatusCodeGrid />
                    <Disclaimer />
                </main>
                <Footer />
            </div>

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    padding-top: 5em;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                    background-color: #fff5f6;
                    color: #2a2135;
                }

                main {
                    padding: 4rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                @media (max-width: 600px) {
                    main {
                        padding: 6rem 0;
                    }
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI,
                        Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                        Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </React.Fragment>
    );
}
