import { test } from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { createRequire } from 'node:module';
const require=createRequire(import.meta.url);
const ts=require('typescript');
const postcss=require('postcss');
const root=path.resolve(import.meta.dirname,'..');
const app=fs.readFileSync(path.join(root,'src/App.tsx'),'utf8');
const css=fs.readFileSync(path.join(root,'src/emerald.css'),'utf8');
test('App TSX parses without syntax errors',()=>{
  const result=ts.transpileModule(app,{fileName:'App.tsx',compilerOptions:{jsx:ts.JsxEmit.ReactJSX,target:ts.ScriptTarget.ES2022},reportDiagnostics:true});
  assert.equal(result.diagnostics?.length ?? 0,0);
});
test('both CSS stylesheets parse cleanly',()=>{
  postcss.parse(fs.readFileSync(path.join(root,'src/styles.css'),'utf8'));
  postcss.parse(css);
});
test('bilingual content and all six anchor sections remain available',()=>{
  for(const lang of ['es: {','en: {']) assert.ok(app.includes(lang),`Missing ${lang}`);
  for(const id of ['home','about','journey','stack','projects','contact']) assert.ok(app.includes(`'${id}'`));
  for(const project of ['ExamForge','HackMeridian','C++ Fundamentals']) assert.ok(app.includes(project));
});
test('canvas planet and accessible theme toggle exist',()=>{
  assert.ok(app.includes('function DigitalPlanet()'));
  assert.ok(app.includes('getContext(\'2d\')'));
  assert.ok(app.includes('requestAnimationFrame(draw)'));
  assert.ok(app.includes('aria-label={lang===\'es\'?\'Cambiar tema\':\'Toggle theme\'}'));
  assert.ok(app.includes('portfolio-theme'));
});
test('CSS includes responsive and reduced motion behavior',()=>{
  assert.match(css,/@media\(max-width:780px\)/);
  assert.match(css,/@media\(prefers-reduced-motion:reduce\)/);
  assert.match(css,/\[data-theme="light"\]/);
});

test('public contact email is active and accessible',()=>{
  assert.ok(app.includes("const EMAIL = 'sototorrescarlos@gmail.com'"));
  assert.ok(app.includes('href={`mailto:${EMAIL}`}'));
  assert.ok(!app.includes('Email — pendiente'));
  assert.ok(!app.includes('e.preventDefault()} className="disabled-contact"'));
});

test('V2.3 contains interactive profile tabs in both languages',()=>{
  assert.ok(app.includes('role="tablist"'));
  assert.ok(app.includes('aria-selected={profileTab===i}'));
  assert.ok(app.includes('profilePanels'));
  for(const x of ['Lo que hago','Cómo trabajo','Qué busco','What I build','How I work','What comes next']) assert.ok(app.includes(x));
});
test('V2.3 résumé is a printable accessible dialog with verified contact details',()=>{
  assert.ok(app.includes('role="dialog"'));
  assert.ok(app.includes('aria-modal="true"'));
  assert.ok(app.includes('window.print()'));
  assert.ok(app.includes('sototorrescarlos@gmail.com'));
  assert.ok(app.includes('University of Jaén'));
  assert.ok(app.includes('onKey'));
});
test('profile has responsive and print-only résumé styles',()=>{
  const styles=fs.readFileSync(path.join(root,'src/profile.css'),'utf8');
  postcss.parse(styles);
  assert.ok(styles.includes('@media print'));
  assert.ok(styles.includes('prefers-reduced-motion'));
  assert.ok(styles.includes('max-width:590px'));
});

test('name is consistently Carlos Soto Torres',()=>{
  assert.ok(app.includes('Carlos Soto Torres'));
  assert.ok(app.includes('CARLOS SOTO TORRES'));
  for(const f of ['src/App.tsx','index.html','README.md']) assert.ok(!fs.readFileSync(path.join(root,f),'utf8').toLowerCase().includes('torrex'));
});

test('résumé imports confirmed Erasmus and course details and offers original PDF',()=>{
  assert.ok(app.includes('Universidade de Aveiro'));
  assert.ok(app.includes('Inteligencia Artificial y Automatización'));
  assert.ok(app.includes('Ciberseguridad y Google Dorks'));
  assert.ok(app.includes('/CV_Carlos_Soto_Torres.pdf'));
  assert.ok(fs.existsSync(path.join(root,'public/CV_Carlos_Soto_Torres.pdf')));
});

test('V2.4 displays confirmed Erasmus dates in both languages',()=>{
  assert.ok(app.includes('SEP 2024 — JUL 2025'));
  assert.ok(app.includes('septiembre de 2024 a julio de 2025'));
  assert.ok(app.includes('September 2024 to July 2025'));
});
test('V2.4 AidRelease case includes verified user-supplied contributions',()=>{
  for(const value of ['AidRelease','Rust','Soroban','69 pruebas automatizadas','69 automated tests','Stellar Testnet','reembolsos','refunds']) assert.ok(app.includes(value),`Missing ${value}`);
  assert.ok(app.includes('colaboré en la integración frontend'));
});
test('V2.4 offers keyboard operable expandable details in both sections',()=>{
  assert.ok(app.includes('className="milestone-expand"'));
  assert.ok(app.includes('className="project-explore"'));
  assert.ok(app.includes('<summary>'));
  assert.ok(app.includes('t.projectDetails[i].contribution'));
  assert.ok(app.includes('t.projectDetails[i].validation'));
  const css=fs.readFileSync(path.join(root,'src/profile.css'),'utf8');
  assert.ok(css.includes('.project-explore summary:focus-visible'));
  assert.ok(css.includes('@media(prefers-reduced-motion:reduce)'));
});
