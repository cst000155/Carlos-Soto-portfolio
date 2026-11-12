import { ArchitectureDiagram } from './V26Features';
import { useEffect, useRef, useState } from 'react';
import { BriefcaseBusiness, Globe2, Check, ChevronRight, Clipboard, Download, ExternalLink, Github, Linkedin, Mail, Send, TerminalSquare, X, ArrowLeft, ArrowRight } from 'lucide-react';
import './v25.css';

type Lang = 'es' | 'en';
export type CaseStudy = {title:string;tag:string;subtitle:string;description:string;chips:string[]};
export type CaseDetail = {problem:string;contribution:string;validation:string};
const GH='https://github.com/cst000155';
const LI='https://www.linkedin.com/in/carlos-soto-torres-964149410/';
const EMAIL='sototorrescarlos@gmail.com';
const CV='/CV_Carlos_Soto_Torres.pdf';
const AIDRELEASE_DEMO='https://aidrelease.vercel.app/';
function useDialogEscape(close:()=>void){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const old=document.body.style.overflow;document.body.style.overflow='hidden';const before=document.activeElement as HTMLElement|null;
  ref.current?.focus();const key=(e:KeyboardEvent)=>{
   if(e.key==='Escape')close();
   if(e.key==='Tab'&&ref.current){const els=Array.from(ref.current.querySelectorAll<HTMLElement>('a[href],button:not(:disabled),input:not(:disabled)'));if(!els.length)return;const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}
  };document.addEventListener('keydown',key);return()=>{document.body.style.overflow=old;document.removeEventListener('keydown',key);before?.focus()};
 },[close]);return ref;
}
export function ProjectExperience({lang,projects,details,index,close}:{lang:Lang;projects:CaseStudy[];details:CaseDetail[];index:number;close:()=>void}){
 const ref=useDialogEscape(close);
 const [activeIndex,setActiveIndex]=useState(index);
 useEffect(()=>setActiveIndex(index),[index]);
 const activeProject=projects[activeIndex], activeDetail=details[activeIndex];
 const es=lang==='es';const titles=es?['El reto','Mi contribución','Validación y estado']:['The challenge','My contribution','Validation & status'];
 return <div className="v25-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)close()}}>
  <div role="dialog" aria-modal="true" aria-labelledby="v25-project-title" tabIndex={-1} ref={ref} className="v25-dialog v25-case">
   <header className="v25-dialog-head"><span className="v25-overline">{es?'PROYECTO / CASO DE ESTUDIO':'PROJECT / CASE STUDY'} — 0{activeIndex+1}</span><button type="button" className="v25-icon-button" onClick={close} aria-label={es?'Cerrar proyecto':'Close project'}><X size={20}/></button></header>
   <div className={'v25-case-art v25-case-art-'+activeIndex} aria-hidden="true"><span>{activeIndex===0?'EF':activeIndex===1?'⟡':'C++'}</span><i/><i/></div>
   <div className="v25-case-body"><span className="v25-overline">{activeProject.tag}</span><h2 id="v25-project-title">{activeProject.title}<span className="v25-dot">.</span></h2><p className="v25-subtitle">{activeProject.subtitle}</p><p>{activeProject.description}</p>
    <div className="v25-chips">{activeProject.chips.map(c=><span key={c}>{c}</span>)}</div>
    <div className="v25-case-sections">{[activeDetail.problem,activeDetail.contribution,activeDetail.validation].map((part,i)=><section key={titles[i]}><span>0{i+1}</span><div><h3>{titles[i]}</h3><p>{part}</p></div></section>)}</div>
    <div className="v26-case-block"><h3>{es?'Arquitectura técnica':'Technical architecture'}</h3><ArchitectureDiagram index={activeIndex} lang={lang}/></div>
    {activeIndex===1&&<a className="aidrelease-live-link aidrelease-case-link" href={AIDRELEASE_DEMO} target="_blank" rel="noopener noreferrer"><Globe2 size={18}/>{es?'Abrir AidRelease · demo pública':'Open AidRelease · live demo'}<ExternalLink size={16}/></a>}
    {activeIndex===1&&<div className="v25-case-proof"><strong>69</strong><span>{es?'pruebas automatizadas · transacciones verificadas en Stellar Testnet':'automated tests · verified transactions on Stellar Testnet'}</span></div>}
    <nav className="v27-case-nav" aria-label={es?'Navegación entre proyectos':'Project navigation'}><button type="button" onClick={()=>setActiveIndex(i=>(i+projects.length-1)%projects.length)}><ArrowLeft size={16}/>{es?'Anterior':'Previous'}</button><span aria-live="polite">0{activeIndex+1} / 0{projects.length}</span><button type="button" onClick={()=>setActiveIndex(i=>(i+1)%projects.length)}>{es?'Siguiente':'Next'}<ArrowRight size={16}/></button></nav>
    <p className="v25-pending">{activeIndex===1?(es?'Demo pública disponible. Repositorio y capturas reales pendientes de incorporar; ilustraciones conceptuales.':'Live demo available. Repository and real screenshots to be added; conceptual artwork.'):(es?'Capturas y enlace al repositorio: pendientes de incorporar. Las ilustraciones son conceptuales.':'Screenshots and repository link: to be added. Artwork is conceptual.')}</p>
   </div>
  </div>
 </div>
}

