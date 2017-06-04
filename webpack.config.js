module.exports = {
  entry: __dirname + "/js/index.js",//已多次提及的唯一入口文件
  output: {
    path:   __dirname +"/packed",//打包后的文件存放的地方
    filename: "bundle.js"//打包后输出文件的文件名
  }
}

module: {//在配置文件里添加JSON loader
    loaders: [
      {
        test: /\.json$/,
        loader: "json-loader"
      },
        {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',//在webpack的module部分的loaders里进行配置即可
        query: {
          presets: ['es2015','react']
       }
   }
    ]
  }