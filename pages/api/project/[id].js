const blogFunctions = require('../blog/blogFunction')

export default async function blog(req, res) {
  const { query } = req

  const sql = `SELECT * FROM GT_BLOG WHERE ID=${query.id}`

  const result = await blogFunctions.getObj(sql)
  console.log(result)
  if (result !== false) {
    res.status(200).json({
      title: result.TITLE,
      skills: result.SKILLS,
      date: result.DATE,
      contents: result.CONTENTS,
    })
  } else {
    res.status(400).end('FAIL')
  }
}
