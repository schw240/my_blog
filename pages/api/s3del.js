const aws = require('aws-sdk')
require('dotenv').config()

const s3 = new aws.S3({
  accessKeyId: process.env.S3_KEYID,
  secretAccessKey: process.env.S3_PRIVATE_KEY,
  region: process.env.REGION,
})

const delObj = async function (name) {
  console.log(name, '여기로 들어오는 url')
  let success = false
  try {
    const result = await s3
      .deleteObject({
        Bucket: process.env.BUCKET_NAME,
        Key: `jw_blog/${name}`,
      })
      .promise()
    console.log(result, '삭제 된건가요????')
    success = true
  } catch (err) {
    success = false
    console.log(err)
  }
  console.log(success, '성공???')
  return success
}

module.exports = delObj
