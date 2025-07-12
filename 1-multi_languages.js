// 1-multi_languages.js
const args = process.argv.slice(2);

if (args.length === 0) {
    console.log("0 arguments");
} else if (args.length === 1) {
    console.log("1 argument");
} else if (args.length ===3) {
    console.log("3 arguments");
}