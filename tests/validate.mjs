import fs from 'node:fs';
import assert from 'node:assert/strict';
import vm from 'node:vm';
import crypto from 'node:crypto';
const html=fs.readFileSync(new URL('../index.html',import.meta.url),'utf8');
assert.ok(html.startsWith('<!doctype html>'),'HTML document present');
assert.match(html,/<meta name="viewport"/,'mobile viewport');
assert.match(html,/<div id="gp31"/,'original device root');
for(const marker of ['GeoDEX','localStorage','indexedDB','capture','cooldown','party','saveLibrary','gp-device-boot']) assert.ok(html.includes(marker),`Expected game component: ${marker}`);
const scripts=[...html.matchAll(/<script(?:\s[^>]*)?>([\s\S]*?)<\/script>/gi)];
let checked=0;
for(const m of scripts){if(m[0].slice(0,m[0].indexOf('>')).includes('application/json'))continue;new vm.Script(m[1],{filename:`inline-${++checked}.js`});}
assert.ok(checked>=1,'gameplay JS parsed');
assert.ok(!/<script[^>]+src=["']https?:/i.test(html),'no externally hosted JS');
const digest=crypto.createHash('sha256').update(html).digest('hex');
console.log(`PASS: ${checked} inline JS block(s) parse; original gameplay markers present; SHA-256 ${digest}; ${html.length} characters`);
console.log('NOTE: static validation is not a browser playtest, security audit, or proof of all 400 features.');
