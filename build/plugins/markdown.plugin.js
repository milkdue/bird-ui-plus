/*
 * @Author: 可以清心
 * @Description: markdown重写规则
 * @Date: 2024-02-02 16:43:28
 * @LastEditTime: 2024-02-03 17:03:11
 */
exports.markdownCustomTitle = function(markdown) {
    markdown.renderer.rules.heading_open = (tokens, index) => {
        const title = tokens[index + 1].content;
        const level = tokens[index].tag.slice(-1);

        return `
            <h${level}
                id="${title.replace(/[ ]/g, "-")}"
                class="snippet-title"
            >
                ${title}
            </h${level}
        `;
    };

    markdown.renderer.rules.heading_close = () => {
        return ">";
    };
};

exports.markdownCustomTable = function(markdown) {
    markdown.renderer.rules.table_open = () => {
        return `
            <div class="table-container">
                <table>
        `;
    };

    markdown.renderer.rules.table_close = () => {
        return `
                </table>
            </div>
        `;
    };
};
