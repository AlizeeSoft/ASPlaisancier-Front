const { execSync } = require("child_process");

// Récupère les arguments passés après `--`
const args = process.argv.slice(2);

if (!args[0]) { 
    console.error("❌ Usage: npm run ios -- <scheme> [release]\nExample: npm run ios -- gruiss release"); 
    process.exit(1); 
}

let scheme = args[0];
scheme = scheme.charAt(0).toUpperCase() + scheme.slice(1);

const buildType = args[1] === "release" ? `${scheme}Release` : `${scheme}Debug`;

// const command = `npx react-native run-ios --scheme ${scheme} --mode ${buildType}`;
const command = `npx react-native run-ios --scheme ${scheme} --mode ${buildType}`;

console.log(`🚀 Running: ${command}`);
execSync(command, { stdio: "inherit" });