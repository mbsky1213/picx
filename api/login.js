module.exports = async (req, res) => {
    if (req.body.password === process.env.CDN_PASSWORD) {
      return res.json({
        status: true,
        msg: '获取成功',
        token: process.env.CDN_TOKEN
      })
    }
  
    return res.json({
      status: false,
      msg: '密码错误',
      token: null
    })
  }
  