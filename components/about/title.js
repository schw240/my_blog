import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from '../../styles/About.module.css'
import aboutText from '../../public/texts/about'

const AboutTitle = ({}) => {
  return (
    <>
      <div className={styles.container}>
        {/* TITLE */}
        <section className={styles.title}>
          <div>
            <h2>{ReactHtmlParser(aboutText.title)}</h2>
          </div>
        </section>
      </div>
    </>
  )
}

export default AboutTitle
