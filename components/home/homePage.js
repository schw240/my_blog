import Image from 'next/image'
import ReactHtmlParser from 'react-html-parser'
import styles from '../../styles/Home.module.css'
import homeText from '../../public/texts/home'

const HomePage = ({ blogs }) => {
  return (
    <div className={styles.container}>
      {/* 이미지 + 메세지 */}
      <section className={styles.visualContainer}>
        <div className={styles.visual}>
          <div className={styles.mainImg}>
            <div className={styles.codeAni}>
              <Image src="/images/code.png" width={80} height={50.78} />
            </div>
            <div className={styles.humanImg}>
              <Image src="/images/human.png" width={399} height={287} />
            </div>
          </div>
          <div className={styles.typing}>안녕하세요,</div>
          <div className={styles.typingAni}>개발자 김한주입니다.</div>
        </div>
      </section>

      {/* 기술스택 */}
      <section className={styles.skillContainer}>
        <div className={styles.skills}>
          <div>Skills</div>
        </div>
        <div className={styles.explain}>
          {/* 웹 개발 파트별로 정리한 간략한 기술 스택입니다.<br />
            분야별 기술에 대하여 더 자세한 내용은 소개 페이지에서 확인 하실 수 있습니다. */}
          {ReactHtmlParser(homeText.explain)}
        </div>
        {/* 이미지 + 설명 */}
        <ul className={styles.skillsImg}>
          <li>
            <div>
              <Image src="/images/frontend.png" width={80} height={80} />
              <h3>Frontend</h3>
            </div>
            <p>
              HTML, CSS, <br />
              React SPA 개발
            </p>
          </li>
          <li>
            <div>
              <Image src="/images/backend.png" width={80} height={80} />
              <h3>Backend</h3>
            </div>
            <p>
              Django·NodeJS API 구축
              <br />
              MYSQL DB 스키마 설계
            </p>
          </li>
          <li>
            <div>
              <Image src="/images/server.png" width={80} height={80} />
              <h3>Devops</h3>
            </div>
            <p>
              Linux, AWS 서버구축
              <br />
              Git 버전관리
            </p>
          </li>
        </ul>
      </section>
    </div>
  )
}

export default HomePage
