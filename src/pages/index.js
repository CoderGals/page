import React from "react";
import Header from "../components/header";
import {Banner} from "../components/banner";
import Details from "./details";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";
import Agenda from "../components/agenda";

const Home = () => (
     <div>
         <Header/>
         <Banner/>
         <Agenda/>
         <Details/>
         <Sponsors/>
         <Footer/>
    </div>
)
export default Home;