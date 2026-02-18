const { execSync } = require("child_process");

// Récupère les arguments passés après `--`
const args = process.argv.slice(2);

if (!args[0]) {
    console.error("❌ Usage: npm run android -- <flavor> [release]\nExample: npm run android -- gruiss release");
    process.exit(1);
}

const flavor = args[0].toLowerCase();
const buildType = args[1] === "release" ? "Release" : "Debug";

const mode = `${flavor}${buildType}`;
const appIdSuffix = flavor;

// Compose la commande react-native
const command = `npx react-native run-android --mode=${mode} --appIdSuffix=${appIdSuffix}`;

console.log(`🚀 Running: ${command}`);
execSync(command, { stdio: "inherit" });