const COMMANDS=['help','about','skills','projects','experience','contact','cv','clear'];
export function InteractiveTerminal({lang}:{lang:Lang}){
 const [lines,setLines]=useState<string[]>([lang==='es'?'Bienvenido a la terminal de Carlos. Escribe help.':'Welcome to Carlos’ terminal. Type help.']);
 const [command,setCommand]=useState('');const [history,setHistory]=useState<string[]>([]);const [historyPos,setHistoryPos]=useState(-1);
 const end=useRef<HTMLDivElement>(null);const input=useRef<HTMLInputElement>(null);const es=lang==='es';
 useEffect(()=>{setLines([es?'Bienvenido a la terminal de Carlos. Escribe help.':'Welcome to Carlos’ terminal. Type help.']);setCommand('');setHistory([]);setHistoryPos(-1)},[lang]);
 useEffect(()=>{end.current?.scrollIntoView({block:'nearest',behavior:'instant'})},[lines]);
 const respond=(raw:string)=>{
  const cmd=raw.trim().toLowerCase();if(!cmd)return;
  if(cmd==='clear'){setLines([])}else{
   const output:Record<string,string>={help:(es?'Comandos: ':'Commands: ')+COMMANDS.join(' · '),about:es?'Carlos Soto Torres · Estudiante de Ingeniería Informática (Universidad de Jaén).':'Carlos Soto Torres · Computer Engineering student (University of Jaén).',skills:'C++ · Java · Python · JavaScript · TypeScript · React · Spring Boot · Rust · Soroban · Git · Docker',projects:'01 ExamForge · 02 AidRelease (HackMeridian 2026) · 03 C++ Fundamentals',experience:es?'Erasmus: Universidade de Aveiro, sept 2024 – jul 2025. HackMeridian: 2026.':'Erasmus: Universidade de Aveiro, Sep 2024 – Jul 2025. HackMeridian: 2026.',contact:EMAIL,cv:es?'CV original: usa el botón «Descargar CV» situado debajo.':'Original CV: use the Download CV button below.'};
   setLines(v=>[...v,`carlos@emerald:~$ ${raw}`,output[cmd]||(es?'Comando no encontrado. Escribe help.':'Command not found. Type help.')]);
  }
  setHistory(v=>[raw,...v].slice(0,30));setHistoryPos(-1);setCommand('');input.current?.focus();
 };
 return <div className="v25-terminal" aria-label={es?'Terminal interactiva de portfolio':'Interactive portfolio terminal'}>
  <div className="v25-terminal-bar"><span className="v25-traffic"><i/><i/><i/></span><span><TerminalSquare size={14}/> carlos@emerald ~</span><span>SIMULATED / SAFE</span></div>
  <div className="v25-terminal-output" role="log" aria-live="polite" aria-relevant="additions text">{lines.map((line,i)=><p key={i} className={line.startsWith('carlos@')?'v25-prompt':''}>{line}</p>)}<div ref={end}/></div>
  <form onSubmit={e=>{e.preventDefault();respond(command)}} className="v25-terminal-form"><span aria-hidden="true">❯</span><input ref={input} aria-label={es?'Escribir un comando':'Type a command'} autoComplete="off" spellCheck={false} placeholder={es?'Escribe help para empezar':'Type help to get started'} value={command} onChange={e=>setCommand(e.target.value)} onKeyDown={e=>{if(e.key==='ArrowUp'&&history.length){e.preventDefault();const n=Math.min(historyPos+1,history.length-1);setHistoryPos(n);setCommand(history[n])}if(e.key==='ArrowDown'){e.preventDefault();const n=historyPos-1;setHistoryPos(n);setCommand(n<0?'':history[n])}}}/><button aria-label={es?'Ejecutar comando':'Run command'} type="submit"><Send size={17}/></button></form>
  <div className="v25-terminal-footer"><span>{es?'Sin acceso al sistema ni ejecución de código real':'No system access or real code execution'}</span><a href={CV} download><Download size={14}/>{es?'Descargar CV':'Download CV'}</a></div>
 </div>
}

