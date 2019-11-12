#基于vue-cli(忘了什么版本装过反正都能用)



##功能配置及使用

### 1.常用目录别名
    //webpack.base.config.js
    '@': resolve('src'),
    'views':resolve('src/pages'),
    'components':resolve('src/components'),
    'utils':resolve('src/config/utils')
***
### 2.首屏加载过渡界面


加载spa应用会先加载index.html然后才会加载app.js
并且把#app内的内容替换掉,所以直接在index #app内写入
过渡的页面,当#app挂载之后会被替换从而实现一个首屏的
过渡.
***
### 3.使用 px to viewport 根据视觉稿转换成viewport

  postcss配置
  引入 postcss-px-to-viewport
  默认视觉稿 clientwidth:320 ihonese宽度
  忽略 vant前缀
  配合 @media 使用
  兼容性查询 https://caniuse.com/
***
###4.less支持、_mixins.less、common.less

    //npm i scss-resources-loader --save-dev
    //在webpack/utils下配置

      function lessResourceLoader() {
        var loaders = [
            cssLoader,
            'less-loader',
            {
                loader: 'sass-resources-loader',
                options: {
                    resources: [
                        path.resolve(__dirname, '../src/style/common.less'),
                        path.resolve(__dirname, '../src/style/_mixins.less'),
                    ]
                }
                        }
        ];
        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader'
            })
        } else {
            return ['vue-style-loader'].concat(loaders)
        }
    }
    //将原来的less配置改成
    //    less: lessResourceLoader(),
    //注意: 如果重复配置的话common内的内容会覆盖vant的配置
***

##5.页面切换动画+keepAlive
  在common.less下配置了两种transition 
  淡入淡出
  .fade
  左右切换
  .left
  .right
  transition的name 绑定了route.meta.transitionName
  需要使用watch监听然后动态配置transition的class头部
***
### 6.mock server

***
### 7.axios封装、api管理
axios封装
  axios配置在config文件夹
  http 封装axios
  api文件夹 调用http
  在main.js中将api置入vue中 vue.prototype._api=api
  在组件内通过 this._api.xxx.xxx调用
  返回一个promise 可以通过reject resolve对返回的结果进行处理

  响应拦截器:
    instance.interceptors.response.use()
    axios的响应拦截器是一个promise
    第一个函数返回resolve
      判断res.state是否是200
    第二个函数返回error
    判断是否有response 有的话 异常处理 401 404 403
    没有就判断是否断网 window.navegator.online
    否则就返回错误
