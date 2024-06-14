const path = require("path");
const fs = require("fs");

function walkSync(currentPath, fileName) {
    let resultPath;

    let traverse = function(currentPath, fileName) {
        let paths = fs.readdirSync(currentPath);

        for (let p of paths) {
            let filePath = path.join(currentPath, p);
            let stat = fs.lstatSync(filePath);

            if (stat.isFile()) {
                if (p === fileName) {
                    resultPath = filePath;
                    return;
                }
            } else {
                traverse(filePath, fileName);
            }
        }
    };

    traverse(currentPath, fileName);
    return resultPath;
}

exports.walkSync = walkSync;