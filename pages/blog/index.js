import React from 'react'
import Head from 'next/head'
import axios from 'axios'
import BlogLayout from '../../components/blog/layout'
import BlogEntry from '../../components/blog/entry'
import Path from '../../components/common/path'

const Blog = ({ blogs, entries, cnt, posts }) => {
  return (
    <div>
      <Head>
        <title>PKK Blog</title>
        <meta name="description" content="Generated by PKK" />
        <link rel="icon" href="/favicon.png?v=2" />
      </Head>
      <Path path=" 블로그" />
      <BlogLayout cate={entries}>
        <BlogEntry posts={posts} />
      </BlogLayout>
    </div>
  )
}

Blog.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3000/api/blog')
  const { data } = response
  // console.log(data)
  return {
    entries: data.entries,
    posts: data.posts,
  }
}

export default Blog
