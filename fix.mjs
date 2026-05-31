import fs from "fs";
let content = fs.readFileSync("src/data.ts", "utf8");

content = content.replace("```\nDISCAR", "\\`\\`\\`\nDISCAR");
content = content.replace("```\\`\n  },", "\\`\\`\\`\n`\n  },");

// Just to be safe, replace any standalone ``` with \\`\\`\\` that isn't already escaped.
// But to be precise:
// I'll just manually fix line 358 and 370 exactly.

let lines = content.split('\n');
for (let i = 0; i < lines.length; i++) {
   if (lines[i].includes('DISCAR') && i > 0 && lines[i-1].trim() === "```") {
      lines[i-1] = lines[i-1].replace("```", "\\`\\`\\`");
   }
   if (lines[i].includes('SOLICITA WHATSAPP E PREPARA MATERIAL') && i < lines.length - 1 && lines[i+1].trim().startsWith("```")) {
      lines[i+1] = "\\`\\`\\`\n`";
   }
}

content = lines.join('\n');
fs.writeFileSync("src/data.ts", content);
console.log("Fixed manually line by line");
