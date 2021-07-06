import React, { useState, useRef } from 'react'
import { Editor as TUEditor } from '@toast-ui/react-editor'
import '@toast-ui/editor/dist/toastui-editor.css'
import Link from 'next/link'
import axios from 'axios'
import styles from '../../styles/Editor.module.css'

const imgList = []

const UpdateEditor = ({ cate, info }) => {
  const editorRef = useRef()
  let blobChange = false

  // 이미지 훅
  const uploadImg = async function (blob) {
    let result = ''
    try {
      const formData = new FormData()
      formData.append('img', blob)
      const url = await axios.post(
        'http://localhost:3000/api/upload',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        },
      )
      result = url.data
    } catch (err) {
      console.log(err)
      result = false
    }
    console.log(result)
    imgList.push(result.url)
    setPost({
      ...post,
      imgList,
    })
    console.log(post)
    return result
  }

  // 상태 값 가져오기~!
  const [post, setPost] = useState({
    category: '', // 카테고리 로직 추가해야함
    title: info.title,
    desc: info.desc,
    content: '',
    imgList: [],
  })

  // 입력 값 가져오기~
  const getValue = (e) => {
    const { name, value } = e.target
    // console.log(e)
    setPost({
      ...post,
      [name]: value,
    })
    console.log(post)
  }

  // 수정 확인
  const submitPost = async () => {
    await axios
      .post(`http://localhost:3000/api/blog/update?id=${info.id}`, {
        category: post.category,
        title: post.title,
        desc: post.desc,
        content: post.content,
        imgList: post.imgList,
      })
      .then(() => {
        alert('등록이 완료되었습니다.')
        location.replace('/blog')
      })
  }

  return (
    <div className={styles.Editor}>
      <div>
        <select className={styles.category} name="category" onChange={getValue}>
          <option value="">카테고리 선택</option>
          {cate.map((lst) => (
            <option value={lst.name} key={lst.id}>
              {lst.name}
            </option>
          ))}
        </select>
      </div>
      <div>
        <input
          className={styles.title}
          type="text"
          placeholder="제목"
          value={post.title}
          onChange={getValue}
          name="title"
        />
      </div>
      <div>
        <input
          className={styles.desc}
          type="text"
          placeholder="설명"
          value={post.desc}
          onChange={getValue}
          name="desc"
        />
      </div>
      <br />
      <br />
      <div id="TUE">
        <TUEditor
          initialValue={info.content}
          previewStyle="vertical"
          height="550px"
          initialEditType="markdown"
          useCommandShortcut
          ref={editorRef}
          onFocus={() => {
            editorRef.current.getInstance().removeHook('addImageBlobHook')
            editorRef.current
              .getInstance()
              .addHook('addImageBlobHook', async (blob, callback) => {
                if (blobChange === false) {
                  const url = await uploadImg(blob)
                  callback(url.url, url.name)
                  blobChange = true
                  return false
                }
                return false
              })
          }}
          onChange={() => {
            const data = editorRef.current.getInstance().getMarkdown()
            setPost({
              ...post,
              content: data,
            })
          }}
        />
      </div>
      <button className={styles.back}>
        <Link href={`/blog/${info.id}`}>취소</Link>
      </button>
      <button className={styles.submit} onClick={submitPost}>
        수정하기
      </button>
    </div>
  )
}

export default UpdateEditor