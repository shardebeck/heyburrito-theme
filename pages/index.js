import React from "react";
import fetch from "isomorphic-unfetch";
import Stars from "../components/Stars";

export default function HomePage({ stars }) {
    return <Stars stars={stars} />;
}

HomePage.getInitialProps = async () => {
    const res = await fetch("https://api.github.com/repos/zeit/next.js");
    const json = await res.json();
    return { stars: json.stargazers_count };
};
