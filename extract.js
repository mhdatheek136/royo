const fs = require('fs');
const content = fs.readFileSync('public/Sri_Lanka_provinces.svg', 'utf8');

const provincesMap = {
    '#ff9470': 'northern', // Northern (has islands), wait, path58 is around Sabaragamuwa but colored #ff9470? Let's fix that manually.
    '#808000': 'eastern',
    '#ffff90': 'north-central',
    '#70a0ff': 'north-western',
    '#ffa0a0': 'central',
    '#00f0f0': 'uva',
    '#ff80c0': 'sabaragamuwa',
    '#ffc000': 'western',
    '#b3ff40': 'southern'
};

const map = {
    northern: [], eastern: [], 'north-central': [], 'north-western': [],
    central: [], uva: [], sabaragamuwa: [], western: [], southern: []
};

let regex = /<path\s+fill="([^"]+)"[^>]*?d="([^"]+)"/g;
let match;
while ((match = regex.exec(content)) !== null) {
    const color = match[1];
    const d = match[2];
    if (color !== '#ffffff' && color !== '#000000') {
        let prov = provincesMap[color];
        if (prov) {
            if (d.startsWith(' M 293.2 696.8')) {
                map.southern.push(d); // Island 58 in South
            } else {
                map[prov].push(d);
            }
        }
    }
}

regex = /<path\s+d="([^"]+)"[^>]*?fill="([^"]+)"/g;
while ((match = regex.exec(content)) !== null) {
    const d = match[1];
    const color = match[2];
    if (color !== '#ffffff' && color !== '#000000') {
        let prov = provincesMap[color];
        if (prov) map[prov].push(d);
    }
}

console.log(JSON.stringify(map, null, 2));
