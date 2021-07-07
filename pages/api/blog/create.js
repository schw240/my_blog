const moment = require('moment')
const blogFunctions = require('./blogFunction')
const delObj = require('../s3del')

export default async (req, res) => {
  const { body } = req
  const { imgList } = body
  const delList = []
  const imgVal = []

  // 넣었다가 삭제한 사진경로 찾기
  for (const i of imgList) {
    if (body.content.indexOf(i) === -1) {
      delList.push(i)
      imgList.splice(imgList.indexOf(i), 1)
    }
  }
  // 삽입 취소한 사진경로 s3에서 삭제해주기
  for (const i of delList) {
    const key = i.split('jw_blog/')[1]
    console.log(key, 'key가 뭔가요!')
    await delObj(key)
  }
  // blog 테이블에 데이터 insert
  const now = moment().format('YYYY-MM-DD HH:mm:ss')
  let sql = ''
  let val = []
  // 썸네일로 할 이미지가 있을 때,
  if (imgList.length) {
    sql =
      'INSERT INTO blog_test (`title`, `desc`, `content`, `date`, `thumb`) VALUES (?, ?, ?, ?, ?)'
    val = [body.title, body.desc, body.content, now, imgList[0]]
  } else {
    sql =
      'INSERT INTO blog_test (`title`, `desc`, `content`, `date`) VALUES (?, ?, ?, ?)'
    val = [body.title, body.desc, body.content, now]
  }

  const insertId = await blogFunctions.setToDB(sql, val)
  // 넣은 id를 외래키로 이미지 테이블에 insert
  const sql_img = 'INSERT INTO `T_IMG_JW` (`url`, `fk_blog`) VALUES ?;'
  // 테이블에 한번에 넣을 데이터
  for (const i of imgList) {
    imgVal.push([i, insertId])
  }
  console.log(imgVal)
  if (imgList.length) {
    const result = await blogFunctions.setToDB(sql_img, [imgVal])
    if (result !== false) {
      res.status(200).end('OK')
    } else {
      res.status(400).end('FAIL')
    }
  } else if (insertId !== false) {
    res.status(200).end('OK')
  } else {
    res.status(400).end('FAIL')
  }
}
