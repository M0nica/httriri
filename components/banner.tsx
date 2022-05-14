import styles from "./banner.module.css";

export default function Banner() {
    return (
        <div className={styles.banner}>
            <blockquote>
                {" "}
                "So when we're marching and protesting and posting about the
                Michael Brown Jr.'s and the Atatiana Jeffersons of the world,
                tell your friends to pull up." - Rihanna &bull;
                #BlackLivesMatter ✊🏽✊🏾✊🏿 &bull;{" "}
                <a
                    className={styles.donationLink}
                    href="https://www.blackgirlscode.com/donations.html"
                >
                    Donate to Black Girls Code
                </a>
            </blockquote>
        </div>
    );
}
