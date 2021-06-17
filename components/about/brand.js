import styles from '../../styles/About.module.css'
import React from 'react';  
import aboutText from '../../public/texts/about'
import ReactHtmlParser from 'react-html-parser'

const Brand = ({}) => {

    return (
      <>
        <div className={styles.container}>
            {/* BRAND */}
            <section className={styles.brand}>
                <div>
                    <h2>김한주 소개</h2>
                    {/* <p>어떤 사람인지, 어떤 것에 열정적인지를 파악하여 확립한 펄스널 브랜딩입니다.</p>
                    <p>세상에 많은 개발자들 중 '김현호'가 추구하는 가치를 브랜드화 하였습니다.</p> */}
                    <p>{ReactHtmlParser(aboutText.brand)}</p>
                </div>
                {/* IDENTITY_IMG */}
                <div className={styles.identity}></div>

                <div className={styles.logoBox}>
                    <div className={styles.desc}>
                        {/* <p>데브현 로고에서 텍스트는</p>
                        <p>'Developer'와 'Hyun Ho Kim'의 합성형태로</p>
                        <p>개발자 김현호를 의미힙니다.</p>
                        <br />
                        <p>심볼은 알파벳 D를 추상화하여 HTML의 닫는 태그 형태로</p>
                        <p>두 면의 모서리를 통해 소통의 이미지를 전달하였습니다.</p>
                        <br />
                        <p>Blue는 신뢰감을 주는 색상으로 핵심 가치를 반영하였습니다.</p>
                        <p>Black은 블루 컬러를 보완해주며 진취적이고 도전적인 의미를 담았습니다.</p> */}
                        <p>{ReactHtmlParser(aboutText.desc)}</p>
                    </div>

                    <div className={styles.bi}>
                        <div className={styles.biImage}></div>
                    </div>
                </div>
            </section>
            </div>
      </>
    );
  };

  
export default Brand;