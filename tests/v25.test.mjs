import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);
const ts=require('typescript');
const postcss=require('postcss');
const root=path.resolve(import.meta.dirname,'..');
const read=p=>fs.readFileSync(path.join(root,p),'utf8');
const features=read('src/V25Features.tsx');const app=read('src/App.tsx');const css=read('src/v25.css');
test('V2.5 TypeScript source parses cleanly',()=>{
 for (const f of ['src/App.tsx','src/V25Features.tsx']){
  const result=ts.transpileModule(read(f),{fileName:f,compilerOptions:{jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022},reportDiagnostics:true});
  assert.equal(result.diagnostics?.length??0,0,`${f}: ${result.diagnostics?.map(x=>x.messageText).join(';')}`);
 }
});
test('V2.5 CSS parses and supports mobile and reduced motion',()=>{
 postcss.parse(css);assert.match(css,/@media\(max-width:780px\)/);assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);assert.match(css,/\[data-theme="light"\]/);
});
test('six features are wired into the portfolio',()=>{
 for(const n of ['InteractiveTerminal','SpatialStack','RecruiterView','ProjectExperience','JourneyProgress','v25-recruiter-trigger'])assert.ok(app.includes(n),`Missing ${n}`);
 assert.ok(app.includes('className="v25-case-open"'));
 assert.ok(app.includes("className={'project-card project-'"));
});
test('safe simulated terminal supports expected commands',()=>{
 for(const cmd of ['help','about','skills','projects','experience','contact','cv','clear'])assert.ok(features.includes(`'${cmd}'`));
 assert.ok(features.includes('Command not found'));
 assert.ok(!features.includes('eval('));assert.ok(!features.includes('child_process'));
});
test('recruiter view provides real CV and verified contact',()=>{
 for(const s of ['Carlos Soto','Universidade de Aveiro','69','sototorrescarlos@gmail.com','/CV_Carlos_Soto_Torres.pdf'])assert.ok(features.includes(s));
 assert.ok(fs.existsSync(path.join(root,'public/CV_Carlos_Soto_Torres.pdf')));
});
test('dialogs support Escape and keyboard focus containment',()=>{
 assert.ok(features.includes("e.key==='Escape'"));assert.ok(features.includes("e.key==='Tab'"));assert.ok(features.includes('aria-modal="true"'));
});
test('Case studies avoid invented code links and preserve original project details',()=>{
 for(const x of ['ExamForge','AidRelease','C++ Fundamentals'])assert.ok(app.includes(x));
 assert.ok(features.includes('repository link: to be added'));
 assert.ok(app.includes('t.projectDetails[i].contribution'));
});
test('localization and original profile features remain intact',()=>{
 for(const x of ["type Lang = 'es' | 'en'",'portfolio-theme','profileTabs','ResumeModal','DigitalPlanet','mailto:${EMAIL}'])assert.ok(app.includes(x));
});