const cloudGroups=[
 {name:'LANGUAGES',terms:['C++','Java','Python','JavaScript','TypeScript','Rust']},
 {name:'WEB / BACKEND',terms:['React','Spring Boot','HTML / CSS']},
 {name:'DATA / TOOLS',terms:['SQL','MySQL','Git','GitHub','Docker','Linux','CMake','Soroban','Stellar','VS Code']},
];
export function SpatialStack({lang}:{lang:Lang}){
 const [selected,setSelected]=useState('C++');const [active,setActive]=useState(0);
 const es=lang==='es';const all=cloudGroups[active].terms;
 const reference:Record<string,string>={Rust:'AidRelease / Soroban',Soroban:'AidRelease / Stellar',Stellar:'AidRelease / HackMeridian', 'C++':'Prácticas universitarias / Academic coursework',React:'Desarrollo web / Web development'};
 return <div className="v25-spatial" aria-label={es?'Explorador tecnológico interactivo':'Interactive technology explorer'}>
  <div className="v25-spatial-tabs" role="group" aria-label={es?'Categorías tecnológicas':'Technology categories'}>{cloudGroups.map((g,i)=><button type="button" key={g.name} className={active===i?'active':''} aria-pressed={active===i} onClick={()=>{setActive(i);setSelected(g.terms[0])}}>{g.name}</button>)}</div>
  <div className="v25-cloud" role="group" aria-label={es?'Selecciona tecnología':'Select technology'}><div className="v25-cloud-core" aria-hidden="true"/>{all.map((skill,i)=>{const a=i*Math.PI*2/all.length;const x=Math.cos(a)*34,y=Math.sin(a)*32;const depth=Math.sin(i*2.4);return <button type="button" key={skill} aria-pressed={selected===skill} className={'v25-cloud-node '+(selected===skill?'selected':'')} style={{left:`${50+x}%`,top:`${50+y}%`,transform:`translate(-50%,-50%) perspective(600px) rotateY(${depth*18}deg) translateZ(${Math.round(depth*22)}px)`,animationDelay:`${i*-.4}s`}} onClick={()=>setSelected(skill)}>{skill}</button>})}</div>
  <div className="v25-skill-insight"><span className="v25-overline">{es?'TECNOLOGÍA SELECCIONADA':'SELECTED TECHNOLOGY'}</span><h3>{selected}</h3><p>{reference[selected]||(es?'Tecnología de mi stack académico y personal. Proyecto concreto por documentar.':'Part of my academic and personal technology stack. Specific project details to be documented.')}</p></div>
 </div>
}

