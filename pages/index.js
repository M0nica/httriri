import Head from "next/head";
import Banner from "../components/banner";
import Header from "../components/header";
import StatusCode from "../components/statusCode";
import Footer from "../components/footer";
import { TwitterFollowButton } from "react-twitter-embed";

const statuses = [
  { code: 100, title: "Continue" },
  { code: 101, title: "Switching Protocols" },
  { code: 200, title: "OK" },
  { code: 202, title: "Accepted" },
  { code: 300, title: "Multiple Choices" },
  { code: 301, title: "Moved Permanently" },
  { code: 400, title: "Bad Request" },
  { code: 402, title: "Payment Required" },
  { code: 403, title: "Forbidden" },
  { code: 406, title: "Not Acceptable" },
  { code: 407, title: "Proxy Authentication Required" },
  { code: 409, title: "Conflict" },
  { code: 410, title: "Gone" },
  { code: 418, title: "I'm a teapot" },
  { code: 426, title: "Upgrade required" },
  { code: 429, title: "Too many requests" },
  { code: 503, title: "Service unavailable" },
];

export default function Home() {
  return (
    <>
      <Banner />
      <div className="container">
        <Head>
          <meta property="og:title" content="HTTRiRi" />
          <title>HTTRiRi</title>
          <link rel="icon" href="/favicon.ico" />
          <meta property="og:image" content="/homepage-screenshot.png" />
          <meta property="og:url" content="https://httriri.com" />
          <meta
            property="og:description"
            content="Explore HTTP status codes with this collection of Rihanna GIFs"
          />
        </Head>

        <main>
          <Header />

          <div className="grid">
            {statuses.map(({ code, title }) => (
              <StatusCode code={code} title={title} key={code} />
            ))}
          </div>
          <p className="disclaimer">
            Images are used on this site for educational purposes only.
          </p>
        </main>
        <Footer />

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
            padding: 5rem 0;
            flex: 1;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          .disclaimer {
            font-size: 0.8em;
            font-style: italic;
          }

          a {
            color: inherit;
          }

          .grid {
            display: flex;
            align-items: center;
            justify-content: center;
            flex-wrap: wrap;

            max-width: 1200px;
            margin-top: 3rem;
          }

          .card {
            margin: 1rem;
            flex-basis: 45%;
            padding: 1.5rem;
            text-align: left;
            color: inherit;
            text-decoration: none;
            border: 1px solid #eaeaea;
            border-radius: 10px;
            transition: color 0.15s ease, border-color 0.15s ease;
          }

          @media (max-width: 600px) {
            main {
              padding: 6rem 0;
            }
            .grid {
              width: 100%;
              flex-direction: column;
            }
          }
        `}</style>

        <style jsx global>{`
          html,
          body {
            padding: 0;
            margin: 0;
            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
              Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
              sans-serif;
          }

          * {
            box-sizing: border-box;
          }
        `}</style>
      </div>
    </>
  );
}
