import Head from "next/head";

export default function SEO() {
    return (
        <Head>
            <meta property="og:title" content="HTTRiRi" />
            <title>HTTRiRi</title>
            <link
                rel="webmention"
                href="https://webmention.io/www.httriri.com/webmention"
            />
            <link
                rel="pingback"
                href="https://webmention.io/www.httriri.com/xmlrpc"
            />
            <link rel="icon" href="/favicon.ico" />
            <meta
                property="og:image"
                content="https://httriri.com/homepage-screenshot.png"
            />
            <meta property="og:url" content="https://httriri.com" />
            <meta
                property="og:description"
                content="Explore HTTP status codes with this collection of Rihanna GIFs"
            />

            <meta property="twitter:title" content="HTTRiRi" />
            <meta
                property="twitter:image"
                content="https://httriri.com/homepage-screenshot.png"
            />
            <meta name="twitter:card" content="summary_large_image" />
        </Head>
    );
}
