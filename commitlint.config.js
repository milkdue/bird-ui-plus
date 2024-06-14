/*
 * @Author: 可以清心
 * @Description: git提交规范
 * @Date: 2024-01-12 13:30:48
 * @LastEditTime: 2024-01-14 17:17:49
 */
module.exports = {
    // extends 继承项 暂无 参照 @commitlint/config-conventional

    // 指定解析加载器的名称，相关的依赖必须是已经安装的
    parserPreset: "conventional-changelog-conventionalcommits",

    /*
	规则 同 eslint 2 1 0 error warn off
	规则元组第二个参数 always | never
		always: 违背这条规则时，则根据 (level) 进行提示
			例如：{ body-full-stop: [2, "always", "stop"] } 这条规则的含义是，如果提交的 body 没有以 stop 结尾，则 error 提示
		never: 反转这条规则，即满足这条规则时，则根据 (level) 进行提示
			例如：{ body-full-stop: [2, "never", "stop"] } 这条规则的含义是，如果提交的 body 以 stop 结尾了，则 error 提示
	*/
    rules: {
        // body 和 type 之间是否换行
        "body-leading-blank": [1, "always"],
        // body 允许的最大行数 100 行
        "body-max-line-length": [2, "always", 100],
        // footer 和 body 之间是否换行
        "footer-leading-blank": [1, "always"],
        // footer 允许的最大行数 100 行
        "footer-max-line-length": [2, "always", 100],
        // header 允许的最大字符长度 100
        "header-max-length": [2, "always", 100],
        // subject 的英文单词允许的风格
        "subject-case": [
            2,
            "never",
            ["sentence-case", "start-case", "pascal-case", "upper-case"]
        ],
        // subject 允许为空
        "subject-empty": [2, "never"],
        // subject 以指定的内容结尾 不能以. 结尾
        "subject-full-stop": [2, "never", "."],
        // type 的英文单词允许的风格
        "type-case": [2, "always", "lower-case"],
        // type 是否允许为空
        "type-empty": [2, "never"],
        // type 只允许为枚举列出的值
        "type-enum": [
            2,
            "always",
            [
                "init", // 初始化项目
                "build", // 构建系统配置更新 webpack 等
                "chore", // 不属于以上类型的其他类型(日常事务)
                "ci", // 继续集成流程配置更新 Travis，Jenkins，GitLab CI，Circle等
                "docs", // 文档更新
                "feat", // 新增功能
                "fix", // bug修复
                "perf", // performance 性能优化
                "refactor", // 重构代码(既没有新增功能，也没有修复 bug)
                "revert", // 回滚某个更早之前的提交
                "style", // 不影响程序逻辑的代码修改(修改空白字符，补全缺失的分号等)
                "test" // 新增测试用例或是更新现有测试
            ]
        ]
    },
    prompt: {
        questions: {
            type: {
                description: "选择您要提交的变更类型",
                enum: {
                    init: {
                        description: "🎉 Init | 初始化",
                        title: "Init",
                        emoji: "🎉"
                    },
                    feat: {
                        description: "✨ Features | 新功能",
                        title: "Features",
                        emoji: "✨"
                    },
                    fix: {
                        description: "🐛 Bug Fixes | Bug 修复",
                        title: "Bug Fixes",
                        emoji: "🐛"
                    },
                    docs: {
                        description: "📚 Documentation | 文档",
                        title: "Documentation",
                        emoji: "📚"
                    },
                    style: {
                        // 不影响代码含义的更改(空白、格式化、缺少分号等)
                        description: "💄 Styles | 风格",
                        title: "Styles",
                        emoji: "💄"
                    },
                    refactor: {
                        // 既不修复错误也不增加功能的代码更改
                        description: "📦 Code Refactoring | 代码重构",
                        title: "Code Refactoring",
                        emoji: "📦"
                    },
                    perf: {
                        // 改进性能的代码更改
                        description: "🚀 Performance Improvements | 性能优化",
                        title: "Performance Improvements",
                        emoji: "🚀"
                    },
                    test: {
                        // 添加缺失的测试或更正现有的测试
                        description: "✅ Tests | 测试",
                        title: "Tests",
                        emoji: "✅"
                    },
                    build: {
                        // 影响构建系统或外部依赖的更改(例如:gulp、broccoli、npm)
                        description: "🛠 Build System | 打包构建",
                        title: "Builds",
                        emoji: "🛠"
                    },
                    ci: {
                        // 更改CI配置文件和脚本(例如: Travis, Circle, BrowserStack, SauceLabs)
                        description: "👷 Continuous Integration | CI 配置",
                        title: "Continuous Integrations",
                        emoji: "👷"
                    },
                    chore: {
                        // 他不修改src或测试文件的更改
                        description: "🎫 Chore | 其他修改",
                        title: "Chores",
                        emoji: "🎫"
                    },
                    revert: {
                        // 回滚之前的提交
                        description: "⏪ Revert | 回退",
                        title: "Reverts",
                        emoji: "⏪"
                    }
                }
            },
            scope: {
                description: "更改的范围是什么(例如 组件或文件名)"
            },
            subject: {
                description: "短说明"
            },
            body: {
                description: "长说明 使用 | 换行"
            },
            isBreaking: {
                description: "是否有非兼容性说明?"
            },
            breakingBody: {
                description: "更长的非兼容性说明?"
            },
            breaking: {
                description: "描述非兼容性的变化"
            },
            isIssueAffected: {
                description: "是否影响任何issue?"
            },
            issuesBody: {
                description: "如果issue已关闭，则提交更长的提交描述"
            },
            issues: {
                description: "添加问题引用(例如: fix #123 fix issue111)"
            }
        }
    }
};
