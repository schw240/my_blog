import React, { useState } from 'react'
import Link from 'next/link'
import axios from 'axios'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser'
import blogText from '../../public/texts/blog'
import styles from '../../styles/Blog.module.css'

const BlogLayout = ({ children, cate, cnt }) => {
  const [showBtn, setShowBtn] = useState(true)

  return (
    <>
      <div className={styles.blogContainer}>
        <link
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
          rel="stylesheet"
        />
        {/* Header */}
        <main className={styles.header}>
          <div>
            <br />
            <br />
            <div>블로그</div>
            <br />
            <div>
              <div className={styles.headerDesc}>
                {ReactHtmlParser(blogText.header)}
              </div>
            </div>
          </div>
        </main>
        <div
          id={styles.dropBtn}
          className="material-icons"
          onClick={() => setShowBtn(!showBtn)}
        >
          expand_more
        </div>

        <div id={showBtn ? 'hide' : ''} className={styles.toggle__cate}>
          {cate.map((lst) => (
            <div key={lst.id}>
              <Link href="/">
                <a>{lst.name}</a>
              </Link>
            </div>
          ))}
        </div>
        {/* Body */}
        <section>
          <div className={styles.listLayout}>
            {/* Side Bar */}
            <aside>
              <div className={styles.category}>
                <div>
                  <Link href="/blog">
                    <a>전체 보기 ({cnt})</a>
                  </Link>
                </div>
                <br />
                <div className={styles.subCategory}>
                  {cate.map((lst) => (
                    <div key={lst.id}>
                      <Link href="/">
                        <a>{lst.name}</a>
                      </Link>
                    </div>
                  ))}
                </div>
              </div>
            </aside>
            {/* Components (entry or detail) */}
            <article>{children}</article>
          </div>
        </section>
      </div>
    </>
  )
}

BlogLayout.propTypes = {
  children: PropTypes.node.isRequired,
  cate: PropTypes.node,
  cnt: PropTypes.number.isRequired,
}

export default BlogLayout
