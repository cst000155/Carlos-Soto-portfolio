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
