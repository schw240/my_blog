import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';

const Layout = ({ children }) => {
    return (
      <>
        <div className="header">
          <div className="container">
            <div className="container-left clearfix">
              <div className="logo">
                <Link href="/"><a><Image
                      src="/images/logo2.png"
                      alt="logo"
                      width={100}
                      height={60}
                /></a></Link>
              </div>
              <div className="menu clearfix">
                <div className="menu-item"><Link href="/about"><a>소개</a></Link></div>
                <div className="menu-item"><Link href="/project"><a>프로젝트</a></Link></div>
                <div className="menu-item"><Link href="https://blog.naver.com/schw240"><a>블로그</a></Link></div>
                <div className="menu-item"><Link href="https://github.com/schw240"><a>깃허브</a></Link></div>
              </div>
            </div>
          </div>
        </div>
        {children}
        <footer className="footerContainer">
          <div className="footerContents">
            <span>김한주 
              <p>|</p> 
              <Link href="/policy">
                <a>개인정보 처리방침</a>
              </Link>  
            </span>
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
              김한주 
              <p>|</p> 
              이메일 
              <p>|</p> 
              scwh240@naver.com 
              <p>|</p> 
              카카오톡 schw240 
              <p>|</p> 
              깃허브 schw240
            </span>
            <div>Copyright ⓒ 2021 KHJ All Rights Reserved.</div>
          </div>
        </footer>
      </>
    );
  };

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
export default Layout;