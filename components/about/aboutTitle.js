import styles from '../../styles/About.module.css'
import React from 'react';  
import aboutText from '../../public/texts/about'
import ReactHtmlParser from 'react-html-parser'

const AboutTitle = ({}) => {

    return (
      <>
        <div className={styles.container}>

            {/* PATH */}
            <section className={styles.location}>
                <p>
                    <span className={styles.path}>블로그 메인</span>
                    <span className={styles.arrow}></span>
                    <span className={styles.on}> 소개</span>
                </p>
            </section>

            {/* TITLE */}
            <section className={styles.title}>
                <div>
                    <h2>
                        {/* <p>웹 브라우저로 사람을 연결하는 개발자</p>
                        <p>김한주에 대해 알아보세요!</p> */}
                        <p>{ReactHtmlParser(aboutText.title)}</p>
                    </h2>
                </div>
            </section>
        </div>
      </>
    );
  };

  
export default AboutTitle;