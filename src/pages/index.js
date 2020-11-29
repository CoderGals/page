import React from "react";
import Header from "../components/header";
import {Banner} from "../components/banner";
import Details from "./details";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import Agenda from "../components/agenda";
import Event from "../components/event-details";
import Rules from "../components/rules";
import History from "../components/history";
import Shop from "../components/shop";

// https://docs.google.com/forms/d/e/1FAIpQLScjMT07W6xiFoWi0jdkTRVi703gqwCZJ4_e-RGfcFtOgM002w/viewform?usp=sf_link

const Home = () => (
     <div>
         <Header/>
         <Banner/>
         <Agenda/>
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