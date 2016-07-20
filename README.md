# reactDemo

 - 一个来自网络资源的，仿知乎回答列表
 - 使用reactjs进行组件化开发的DEMO
 - gulp提供自动化支持(gulp/browserify/vinyl-source-stream/reactify)
 	- gulp 是任务运行环境，用来进行任务调度
	- browserify 用来 require js 的模块
	- vinyl-source-stream 把 browserify 输出的数据进行准换，使之流符合 gulp 的标准
	- reactify 使用它来实现 JSX 编译功能
- bower提供前端的包管理
- bootstrap提供前端静态页面样式 

# 分解介绍

## gulpy几个插件的使用

- [gulp browserify综合使用1](http://www.jianshu.com/p/tY6UPN)

- [gulp browserify综合使用2](https://segmentfault.com/a/1190000004002631)

- [gulp-connect的使用](http://ofcss.com/2014/05/03/gulp-as-a-development-web-server-zh_cn.html)

## bower
- [简明教程](https://segmentfault.com/a/1190000002971135)


##bootstrap

- [bootstrap中文网第三版文档](http://v3.bootcss.com/)



###开发新的

1.开发流程是什么？

因为目前组件化开发还比较生疏，所以先写页面，然后将页面的标签进行分离，封装到独立的组件里

2.为什么在questionApp中定义方法？

略

3.怎么考虑state和props的传值？

略

4.questionList中的bind(this)做什么用的？


