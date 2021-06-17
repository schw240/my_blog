import styles from '../styles/Home.module.css'
import Image from "next/image";
import Header from '../components/layout/header';
import Footer from '../components/layout/footer'
import Home from '../components/home/homePage'
import homeText from '../public/texts/home'
import ReactHtmlParser from 'react-html-parser'

const home = ({ blogs }) => {
    return (
      <div className={styles.container}>
        
        <body>
          <Header>
            <Home></Home>
            <Footer></Footer>
          </Header>
        </body>
      </div>
  )
}

export default home