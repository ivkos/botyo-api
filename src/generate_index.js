const glob = require("glob");
const fs = require("fs");

function makeExportStatementForPath(path) {
    const pathWithoutExt = path.replace(/\.ts$/, "");
    return `export * from "${pathWithoutExt}";`
}

glob("./api/**/*.ts", (err, files) => {
    if (err) return console.error(err);

    const indexPath = "./index.ts";
    fs.truncateSync(indexPath);

    const data = files.map(makeExportStatementForPath).join("\n");
    fs.writeFileSync(indexPath, data);
});