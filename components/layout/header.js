import Link from 'next/link'
import PropTypes from 'prop-types'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
  // console.log(cate)
  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className="header">
      <div className="container">
        <div className="container-left">
          <div className="logo">
            <Link href="/">
              <a>
                <Image
                  src="/images/logo2.png"
                  alt="logo"
                  width={100}
                  height={60}
                />
              </a>
            </Link>
          </div>

          <ul id={showLinks ? 'hidden' : ''} className="menu">
            <li className="menu-item">
              <Link href="/about">
                <a>소개</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/project">
                <a>프로젝트</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/blog">
                <a>블로그</a>
              </Link>
              {/* <ul>
                <li>파이썬</li>
                <li>JS</li>
                <li>DataStructure</li>
              </ul> */}
            </li>
            <li className="menu-item">
              <Link href="https://github.com/schw240">
                <a>깃허브</a>
              </Link>
            </li>
          </ul>
        </div>
        <div>
          {/* {cate.map((lst) => (
            <div key={lst.id}>
              <Link href="/">
                <a>{lst.name}</a>
              </Link>
            </div>
          ))} */}
        </div>

        {/* 토글버튼 */}
        <div id="toggle-btn" onClick={() => setShowLinks(!showLinks)}>
          Header Menu Toggle Button
        </div>
      </div>
    </div>
  )
}

// Header.propTypes = {
//   cate: PropTypes.node.isRequired,
// }

export default Header
