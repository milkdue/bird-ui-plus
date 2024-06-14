/*
 * @Author: 可以清心
 * @Description: 自定义处理 .md 文件的loader
 * @Date: 2024-01-16 14:05:43
 * @LastEditTime: 2024-02-04 14:34:09
 */
const fs = require("fs");
const MarkdownIt = require("markdown-it");
const { handleMatch } = require("../utils/match.util");
const { walkSync } = require("../utils/dir.util");
const {
    markdownCustomTitle,
    markdownCustomTable
} = require("../plugins/markdown.plugin");

const markdownIt = MarkdownIt({
    html: true,
    xhtmlOut: false
});

markdownIt.use(markdownCustomTitle);
markdownIt.use(markdownCustomTable);

module.exports = function markdownLoader(markdownContent) {
    const options = this.getOptions();
    markdownContent = markdownIt.render(markdownContent);
    const snippetReg =
        /(?<q>:{3})(?<flag>demo|default)\s+(?<content>[\s\S]+?)\s+\k<q>/g;
    const matches = markdownContent.matchAll(snippetReg);

    let importScripts = [];
    let componentNames = [];

    for (const match of matches) {
        const { flag, content } = match.groups;

        //! 这里可采用策略模式，待优化 目前只有demo 后续增加其他类型
        if (flag === "demo") {
            let { title, desc, demoName } = handleMatch(content);
            const tagReg = /^<([a-zA-Z-]+)\s*\/?>/;

            let kababCaseName = demoName.match(tagReg)[1];
            let pascalCase = kababCaseName
                .split("-")
                .map(name => name.charAt(0).toUpperCase() + name.substring(1))
                .join("");

            if (!componentNames.includes(pascalCase)) {
                importScripts.push(
                    `import ${pascalCase} from "./${kababCaseName}.vue"`
                );
                componentNames.push(pascalCase);
            }

            // let code = fs.readFileSync(`./${kababCaseName}.vue`);

            let filePath = walkSync(options.path, `${kababCaseName}.vue`);
            let code = fs.readFileSync(filePath, { encoding: "utf-8" });

            markdownContent = markdownContent.replace(
                new RegExp(`<p>\s*${match[0]}\s*</p>`),
                `
                <bird-snippet
                    title="${title}"
                    code="${encodeURIComponent(code)}"
                >
                    <template #desc>
                        ${markdownIt.render(desc)}
                    </template>
                    <template #demo>
                        ${demoName}
                    </template>
                </bird-snippet>
                `
            );
        }

        if (flag === "default") {
            const tagReg = /<([a-zA-Z-]+)\s*\/?>/g;
            const tagList = content.match(tagReg);

            tagList &&
                tagList.forEach(tag => {
                    const reg = /<([a-zA-Z-]+)\s*\/?>/;
                    let kababCaseName = tag.match(reg)[1];
                    let pascalCase = kababCaseName
                        .split("-")
                        .map(
                            name =>
                                name.charAt(0).toUpperCase() + name.substring(1)
                        )
                        .join("");

                    if (!componentNames.includes(pascalCase)) {
                        importScripts.push(
                            `import ${pascalCase} from "./${kababCaseName}.vue"`
                        );
                        componentNames.push(pascalCase);
                    }
                });

            markdownContent = markdownContent.replace(
                new RegExp(`<p>\s*${match[0]}\s*</p>`),
                `
                    <div class="default-content">
                        ${content}
                    </div>
                `
            );
        }
    }

    // const template = `
    //     <template>
    //         <div>
    //             ${markdownContent}
    //         </div>
    //     </template>
    //     <script>
    //         ${importScripts.join(";")}
    //         export default {
    //             components: {
    //                 ${componentNames.join(",")}
    //             }
    //         }
    //     </script>
    // `;

    const template = `
        <template>
            <bird-doc>
                ${markdownContent}
            </bird-doc>
        </template>
        <script>
            ${importScripts.join(";")}
            export default {
                components: {
                    ${componentNames.join(",")}
                }
            }
        </script>
    `;

    return template;
};
