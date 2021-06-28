import Link from 'next/link'
import PropTypes from 'prop-types'
import Image from 'next/image'

const Footer = ({}) => {
  return (
    <>
      <footer className="footerContainer">
        <div className="footerContents">
          <span>김한주</span>
          {/* 링크 */}
          <ul className="footerLinks">
            <li className="mail">
              <Link href="/">
                <a>
                  <Image
                    src="/images/mail.png"
                    alt="mail"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </li>
            <li className="kakao">
              <Link href="/">
                <a>
                  <Image
                    src="/images/kakao.png"
                    alt="kakao"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </li>
            <li className="sns">
              <Link href="/">
                <a>
                  <Image
                    src="/images/git.png"
                    alt="github"
                    width={20}
                    height={20}
                  />
                </a>
              </Link>
            </li>
          </ul>
        </div>

        <div className="info">
          <span>
            <p>김한주 </p>
            <p> 이메일 </p>
            <p>|</p>
            <p> scwh240@naver.com </p>
            <p>|</p>
            <p>카카오톡 schw240 </p>
            <p>|</p>
            <p> 깃허브 schw240 </p>
          </span>
          <div>Copyright ⓒ 2021 KHJ All Rights Reserved.</div>
        </div>
      </footer>
    </>
  )
}

export default Footer