export function RecruiterView({lang,close}:{lang:Lang;close:()=>void}){
 const ref=useDialogEscape(close);const es=lang==='es';const [copied,setCopied]=useState(false);
 const copy=async()=>{try{await navigator.clipboard.writeText(EMAIL);setCopied(true)}catch{window.location.href=`mailto:${EMAIL}`}};
 return <div className="v25-backdrop" onMouseDown={e=>{if(e.target===e.currentTarget)close()}}>
  <div className="v25-dialog v25-recruiter" tabIndex={-1} ref={ref} role="dialog" aria-modal="true" aria-labelledby="v25-recruiter-title">
   <header className="v25-dialog-head"><span className="v25-overline"><BriefcaseBusiness size={16}/> {es?'VISTA PARA RECLUTADORES':'RECRUITER VIEW'}</span><button className="v25-icon-button" aria-label={es?'Cerrar vista':'Close view'} onClick={close}><X size={20}/></button></header>
   <div className="v25-recruiter-content"><span className="v25-recruiter-status">● {es?'DISPONIBLE PARA PRÁCTICAS Y PUESTOS JUNIOR':'OPEN TO INTERNSHIPS & JUNIOR ROLES'}</span><h2 id="v25-recruiter-title">Carlos Soto <em>Torres.</em></h2><p>{es?'Estudiante del Grado en Ingeniería Informática · Universidad de Jaén. Interesado en desarrollo Backend, Frontend y Software Engineering.':'Computer Engineering student · University of Jaén. Interested in Backend, Frontend and Software Engineering.'}</p>
    <div className="v25-recruiter-stats"><div><strong>2024–25</strong><span>Erasmus · Aveiro</span></div><div><strong>2026</strong><span>HackMeridian · Lisbon</span></div><div><strong>69</strong><span>{es?'Pruebas automatizadas · AidRelease':'Automated tests · AidRelease'}</span></div></div>
    <h3>{es?'Proyectos destacados':'Featured projects'}</h3><div className="v25-recruiter-projects"><span>ExamForge · {es?'Creación de exámenes':'Exam creation'}</span><span>AidRelease · Rust / Soroban / Stellar</span><span>C++ · {es?'Estructuras de datos':'Data structures'}</span></div>
    <h3>{es?'Tecnologías':'Technologies'}</h3><p>C++ · Java · Python · JavaScript · TypeScript · React · Spring Boot · Rust · Soroban · SQL · Git</p>
    <h3>{es?'Idiomas y modalidad':'Languages & availability'}</h3><p>{es?'Español nativo · Inglés B2 · España (remoto, híbrido o presencial)':'Native Spanish · English B2 · Spain (remote, hybrid or on-site)'}</p>
    <a className="aidrelease-live-link aidrelease-recruiter-link" href={AIDRELEASE_DEMO} target="_blank" rel="noopener noreferrer"><Globe2 size={17}/>{es?'Probar AidRelease':'Try AidRelease'}<ExternalLink size={15}/></a>
    <div className="v25-recruiter-actions"><a href={CV} download><Download size={17}/>{es?'Descargar CV real':'Download original CV'}</a><a href={`mailto:${EMAIL}`}><Mail size={17}/>{es?'Escribir correo':'Email me'}</a><button onClick={copy}>{copied?<Check size={17}/>:<Clipboard size={17}/>} {copied?(es?'Copiado':'Copied'):(es?'Copiar correo':'Copy email')}</button></div>
    <div className="v25-recruiter-links"><a href={GH} target="_blank" rel="noopener noreferrer"><Github size={17}/> GitHub <ExternalLink size={13}/></a><a href={LI} target="_blank" rel="noopener noreferrer"><Linkedin size={17}/> LinkedIn <ExternalLink size={13}/></a></div>
   </div>
  </div>
 </div>
}

export function JourneyProgress({lang}:{lang:Lang}){
 const [progress,setProgress]=useState(0);const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const onScroll=()=>{if(!ref.current)return;const rect=ref.current.getBoundingClientRect();const range=Math.max(1,rect.height+window.innerHeight);setProgress(Math.min(100,Math.max(0,(window.innerHeight-rect.top)/range*100)))};window.addEventListener('scroll',onScroll,{passive:true});onScroll();return()=>window.removeEventListener('scroll',onScroll)},[]);
 return <div className="v25-journey-progress" ref={ref} aria-hidden="true"><div style={{width:`${progress}%`}}/><span>{lang==='es'?'TRAYECTORIA EN EVOLUCIÓN':'AN EVOLVING JOURNEY'} <ChevronRight size={14}/></span></div>
}
