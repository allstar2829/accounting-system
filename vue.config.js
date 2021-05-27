module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/accounting-system/public/dist/'
      : '/'
  }