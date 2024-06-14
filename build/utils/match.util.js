function handleMatch(content) {
    const lines = content.split(/\r?\n/);
    const len = lines.length;

    if (len === 1) {
        return {
            title: "",
            desc: "",
            demoName: lines[0]
        };
    } else if (len === 2) {
        return {
            title: lines[0],
            desc: "<p></p>",
            demoName: lines[1]
        };
    } else {
        return {
            title: lines[0],
            desc: lines[1] || "<p></p>",
            demoName: lines[2]
        };
    }
}

exports.handleMatch = handleMatch;