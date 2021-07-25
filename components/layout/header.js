import Link from 'next/link'
import axios from 'axios'
import Image from 'next/image'
import { useState } from 'react'

const Header = () => {
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
                <a>About</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/project">
                <a>Projects</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="/blog">
                <a>Blog</a>
              </Link>
            </li>
            <li className="menu-item">
              <Link href="https://github.com/schw240">
                <a>GitHub</a>
              </Link>
            </li>
          </ul>
        </div>
        <div />

        {/* 토글버튼 */}
        <div id="toggle-btn" onClick={() => setShowLinks(!showLinks)}>
          Header Menu Toggle Button
        </div>
      </div>
    </div>
  )
}

export default Header
