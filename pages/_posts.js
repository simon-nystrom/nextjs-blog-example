const fs = require("fs");
const marked = require("marked");
const fm = require("front-matter");
const hljs = require("highlight.js")

marked.setOptions({
    highlight: function (code, lang) {
        if (lang) return hljs.highlight(lang, code).value;
        return code
    }
});

const postFiles = fs.readdirSync("posts");
const posts = [];
for (let i = 0; i < postFiles.length; i++) {
    const postContent = fs.readFileSync(`posts/${postFiles[i]}`, {
        encoding: "utf-8",
    });
    const { body, ...frontMatter } = fm(postContent);
    posts.push({
        html: marked(body),
        ...frontMatter,
    });
}

export default posts;