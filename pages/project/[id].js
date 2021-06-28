import React from 'react'
import axios from 'axios'

const PjtPost = ({ list }) => {
  return (
    <div>
      <div>프로젝트 포스트 동적 라우팅</div>
      <div>
        <span>{list.title}</span>
      </div>
      <div>{list.date}</div>
    </div>
  )
}

PjtPost.getInitialProps = async (context) => {
  const query = context.query.id
  const response = await axios.get(`http://localhost:3000/api/project/${query}`)
  const { data } = response
  return {
    list: data,
  }
}

export default PjtPost
