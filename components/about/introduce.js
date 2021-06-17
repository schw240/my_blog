import styles from '../../styles/About.module.css'
import React from 'react';  
import aboutText from '../../public/texts/about'
import ReactHtmlParser from 'react-html-parser'

const Introduce = ({}) => {

    return (
      <>
        <div className={styles.container}>
            {/* INTRODUCE */}
            <section className={styles.introduce}>
                <div>
                    <h2>개발자 소개</h2>
                    {/* <p>웹 브라우저를 통해 사람을 연결하고 현실 문제를 해결, 개선하는 매력에 푹 빠져 웹 개발을 길을 걷고 있습니다.</p>
                    <p>Python으로 프로그래밍을 시작하여 Javascript의 매력에 푹빠져있고 사회와 코딩을 조금씩 알아가고 있는 사회 초년생입니다.</p>
                    <p>문제의식과 해결의 과정으로 성장하고 있으며 항상 새로운 기술에 적극적으로 도전합니다.</p>
                    <br/>
                    <p>다양한 개발 스코프를 공부하면서 웹 기획부터 배포·유지보수까지의 과정에 대해 경험해 보았습니다.</p>
                    <p>최근에는 프론트엔드에 관심을 가지고 뿌리깊은 개발자를 목표로 노력하고 있습니다.</p>
                    <br/>
                    <p>반갑습니다, 신뢰를 가장 중요시하는 개발자 김한주입니다.</p> */}
                    <p>{ReactHtmlParser(aboutText.introduce)}</p>
                </div>
            </section>

            {/* SECTION_LINE */}
            <div id={styles.section_line}></div>
        </div>
      </>
    );
  };

  
export default Introduce;