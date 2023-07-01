// import Head from "next/head";
// import Image from "next/image";
import Layout from "../components/Layout";
// import styles from "../styles/Home.module.css";
import LandingPage from "../src/LandingPage";
// import { useEffect, useRef } from "react";
// import HomePage from "../src/Home";
// import cat from "../public/cat.gif";
// import Walking from "../public/ABSOLUTE_ASSETS/Walking.gif";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import { Parallax, ParallaxLayer } from "@react-spring/parallax";
// import videoUrl from '../video/homePageVideo.mp4'
// import ReactPlayer from "react-player";
import Cookies from "js-cookie";
import dynamic from "next/dynamic";
const SignIn = dynamic(() => import("./SigninPage"));
const Loader = dynamic(() => import("components/Loader"));

export default function Home () {
  // const ref = useRef();
  const isAuthenticatetd = Cookies.get('userId') ? Cookies.get('userId') : false;

  return (
    <Layout>
      {/* {isAuthenticatetd ? */}
        <LandingPage />
        {/* :
        // isAuthenticatetd !== undefined ?
        // <SignIn />
        // :
        // <Loader/> */}
        {/* null
      } */}
    </Layout>
  );
}
