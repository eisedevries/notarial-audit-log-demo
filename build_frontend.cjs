// Compiles the frontend JSX sources to plain JS, so the browser needs no Babel
// (no in-browser compile, no 'unsafe-eval' in the CSP). Mirrors build_states.py:
// re-run after editing the .jsx sources.
//
//   node build_frontend.cjs

const fs = require("fs");
const path = require("path");
const Babel = require("./build/babel.min.js");

const FRONTEND = path.join(__dirname, "frontend");
const SOURCES = ["components.jsx", "app.jsx"];

for (const name of SOURCES) {
  const src = fs.readFileSync(path.join(FRONTEND, name), "utf8");
  const { code } = Babel.transform(src, {
    // 'env' transpiles const/let/class to var/function (as babel-standalone did at
    // runtime): the two files share one global script scope, so block-scoped
    // re-declarations across files would otherwise throw. 'react' handles JSX.
    presets: ["env", "react"],
    filename: name,
    comments: false,
  });
  const out = name.replace(/\.jsx$/, ".js");
  const header = `// GENERATED from ${name} by build_frontend.cjs - do not edit.\n`;
  fs.writeFileSync(path.join(FRONTEND, out), header + code);
  console.log(`${name} -> frontend/${out} (${code.length} bytes)`);
}
