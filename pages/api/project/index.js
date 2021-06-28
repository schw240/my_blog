const blogFunctions = require('../blog/blogFunction')
const db = require('../../../config/db')
// export default async (req, res) => {
//   const sql = 'SELECT * FROM GT_BLOG'
//   console.log(sql)
//   const P_PJT = await blogFunctions.getList(sql)
//   console.log(P_PJT)

//   if (P_PJT !== false) res.status(200).json(P_PJT)
//   else res.status(400).end('FAIL')
// }

export default async (req, res) => {
  const sql = 'SELECT * FROM GT_BLOG'
  const P_PJT = await blogFunctions.getList(sql)
  const results = []
  for (const i of P_PJT) {
    const result = {}
    result.id = i.ID
    result.title = i.TITLE
    result.skills = i.SKILLS
    result.date = i.DATE
    result.contents = i.CONTENTS
    results.push(result)
  }
  if (P_PJT !== false) res.status(200).json(results)
  else res.status(400).end('FAIL')
}
