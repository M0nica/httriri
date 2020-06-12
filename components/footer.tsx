import { TwitterFollowButton } from "react-twitter-embed";

export default function Footer() {
  return (
    <>
      <footer>
        <div>
          {" "}
          <p>
            {" "}
            ©{new Date().getFullYear()} &bull; Made with
            <a href="https://www.fentybeauty.com/" className="icon-link">
              💄
            </a>{" "}
            by <a href="https://aboutmonica.com">Monica Powell</a>{" "}
          </p>{" "}
          <TwitterFollowButton screenName={"waterproofheart"} />
        </div>
      </footer>

      <style jsx>{`
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #b4747d;
        }

        footer a {
          color: #b4747d;
          font-weight: bold;
        }

        .icon-link {
          text-decoration: none;
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
    </>
  );
}
