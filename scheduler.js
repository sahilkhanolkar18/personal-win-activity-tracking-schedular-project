// test.js
import activeWin from "active-win";
import fs from "fs";

const LOG_FILE = "activity.log";

async function logActivity() {
  try {
    const win = await activeWin();

    if (!win) return;

    const time = new Date().toLocaleString();

    const logLine = `[${time}]
App: ${win.owner.name}
Title: ${win.title}
URL: ${win.url || "N/A"}
------------------------\n`;

    fs.appendFileSync(LOG_FILE, logLine);
  } catch (err) {
    fs.appendFileSync(LOG_FILE, `Error: ${err.message}\n`);
  }
}

// Run once (cron-style)
logActivity();
