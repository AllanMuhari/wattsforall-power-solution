import { mkdir, readFile, writeFile } from "node:fs/promises";
import { resolve } from "node:path";

const outputDirectory = resolve("dist");
const entryPage = await readFile(resolve(outputDirectory, "index.html"));
const routes = [
  "about",
  "how-it-works",
  "solution",
  "impact",
  "get-involved",
  "contact",
  "problem",
  "team",
];

await Promise.all(
  routes.map(async (route) => {
    const routeDirectory = resolve(outputDirectory, route);
    await mkdir(routeDirectory, { recursive: true });
    await writeFile(resolve(routeDirectory, "index.html"), entryPage);
  }),
);
