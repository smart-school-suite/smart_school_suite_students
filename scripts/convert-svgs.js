import { transform } from "@svgr/core";
import fs from "fs";
import path from "path";

const inputDir = "./assets/svgs";  // where your .svg files are stored
const outputDir = "./assets/icons";    // where React components will be generated

if (!fs.existsSync(outputDir)) fs.mkdirSync(outputDir, { recursive: true });

const files = fs.readdirSync(inputDir).filter(f => f.endsWith(".svg"));

for (const file of files) {
  const svgCode = fs.readFileSync(path.join(inputDir, file), "utf8");

  // Create a PascalCase component name (e.g., wifi-icon.svg → WifiIcon)
  const componentName = path.basename(file, ".svg")
    .replace(/(^\w|-\w)/g, m => m.replace("-", "").toUpperCase());

  transform(
    svgCode,
    {
      native: true,      // generate React Native-compatible code
      icon: true,        // optimize viewBox & sizing
      prettier: true,    // nice formatting
      replaceAttrValues: { "#000": "currentColor" }, // color flexibility

      // ✅ custom template ensures proper React + Svg imports & default export
      template: ({ template }, opts, { componentName, jsx }) => {
        const typeScriptTpl = template.smart({ plugins: ["jsx"] });
        return typeScriptTpl.ast`
          import * as React from "react";
          import Svg, { Path } from "react-native-svg";

          const ${componentName} = (props) => ${jsx};
          export default ${componentName};
        `;
      },
    },
    { componentName }
  ).then(jsCode => {
    fs.writeFileSync(path.join(outputDir, `${componentName}.js`), jsCode);
    console.log(`✅ Converted: ${file} → ${componentName}.js`);
  }).catch(err => console.error(`❌ Error processing ${file}:`, err));
}
