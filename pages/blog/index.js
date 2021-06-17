import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import Header from '../../components/header'
import BlogLayout from '../../components/blog/layout'
import BlogEntry from '../../components/blog/entry'
import Footer from '../../components/footer'

const Blog = ({ blogs, cate, cnt }) => {
  return (
    <div>
      <Head>
        <title>PKK Blog</title>
        <meta name="description" content="Generated by PKK" />
        <link rel="icon" href="/favicon.png?v=2" />
      </Head>

      <body>
        <Header>
          <BlogLayout cate={cate} cnt={cnt}>
            <BlogEntry blogs={blogs} />
          </BlogLayout>
          <Footer></Footer>
        </Header>
      </body>
    </div>
  )
}

Blog.getInitialProps = async () => {
  console.log("????????")
  const response = await axios.get('http://localhost:3000/api/blog')
  const data = response.data
  return {
    blogs : data.post,
    cate: data.cate,
    cnt: data.cnt,
  }
}

export default Blog