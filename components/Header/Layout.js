import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
import { useState } from 'react';


const Layout = ({ children }) => {
    const [showLinks, setShowLinks] = useState(true);

    return (
      <>
        <div className="header">
          <div className="container">
            <div className="container-left">

              <div className="logo">
                <Link href="/"><a><Image
                      src="/images/logo2.png"
                      alt="logo"
                      width={100}
                      height={60}
                /></a></Link>
              </div>

              <ul id={showLinks ? "hidden" : ""} className="menu">
                <li className="menu-item"><Link href="/about"><a>소개</a></Link></li>
                <li className="menu-item"><Link href="/project"><a>프로젝트</a></Link></li>
                <li className="menu-item"><Link href="https://blog.naver.com/schw240"><a>블로그</a></Link></li>
                <li className="menu-item"><Link href="https://github.com/schw240"><a>깃허브</a></Link></li>
              </ul>
            </div>
            
            {/* 토글버튼 */}
            <div id="toggle-btn" onClick={() => setShowLinks(!showLinks)}>Header Menu Toggle Button</div>

          </div>
        </div>

        <div id='overlay'>
          {children}

          <footer className="footerContainer">
            <div className="footerContents">
              <span>김한주</span>
              {/* 링크 */}
              <ul className="footerLinks">
                <li className="mail">
                  <Link href="/"><a><Image
                          src="/images/mail.png"
                          alt="mail"
                          width={20}
                          height={20}
                  /></a></Link>
                </li>
                <li className="kakao">
                  <Link href="/"><a><Image
                          src="/images/kakao.png"
                          alt="kakao"
                          width={20}
                          height={20}
                  /></a></Link>
                </li>
                <li className="sns">
                  <Link href="/"><a><Image
                          src="/images/git.png"
                          alt="github"
                          width={20}
                          height={20}
                  /></a></Link>
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
        </div>
      </>
    );
  };

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
export default Layout;