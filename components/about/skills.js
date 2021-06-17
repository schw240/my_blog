import styles from '../../styles/About.module.css'
import Image from "next/image";
import React from 'react';  
import aboutText from '../../public/texts/about'
import ReactHtmlParser from 'react-html-parser'

const Skills = ({}) => {

    return (
      <>
        <div className={styles.container}>
            {/* SKILLS */}
            <section className={styles.skills}>
                <div>
                    <h2>기술스택 소개</h2>
                    {/* <p>현업에서 사용하여 프로젝트를 진행하거나 관심있게 학습해본 경험이 있는 기술스택입니다.</p>
                    <p>실무·토이는 해당 언어를 사용하여 결과물을 도출해본 경험이 있으며 개발된 소스코드를 이해할 수 있습니다.</p>
                    <p>기초 단계는 관심있게 학습 중이며 일정 학습정도가 되면 토이 프로젝트를 진행할 계획이 있습니다.</p> */}
                    <p>{ReactHtmlParser(aboutText.skills)}</p>
                    <div className={styles.category}>

                        <div className={styles.detail}>
                            <div className={styles.default}>
                                <div className={styles.defaultImg}>
                                    <Image src="/images/frontend.png" alt="frontend" width={40} height={40} />
                                </div>
                                <div>
                                    <h3>Frontend</h3>
                                    <p>퍼블리싱 & SPA 프레임워크</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.list}>
                            <ul>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_html.png" alt="html" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            HTML
                                        </h3>
                                        <span className={styles.desc}>태그를 활용한 마크업</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_css.png" alt="css" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            CSS
                                        </h3>
                                        <span className={styles.desc}>PSD 화면 퍼블리싱</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_javascript.png" alt="JS" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            Javascript
                                        </h3>
                                        <span className={styles.desc}>VanillaJS·ES6 기본 문법 활용</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_vue.png" alt="VUE" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            Javascript
                                        </h3>
                                        <span className={styles.desc}>VanillaJS·ES6 기본 문법 활용</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_jquery.png" alt="VUE" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            JQuery
                                        </h3>
                                        <span className={styles.desc}>VanillaJS·ES6 기본 문법 활용</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_react.png" alt="VUE" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            React.JS
                                        </h3>
                                        <span className={styles.desc}>VanillaJS·ES6 기본 문법 활용</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className={styles.category}>

                        <div className={styles.detail}>
                            <div className={styles.default}>
                                <div className={styles.defaultImg}>
                                    <Image src="/images/backend.png" alt="backend" width={40} height={40} />
                                </div>
                                <div>
                                    <h3>Backend</h3>
                                    <p>MVC웹 개발 & RestAPI 서버 구축</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.list}>
                            <ul>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_java.png" alt="java" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            Java
                                        </h3>
                                        <span className={styles.desc}>객체지향에 대한 이해와 람다 활용</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_springboot.png" alt="springboot" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            SpringBoot
                                        </h3>
                                        <span className={styles.desc}>기본 환경 셋팅 및 라이브러리를 활용한 웹 개발</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_nodejs.png" alt="nodejs" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            NodeJS
                                        </h3>
                                        <span className={styles.desc}>Express기반의 REST API 구축</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_mysql.png" alt="mysql" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            MySQL       
                                        </h3>
                                        <span className={styles.desc}>JOIN, INDEX에 대한 이해를 바탕으로 SQL 작성</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_ts.png" alt="TS" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            TypeScript
                                        </h3>
                                        <span className={styles.desc}>타입 선언과 간단한 활용</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>

                    <div className={styles.category}>

                        <div className={styles.detail}>
                            <div className={styles.default}>
                                <div className={styles.defaultImg}>
                                    <Image src="/images/server.png" alt="server" width={40} height={40} />
                                </div>
                                <div>
                                    <h3>Devops</h3>
                                    <p>형상관리와 유지보수 & 서버 구축</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className={styles.list}>
                            <ul>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_aws.png" alt="AWS" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            AWS
                                        </h3>
                                        <span className={styles.desc}>EC2 서버 구축 및 운영</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_linux.png" alt="Linux" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            Linux
                                        </h3>
                                        <span className={styles.desc}>기본 명령어 숙지 및 서버 환경 설정</span>
                                    </div>
                                </li>
                                <li>
                                    <div className={styles.listImg}>
                                        <Image src="/images/skill_git.png" alt="Git" width={36} height={36} />
                                    </div>
                                    <div className={styles.description}>
                                        <h3>
                                            Git
                                        </h3>
                                        <span className={styles.desc}>형상관리에 필요한 기본적인 사용법 숙지</span>
                                    </div>
                                </li>
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* SECTION_LINE */}
            <div id={styles.section_line}></div>

        </div>
      </>
    );
  };

  
export default Skills;