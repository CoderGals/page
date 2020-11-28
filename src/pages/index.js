import React from "react";
import Header from "../components/header";
import {Banner} from "../components/banner";
import Details from "./details";
import Sponsors from "../components/sponsors";
import Footer from "../components/footer";

const Home = () => (
     <div>
         <Header/>
         <Banner/>
         <Details/>
         <Sponsors/>
         <Footer/>
    </div>
)
export default Home;