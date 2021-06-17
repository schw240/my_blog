import React, {useState} from 'react'
import Head from 'next/head'
import axios from 'axios'
import Header from '../../components/layout/header'
import Footer from '../../components/layout/footer'
import dynamic from 'next/dynamic'

const Editor = dynamic(() => import('../../components/editor/editor'), {ssr: false})

const Create = ({ cate }) => {
  return (
    <div>
        <Head>
            <title>PKK Blog</title>
            <meta name="description" content="Generated by PKK" />
        </Head>

        <Header>
          <Editor category={cate} />
          <Footer></Footer>
        </Header>
    </div>
  )
}

Create.getInitialProps = async () => {
  const response = await axios.get('http://localhost:3000/api/blog/cate')
  const data = response.data
  console.log('\n\n\n\n', data, '\n\n\n\n\n')
  return {
    cate: data,
  }
}

export default Create
