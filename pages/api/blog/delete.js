const blogFunctions = require('./blogFunction')

export default async (req, res) => {
  const { query } = req
  console.log(query)
  const sql = `DELETE FROM blog_test WHERE id=${query.id}`

  const result = await blogFunctions.getObj(sql)
  if (result !== false) {
    res.status(200).end('OK')
  } else {
    res.status(400).end('FAIL')
  }
}
