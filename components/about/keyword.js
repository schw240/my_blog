import styles from '../../styles/About.module.css'
import Image from "next/image";
import React from 'react';  

const Keyword = ({}) => {

    return (
      <>
        <div className={styles.container}>
            {/* KEYWORD */}
            <section className={styles.keywords}>
                <div>
                    <ul>
                        <li>
                            <div className={styles.kwimages}>
                                <Image src="/images/leaf.png" alt="주니어" data-tippy-content="주니어" width={64} height={64}/>
                            </div>
                            <p>사회 새싹</p>
                            <p>주니어</p>
                        </li>

                        <li>
                            <div className={styles.kwimages}>
                                <Image src="/images/language.png" alt="JS" width={64} height={64} />
                            </div>
                            <p>매력적인</p>
                            <p>Javascript</p>
                        </li>
                        <li>
                            <div className={styles.kwimages}>
                                <Image src="/images/flow.png" alt="문제의식 " width={64} height={64} />
                            </div>
                            <p>문제의식</p>
                            <p>해결과정</p>
                        </li>
                        <li>
                            <div className={styles.kwimages}>
                                <Image src="/images/root.png" alt="뿌리깊은" width={64} height={64} className={styles.kwimages}/>
                            </div>
                            <p>뿌리깊은</p>
                            <p>개발자</p>
                        </li>
                        <li>
                            <div className={styles.kwimages}>
                                <Image src="/images/trust.png" alt="신뢰" width={64} height={64} className={styles.kwimages}/>
                            </div>
                            <p>핵심가치</p>
                            <p>신뢰</p>
                        </li>
                    </ul>
                </div>
            </section>
        </div>
      </>
    );
  };

  
export default Keyword;