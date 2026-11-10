import { useEffect, useState } from 'react';
import { ArrowUpRight, Github, RefreshCcw, GitBranch, ShieldCheck, Search, X } from 'lucide-react';
import './v26.css';

type Lang = 'es' | 'en';
type PublicRepo = {id:number; name:string; description:string|null; html_url:string; language:string|null; fork:boolean; archived:boolean; stargazers_count:number; updated_at:string};
const GITHUB_PROFILE = 'https://github.com/cst000155';
const API = 'https://api.github.com/users/cst000155/repos?per_page=100&sort=updated';
export function GithubRepositories({lang}:{lang:Lang}) {
 const es=lang==='es';
 const [repos,setRepos]=useState<PublicRepo[]>([]);
 const [status,setStatus]=useState<'loading'|'ready'|'error'>('loading');
 const [retry,setRetry]=useState(0);
 const [query,setQuery]=useState('');
 const [language,setLanguage]=useState('all');
 const languages=Array.from(new Set(repos.map(r=>r.language).filter((l):l is string=>Boolean(l)))).sort();
 const visibleRepos=repos.filter(r=>(language==='all'||r.language===language)&&`${r.name} ${r.description||''} ${r.language||''}`.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
 useEffect(()=>{
  const controller=new AbortController();setStatus('loading');
  fetch(API,{signal:controller.signal,headers:{Accept:'application/vnd.github+json'}})
   .then(async res=>{if(!res.ok)throw new Error(`GitHub ${res.status}`);return res.json() as Promise<unknown>})
   .then(data=>{if(!Array.isArray(data))throw new Error('Invalid GitHub response');
    const safe=data.filter((r):r is PublicRepo=>r!==null&&typeof r==='object'&&typeof r.id==='number'&&typeof r.name==='string'&&typeof r.html_url==='string'&&r.html_url.startsWith('https://github.com/cst000155/'));
    setRepos(safe.filter(r=>!r.fork&&!r.archived).slice(0,24));setStatus('ready')})
   .catch(err=>{if(!controller.signal.aborted){setStatus('error');console.warn('Unable to load GitHub repositories',err)}});
  return()=>controller.abort();
 },[retry]);
 return <section className="section-shell section-pad v26-repos" id="github-repositories" aria-labelledby="v26-repos-title">
  <div className="section-label">05 / GITHUB · LIVE</div>
  <div className="v26-heading"><div><h2 id="v26-repos-title">{es?'CÓDIGO REAL.':'REAL CODE.'}<span>{es?' REPOSITORIOS PÚBLICOS.':' PUBLIC REPOSITORIES.'}</span></h2><p>{es?'Datos obtenidos directamente de los repositorios públicos de GitHub. No se muestran proyectos privados ni estadísticas inventadas.':'Live data from public GitHub repositories. Private projects and made-up statistics are never shown.'}</p></div><a href={GITHUB_PROFILE} target="_blank" rel="noopener noreferrer"><Github size={18}/> GitHub <ArrowUpRight size={16}/></a></div>
  {status==='ready'&&repos.length>0&&<div className="v27-repo-tools"><label className="v27-search"><Search size={17} aria-hidden="true"/><span className="sr-only">{es?'Buscar repositorios':'Search repositories'}</span><input type="search" value={query} onChange={e=>setQuery(e.target.value)} placeholder={es?'Buscar por nombre o tecnología…':'Search name or technology…'}/>{query&&<button aria-label={es?'Borrar búsqueda':'Clear search'} type="button" onClick={()=>setQuery('')}><X size={16}/></button>}</label><label className="v27-select-label">{es?'Lenguaje':'Language'}<select value={language} onChange={e=>setLanguage(e.target.value)}><option value="all">{es?'Todos':'All'}</option>{languages.map(l=><option key={l} value={l}>{l}</option>)}</select></label><span className="v27-repo-count" role="status">{visibleRepos.length} / {repos.length}</span></div>}
  {status==='loading' &&<p role="status" className="v26-repo-state">{es?'Consultando repositorios públicos…':'Loading public repositories…'}</p>}
  {status==='error'&&<div role="status" className="v26-repo-state"><p>{es?'No se han podido cargar los repositorios en este momento. Puedes consultarlos directamente en GitHub.':'Repositories are temporarily unavailable. You can browse them directly on GitHub.'}</p><button type="button" onClick={()=>setRetry(v=>v+1)}><RefreshCcw size={15}/>{es?'Reintentar':'Retry'}</button></div>}
  {status==='ready'&&repos.length===0&&<p role="status" className="v26-repo-state">{es?'No hay repositorios públicos disponibles para mostrar todavía.':'No public repositories are currently available to display.'}</p>}
  {status==='ready'&&repos.length>0&&visibleRepos.length===0&&<p className="v26-repo-state" role="status">{es?'Ningún repositorio coincide con esos filtros.':'No repositories match those filters.'}</p>}
  {status==='ready'&&visibleRepos.length>0&&<div className="v26-repo-grid">{visibleRepos.map(repo=><a key={repo.id} className="v26-repo-card" href={repo.html_url} target="_blank" rel="noopener noreferrer"><div className="v26-repo-card-head"><GitBranch aria-hidden="true" size={21}/><ArrowUpRight aria-hidden="true" size={18}/></div><h3>{repo.name}</h3><p>{repo.description|| (es?'Repositorio público de GitHub':'Public GitHub repository')}</p><div className="v26-repo-meta"><span>{repo.language|| (es?'Lenguaje no indicado':'Language not specified')}</span><span>{es?'Actualizado':'Updated'} {(Number.isFinite(Date.parse(repo.updated_at))?new Date(repo.updated_at).toLocaleDateString(es?'es-ES':'en-GB',{year:'numeric',month:'short'}):(es?'Sin fecha':'Date unavailable'))}</span></div></a>)}</div>}
 </section>
}

export function ArchitectureDiagram({lang,index}:{lang:Lang;index:number}) {
 const es=lang==='es';
 if(index===0)return <div className="v26-architecture-pending"><ShieldCheck size={19}/><p>{es?'Arquitectura detallada pendiente de contrastar con el repositorio de ExamForge. No se presentan componentes no verificados.':'ExamForge architecture will be documented after reviewing its source. No unverified components are presented.'}</p></div>;
 if(index===2)return <div className="v26-architecture-pending"><ShieldCheck size={19}/><p>{es?'Proyecto académico de C++: estructuras de datos y programación orientada a objetos. El diagrama se añadirá tras revisar la implementación concreta.':'Academic C++ work involving data structures and OOP. A diagram will follow a review of the actual implementation.'}</p></div>;
 return <div className="v26-architecture" role="group" aria-label={es?'Flujo técnico validado de AidRelease':'AidRelease verified technical flow'}>
  <p className="v26-architecture-note">{es?'Flujo conceptual basado en tu contribución confirmada; no representa cada componente de infraestructura.':'Conceptual flow based on your confirmed contribution; not a complete infrastructure specification.'}</p>
  <div className="v26-flow" role="list">
   <div role="listitem" className="v26-flow-node"><strong>Frontend</strong><span>{es?'Integración colaborativa':'Collaborative integration'}</span></div>
   <span className="v26-flow-arrow" aria-hidden="true">⇄</span>
   <div role="listitem" className="v26-flow-node v26-flow-main"><strong>Rust / Soroban</strong><span>{es?'Custodia · pagos por hitos · reembolsos':'Escrow · milestone payouts · refunds'}</span></div>
   <span className="v26-flow-arrow" aria-hidden="true">⇄</span>
   <div role="listitem" className="v26-flow-node"><strong>Stellar Testnet</strong><span>{es?'Contratos y transacciones verificadas':'Verified contracts and transactions'}</span></div>
  </div>
  <div className="v26-evidence"><ShieldCheck size={17}/><strong>69</strong><span>{es?'pruebas automatizadas validadas durante HackMeridian 2026':'automated tests validated during HackMeridian 2026'}</span></div>
 </div>
}
