const fs = require('fs');
const map = JSON.parse(fs.readFileSync('provincesMap.json', 'utf8'));
let content = 'import { Province } from "./provinces";\n\nexport const provincePaths: Record<Province, string[]> = {\n';
for (const [prov, paths] of Object.entries(map)) {
    content += '  \'' + prov + '\': [\n';
    for (const p of paths) {
        content += '    "' + p.replace(/"/g, '\\"') + '",\n';
    }
    content += '  ],\n';
}
content += '};\n';
fs.writeFileSync('data/provincePaths.ts', content, 'utf8');
