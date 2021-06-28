import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from '../../styles/About.module.css'
import aboutText from '../../public/texts/about'

const Introduce = ({}) => {
  return (
    <>
      <div className={styles.container}>
        {/* INTRODUCE */}
        <section className={styles.introduce}>
          <div>
            <h2>개발자 소개</h2>
            {ReactHtmlParser(aboutText.introduce)}
          </div>
        </section>
        {/* SECTION_LINE */}
        <div id="section_line" />
      </div>
    </>
  )
}

export default Introduce
