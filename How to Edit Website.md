# 如何修改这个网站

这个文件夹就是我们之后一起修改的网站。主要文字都放在 `content` 文件夹中的 Markdown 文件里。

## 本地预览

双击 **Start Local Preview.command**。

浏览器会自动打开 `http://localhost:3005`。保持终端窗口开启，修改并保存 Markdown 后，网页会自动更新。结束时在终端按 `Control + C`。

## 去哪里修改

- `content/home.md`：姓名、职位、个人链接和 About me
- `content/interests/`：首页的四个 Recent research interests
- `content/research/`：每个研究方向一个 Markdown 文件
- `content/publications.md`：论文列表
- `content/talks.md`：报告列表
- `content/teaching.md`：课程和学术服务
- `content/blog/`：每篇研究笔记或 Blog 一个 Markdown 文件

## 修改格式

每个文件最上面的两条 `---` 之间是页面设置。它使用很规整的 `"名称": "内容"` 格式。两条 `---` 下面是正常的 Markdown 正文。

普通链接这样写：

```markdown
[Operations & Logistics Division](https://example.com)
```

Publication 和 Talks 使用 Markdown 表格。添加一项时，复制已有的一整行，再替换文字即可。表格内容中不要使用竖线字符 `|`。

## 更换本地照片

把照片放入 `public` 文件夹，例如命名为 `profile.jpg`，然后把 `content/home.md` 中的照片设置改为：

```text
"photo": "/profile.jpg"
```

之后你也可以直接在 Codex 对话里告诉我“把 About me 的第二段改成……”，我会修改同一份文件。
