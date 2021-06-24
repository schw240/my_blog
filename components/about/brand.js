import React from 'react'
import ReactHtmlParser from 'react-html-parser'
import styles from '../../styles/About.module.css'
import aboutText from '../../public/texts/about'

const Brand = ({}) => {
  return (
    <>
      <div className={styles.container}>
        {/* BRAND */}
        <section className={styles.brand}>
          <div>
            <h2>김한주 소개</h2>
            <p>{ReactHtmlParser(aboutText.brand)}</p>
          </div>
          {/* IDENTITY_IMG */}
          <div className={styles.identity} />

          <div className={styles.logoBox}>
            <div className={styles.desc}>
              <p>{ReactHtmlParser(aboutText.desc)}</p>
            </div>

            <div className={styles.bi}>
              <div className={styles.biImage} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
export default Brand
