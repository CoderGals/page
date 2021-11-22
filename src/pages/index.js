import React from "react";
import Head from 'next/head'

import Header from "../components/header";
import {Banner} from "../components/banner";
import Details from "./details";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import Event from "../components/event-details";
import Rules from "../components/rules";
import History from "../components/history";
import Shop from "../components/shop";
import ComingSoon from "./coming-soon-page";
import About from "./../pages/about";

const Home = () => (
     <div>
         <Head>
             <title>Connect the dots</title>
             <meta name="viewport" content="initial-scale=1.0, width=device-width" />
         </Head>
         <Header/>
         <Banner/>
         {/*<Agenda/>*/}
         <About/>
         <ComingSoon/>
         <Details/>
         <Event/>
         <Rules/>
         <History/>
         <Shop/>
         <Sponsors/>
         <Footer/>
    </div>
)
export default Home;
