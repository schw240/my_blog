import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import Image from 'next/image';
// import styles from '../../styles/Header.'

const Header = ({ children }) => {
    return (
      <>
          <div className="header">
              <div className="container">
                  <div className="container-left clearfix">
                    <div className="logo">
                      <Link href="/"><a><Image
                        src="/dev_logo.jpg"
                        alt="logo"
                        width={50}
                        height={50}
                      /></a></Link>
                    </div>
                    <div className="menu clearfix">
                      <div className="menu-item"><Link href="/"><a>소개</a></Link></div>
                      <div className="menu-item"><Link href="/project"><a>프로젝트</a></Link></div>
                      <div className="menu-item"><Link href="https://blog.naver.com/schw240"><a>블로그</a></Link></div>
                      <div className="menu-item"><Link href="https://github.com/schw240"><a>깃허브</a></Link></div>
                    </div>
                    <div className="login"><Link href="/login"><a>로그인</a></Link></div>
                  </div>
              </div>
          </div>
        {children}
      </>
    );
  };

Header.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
export default Header;