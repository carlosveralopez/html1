import * as fs from "fs";
import * as path from "path";
import * as ejs from "ejs";

// Make sure that api key was set in env vars

if (!process.env.MARVEL_API_KEY) {
  throw new Error("You have to set MARVEL_API_KEY as an environment variable");
}

const envFilesDir = path.join(__dirname, "../src/environments");

const templateNames = [
  "environment.ts.template",
  "environment.prod.ts.template"
];

const templateFiles = templateNames.map(filename =>
  fs.readFileSync(path.join(envFilesDir, filename), { encoding: "utf-8" })
);

const targetNames = templateNames.map(
  target => target.match(/^(.+)\.template$/)!![1]
);

templateFiles.forEach((content, i) => {
  fs.writeFileSync(
    path.join(envFilesDir, targetNames[i]),
    ejs.render(content, { ...process.env })
  );
});

process.exit(0);
