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