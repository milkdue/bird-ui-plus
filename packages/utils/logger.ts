/*
日志的格式应该统一，以便于阅读
[时间戳] [日志等级] [消息内容] [错误堆栈]
*/
const LEVELS = ["DEBUG", "INFO", "WARN", "ERROR", "FATAL", "LOG"]
const LEVEL = [...LEVELS] as const
type Level = (typeof LEVEL)[number]

class Logger {
    static level: Level = "DEBUG" // 默认级别为DEBUG级别
    static setLevel(level: Level) {
        this.level = level
    }
    static shouldLog(level: Level) {
        const levels = LEVELS
        return levels.indexOf(level) >= levels.indexOf(this.level)
    }
    static log(level: Level, message: string, error?: Error) {
        if (!this.shouldLog(level)) {
            return
        }
        const timestamp = new Date().toISOString()
        const stack = error ? `\n${this.formatStack(error.stack!)}` : ""
        const formattedMessage = `[${timestamp}] [${level}] ${message} ${stack}`

        switch (level) {
            case "DEBUG":
                console.debug(formattedMessage)
                break
            case "INFO":
                console.info(formattedMessage)
                break
            case "WARN":
                console.warn(formattedMessage)
                break
            case "ERROR":
            case "FATAL":
                console.error(formattedMessage)
                break
            default:
                console.log(formattedMessage)
        }
    }
    static debug(message: string) {
        this.log("DEBUG", message)
    }
    static info(message: string) {
        this.log("INFO", message)
    }
    static warn(message: string) {
        this.log("WARN", message)
    }
    static error(message: string, error: Error) {
        this.log("ERROR", message, error)
    }
    static fatal(message: string, error: Error) {
        this.log("FATAL", message, error)
    }
    static formatStack(stack: string) {
        if (!stack) return ""

        return stack
            .split("\n")
            .map(line => `  ${line}`)
            .join("\n")
    }
}

export default Logger
