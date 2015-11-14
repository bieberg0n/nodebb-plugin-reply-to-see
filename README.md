# Reply a topic to see the content
 fork from <https://github.com/LYLLLRH/nodebb-plugin-move-to-reply>
 
## 变更
- 自动检测代码中的`[hide]``[/hide]`代码块(与discuz使用习惯一致), 支持一个帖子中多个部分的回复可见, 或者整体的回复可见(自己手动在帖子外部包裹代码块)
- 去除新增的提交回复可见按钮
- 改用[`cheerio`](https://github.com/cheeriojs/cheerio)处理dom,否则可能出现回复可见部分替换错误的问题
- 增加了回复可见块的样式
- 增加`filter:post.getPostSummaryByPids` hook, 能够过滤`categories`页面的最近回复中的内容

## TODO
- 管理员设置页面增加可用的设置项

## LICENSE
[MIT](http://gogoout.mit-license.org)