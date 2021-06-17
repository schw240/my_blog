// const db = require('../../config/db')

// export default (req, res) => {
//   const sql3 = 'SELECT * FROM student_tb4'
//   return new Promise(async resolve => {
//     db.query(sql3, function (err, result) {
//       if (err) throw err
//       console.log("Table altered")
//       res.status(200).json(result[0].name)
//       return resolve()
//     })
//   })
// }