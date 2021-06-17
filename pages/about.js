import styles from '../styles/About.module.css'
import Image from "next/image";
import React from 'react';  
import Header from '../components/layout/header';
import Footer from '../components/layout/footer'
import About from '../components/about/about'

const about = () => {
    return (
        <Header>
            <About></About>
            <Footer></Footer>
        </Header>
    )
}

export default about