import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import axios from 'axios'
import classNames from 'classnames'
import styles from '../../styles/project.module.css'
import Path from '../../components/common/path'

const icons = {
  position: 'relative',
  top: '4.5px',
  color: 'blue',
  fontSize: '22px',
}
const slideArrow = {
  position: 'relative',
  top: '35%',
  color: '#111',
  fontSize: '40px',
  border: '1px solid #ddd',
  borderRadius: '150px',
  backgroundColor: '#f3f3f1',
}

const project = ({ list }) => {
  return (
    <>
      <Path path=" 프로젝트" />
      <div>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        <div className={styles.body}>
          {/* <div>
            <span>zehness 메인</span>
            <span style={icons} className="material-icons">
              chevron_right
            </span>
            <span className={styles.title}>프로젝트</span>
          </div> */}
          <div className={styles.desc}>
            <span>
              개발을 통해 작은 문제를 해결하고 개선한
              <br />
              프로젝트들을 정리 했어요
            </span>
          </div>
          <div className={styles.companyPjt}>
            <div className={styles.companyPjtTitle}>
              <span>회사 프로젝트</span>
            </div>
            <div
              className={classNames({
                [styles.companyPjtDesc]: true,
                [styles.desc]: true,
              })}
            >
              <span>
                구성원으로서 작은 성과를 냈던 프로젝트 입니다.
                <br />
                보안상 간략하게 내용을 담았습니다.
              </span>
            </div>
            <div>
              <ul className={styles.companyListBox}>
                <li>
                  <div className={styles.intro}>
                    <div className={styles.logo}>
                      <Image width={48} height={48} src="/src/catpaw.png" />
                    </div>
                    <div className={styles.outline}>
                      <div>서드파티웹사이트</div>
                      <div>2020.02 ~ 2020.10</div>
                      <div>DFCAT</div>
                    </div>
                  </div>
                  <div className={styles.detail}>
                    <div>Vue, NodeJS, MongoDB, Express, AWS</div>
                    <div>던전앤파이터 API 이용 서드파티웹사이트 개발</div>
                    <div>기획·프론트엔드·백엔드·테스트·유지보수</div>
                    <div>개발인원 2인</div>
                  </div>
                  <div className={styles.link}>
                    <Link href="https://dfcat.net">
                      <a target="_blank">링크 &gt;</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className={styles.intro}>
                    <div className={styles.logo}>
                      <Image width={48} height={48} src="/src/lifeplanhd.png" />
                    </div>
                    <div className={styles.outline}>
                      <div>청생원 웹시스템</div>
                      <div>2019.04 ~ 2019.09</div>
                      <div>청각장애인생애지원센터</div>
                    </div>
                  </div>
                  <div className={styles.detail}>
                    <div>NodeJS, HTML/CSS, JQuery, MySQL, AWS</div>
                    <div>회사 소개 및 고객관리 웹 시스템 개발</div>
                    <div>기획·퍼블리싱·백엔드·테스트·배포·유지보수</div>
                    <div>개발인원 1인</div>
                  </div>
                </li>
                <li>
                  <div className={styles.intro}>
                    <div className={styles.logo}>
                      <Image width={48} height={48} src="/src/datagen.png" />
                    </div>
                    <div className={styles.outline}>
                      <div>블록체인 Dapp 서비스</div>
                      <div>2018.11 ~ 2019.02</div>
                      <div>데이터젠</div>
                    </div>
                  </div>
                  <div className={styles.detail}>
                    <div>Spring, JQuery, MariaDB</div>
                    <div>젠서비스 이벤트 및 토큰 모니터링 시스템 개발</div>
                    <div>기획·백엔드·테스트</div>
                    <div>개발 인원 1~2인</div>
                  </div>
                  <div className={styles.link}>
                    <Link href="https://play.google.com/store/apps/details?id=kr.co.datagen.gs.genservice">
                      <a target="_blank">링크 &gt;</a>
                    </Link>
                  </div>
                </li>
                <li>
                  <div className={styles.intro}>
                    <div className={styles.logo}>
                      <Image width={48} height={48} src="/src/nuvo.png" />
                    </div>
                    <div className={styles.outline}>
                      <div>일본 연금 프로젝트</div>
                      <div>2017.12 ~ 2018.04</div>
                      <div>누보사이버비지니스</div>
                    </div>
                  </div>
                  <div className={styles.detail}>
                    <div>Struts2, Spring, JQuery, Oracle</div>
                    <div>일본 연금 시스템 기능 개발</div>
                    <div>설계서 작성·백엔드·테스트</div>
                    <div>개발 인원 3~4인</div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className={styles.personalPjt}>
            <div className={styles.personalPjtTitle}>
              <span>개인 프로젝트</span>
            </div>
            <div
              className={classNames({
                [styles.personalPjtDesc]: true,
                [styles.desc]: true,
              })}
            >
              <span>
                다양한 기술을 학습하거나 간단한 문제를 해결하기 위한
                프로젝트입니다.
                <br />
                일부 프로젝트는 배포되어 운영되고 있습니다.
              </span>
            </div>
            <div>
              <ul className={styles.personalListBox}>
                <div className={styles.buttonPrev}>
                  <span style={slideArrow} className="material-icons">
                    chevron_left
                  </span>
                </div>
                <div className={styles.liBox}>
                  {list.map((list) => (
                    <li key={list.id}>
                      <Link href={`/project/${list.id}`}>
                        <a target="_blank">
                          <div className={styles.intro}>
                            <div className={styles.logo}>
                              <Image
                                width={365}
                                height={241}
                                src="/src/mok_aboutperiod.png"
                              />
                            </div>
                            <div className={styles.title}>{list.title}</div>
                            <div className={styles.detail}>
                              <div>{list.skills}</div>
                              <div>{list.date}</div>
                            </div>
                          </div>
                        </a>
                      </Link>
                    </li>
                  ))}
                </div>
                <div className={styles.buttonNext}>
                  <span style={slideArrow} className="material-icons">
                    chevron_right
                  </span>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

project.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3000/api/project')
  const { data } = response
  return {
    list: data,
  }
}

export default project
