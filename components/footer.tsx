import { TwitterFollowButton } from "react-twitter-embed";
import styles from "./footer.module.css";

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                {" "}
                <p>
                    {" "}
                    ©{new Date().getFullYear()} &bull; Made with
                    <a
                        href="https://www.fentybeauty.com/"
                        className={styles.iconLink}
                    >
                        💄
                    </a>{" "}
                    by <a href="https://aboutmonica.com">Monica Powell</a>{" "}
                    &bull;
                    <a
                        href="https://github.com/M0nica/httriri/"
                        target="_blank"
                        rel="me noopener noreferrer"
                    >
                        Source Code
                    </a>{" "}
                    &bull;
                    <a
                        href="https://github.com/M0nica/httriri#adding-a-new-status-code"
                        target="_blank"
                        rel="me noopener noreferrer"
                    >
                        Add a Status Code
                    </a>
                    <TwitterFollowButton screenName={"indigitalcolor"} />{" "}
                </p>{" "}
            </div>
        </footer>
    );
}
