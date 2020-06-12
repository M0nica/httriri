export default function Banner() {
  return (
    <div className="banner">
      <blockquote>
        {" "}
        "So when we're marching and protesting and posting about the Michael
        Brown Jr.s and the Atatiana Jeffersons of the world, tell your friends
        to pull up." - Rihanna &bull; #BlackLivesMatter ✊🏽✊🏾✊🏿 &bull;{" "}
        <a
          className="donationLink"
          href="https://www.blackgirlscode.com/donations.html"
        >
          Donate to Black Girls Code
        </a>
      </blockquote>
      <style jsx>{`
          .banner {
            position: absolute;
            top: 0;
            color: white;
            background-color: black;
            width: 100%;
            padding: 0.5em;
            line
          }
          blockquote{
            max-width: 1110px;
          }
          .donationLink {
            color: white;
            font-weight: bold;
          }
        `}</style>
    </div>
  );
}
