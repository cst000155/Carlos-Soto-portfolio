import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, ArrowRight, Github, Linkedin, Mail, Menu, X, Code2, GraduationCap, MapPin, ExternalLink, Globe2, Layers3, Database, Terminal, GitBranch, ChevronDown, Blocks, Sun, Moon, Sparkles } from 'lucide-react';

type Lang = 'es' | 'en';
const GH = 'https://github.com/cst000155';
const LI = 'https://www.linkedin.com/in/carlos-soto-torres-964149410/';
const text = {
  es: {
    nav: ['Inicio','Sobre mí','Trayectoria','Tecnologías','Proyectos','Contacto'],
    availability: 'ABIERTO A PRÁCTICAS Y POSICIONES JUNIOR',
    descriptor: 'ESTUDIANTE DE INGENIERÍA INFORMÁTICA · DESARROLLADOR DE SOFTWARE',
    heroLine1: 'CONSTRUYO', heroLine2: 'IDEAS EN', heroLine3: 'SOFTWARE.',
    intro: 'Soy Carlos Soto Torrex. Estudio Ingeniería Informática en la Universidad de Jaén y convierto lo que aprendo en proyectos reales, desde aplicaciones web hasta C++ y blockchain.',
    viewProjects: 'Explorar proyectos', letsTalk: 'Conectemos', scroll: 'DESLIZA PARA EXPLORAR',
    aboutKicker: '01 / EL PERFIL', aboutTitle: 'CURIOSIDAD TÉCNICA.\nMENTALIDAD DE CONSTRUCCIÓN.',
    aboutP1: 'Me interesa entender no solo cómo funciona el código, sino cómo convertirlo en software útil. Estoy construyendo mi camino profesional combinando los fundamentos de ingeniería con proyectos prácticos.',
    aboutP2: 'Trabajo con C++, Java, Python y tecnologías web como React y Spring Boot. He desarrollado ExamForge, participado en un hackatón del ecosistema Stellar en Lisboa y trabajado en proyectos académicos de programación y estructuras de datos.',
    aboutCard1: 'Mi enfoque', aboutCard1Text: 'Código mantenible, resolver problemas y aprender construyendo.',
    aboutCard2: 'Ahora busco', aboutCard2Text: 'Prácticas o mi primera oportunidad junior en frontend, backend o desarrollo de software.',
    journeyKicker: '02 / MI CAMINO', journeyTitle: 'EL CAMINO\nHASTA AQUÍ.', journeySub: 'Experiencias que están dando forma a mi manera de desarrollar.',
    timeline: [
      {date:'ACTUALIDAD',title:'Grado en Ingeniería Informática',where:'Universidad de Jaén',tag:'EDUCACIÓN',description:'Formación en fundamentos de programación, algoritmos, estructuras de datos e ingeniería del software.'},
      {date:'2026',title:'HackMeridian · Stellar',where:'Lisboa, Portugal',tag:'HACKATÓN',description:'Participación en equipo en un reto del ecosistema Stellar, explorando contratos inteligentes y herramientas blockchain.'},
      {date:'PROYECTO PERSONAL',title:'ExamForge',where:'Aplicación para crear exámenes',tag:'DESARROLLO',description:'Evolución iterativa de una aplicación de generación y configuración de exámenes con atención a la experiencia de usuario.'}
    ],
    stackKicker:'03 / HERRAMIENTAS', stackTitle:'MI CAJA DE\nHERRAMIENTAS.', stackSub:'Tecnologías que utilizo o he trabajado durante mi formación y mis proyectos.',
    stackGroups:['LENGUAJES','FRONTEND Y BACKEND','DATOS Y HERRAMIENTAS'],
    projectKicker:'04 / TRABAJO SELECCIONADO', projectsTitle:'PROYECTOS QUE\nCUENTAN MI HISTORIA.', projectsSub:'No son líneas en un CV: son retos que he abordado y cosas que he aprendido.',
    projects:[
      {number:'01',tag:'APLICACIÓN WEB',title:'ExamForge',subtitle:'Crear exámenes de forma más sencilla.',description:'Proyecto de creación y generación de exámenes con configuración avanzada y un flujo guiado paso a paso. En evolución, con especial interés en la usabilidad y la organización de la interfaz.',chips:['Desarrollo web','UX','Producto'],mark:'EF'},
      {number:'02',tag:'HACKATÓN · LISBOA',title:'HackMeridian',subtitle:'Una primera inmersión en Stellar.',description:'Participación en un hackatón internacional del ecosistema Stellar. Trabajo colaborativo sobre una solución basada en blockchain y exploración de contratos inteligentes con Soroban.',chips:['Stellar','Soroban','Blockchain'],mark:'HM'},
      {number:'03',tag:'INGENIERÍA · C++',title:'C++ Fundamentals',subtitle:'Fundamentos que hacen sólido el software.',description:'Prácticas universitarias de estructuras de datos, programación orientada a objetos y gestión de memoria dinámica, con énfasis en diseño modular y razonamiento técnico.',chips:['C++','POO','Estructuras de datos'],mark:'C++'}
    ],
    reposSoon:'Repositorio / demo próximamente', contactKicker:'05 / SIGUIENTE PASO', contactTitle:'¿CONSTRUIMOS\nALGO JUNTOS?',contactBody:'Estoy buscando prácticas y oportunidades junior en España. Si tu equipo valora las ganas de aprender, una base técnica sólida y la iniciativa, me encantará conectar.',contactCta:'Contactar en LinkedIn',location:'España · Remoto / Híbrido / Presencial', footer:'Diseñado y desarrollado como parte de mi aprendizaje.', backTop:'Volver arriba', cv:'CV próximamente', cvHint:'Añade tu CV en public/cv.pdf para habilitarlo.'
  },
  en: {
    nav: ['Home','About','Journey','Stack','Projects','Contact'],
    availability: 'OPEN TO INTERNSHIPS & JUNIOR ROLES',
    descriptor: 'COMPUTER ENGINEERING STUDENT · SOFTWARE DEVELOPER',
    heroLine1: 'TURNING',heroLine2:'IDEAS INTO',heroLine3:'SOFTWARE.',
    intro: "I'm Carlos Soto Torrex. I study Computer Engineering at the University of Jaén and turn what I learn into hands-on projects, from web applications to C++ and blockchain.",
    viewProjects:'Explore projects', letsTalk:"Let's connect",scroll:'SCROLL TO EXPLORE',
    aboutKicker:'01 / THE PERSON',aboutTitle:'TECHNICAL CURIOSITY.\nA BUILDER’S MINDSET.',
    aboutP1:'I care about more than making code run: I want to understand how to turn it into useful software. I am building my professional path through engineering fundamentals and hands-on projects.',
    aboutP2:'I work with C++, Java, Python and web technologies including React and Spring Boot. I have developed ExamForge, joined a Stellar ecosystem hackathon in Lisbon and completed academic programming and data structure projects.',
    aboutCard1:'My approach',aboutCard1Text:'Maintainable code, problem-solving and learning by building.',aboutCard2:'What I’m looking for',aboutCard2Text:'Internships or a first junior opportunity in frontend, backend or software development.',
    journeyKicker:'02 / MY JOURNEY',journeyTitle:'THE PATH\nSO FAR.',journeySub:'Experiences shaping how I approach software.',
    timeline:[
      {date:'CURRENT',title:'BSc in Computer Engineering',where:'University of Jaén',tag:'EDUCATION',description:'Studies in programming fundamentals, algorithms, data structures and software engineering.'},
      {date:'2026',title:'HackMeridian · Stellar',where:'Lisbon, Portugal',tag:'HACKATHON',description:'Collaborated on a Stellar ecosystem challenge, exploring smart contracts and blockchain development tools.'},
      {date:'PERSONAL PROJECT',title:'ExamForge',where:'Exam creation application',tag:'BUILDING',description:'Iterative development of an exam generation and configuration application with a focus on user experience.'}
    ],
    stackKicker:'03 / THE TOOLKIT',stackTitle:'TOOLS OF\nTHE TRADE.',stackSub:'Technologies I use or have worked with through my studies and projects.',stackGroups:['LANGUAGES','FRONTEND & BACKEND','DATA & TOOLS'],
    projectKicker:'04 / SELECTED WORK',projectsTitle:'PROJECTS THAT\nTELL MY STORY.',projectsSub:'More than lines on a résumé: problems I have tackled and lessons I have learned.',
    projects:[
      {number:'01',tag:'WEB APPLICATION',title:'ExamForge',subtitle:'Making exam creation simpler.',description:'An exam creation and generation project with advanced settings and a guided step-by-step workflow. Continuously evolving, with a focus on usability and interface structure.',chips:['Web development','UX','Product'],mark:'EF'},
      {number:'02',tag:'HACKATHON · LISBON',title:'HackMeridian',subtitle:'My first deep dive into Stellar.',description:'Participated in an international Stellar ecosystem hackathon. Collaborated on a blockchain-based concept and explored smart contracts with Soroban.',chips:['Stellar','Soroban','Blockchain'],mark:'HM'},
      {number:'03',tag:'ENGINEERING · C++',title:'C++ Fundamentals',subtitle:'The fundamentals behind solid software.',description:'University coursework in data structures, object-oriented programming and dynamic memory management, focusing on modular design and technical reasoning.',chips:['C++','OOP','Data structures'],mark:'C++'}
    ],
    reposSoon:'Repository / demo coming soon',contactKicker:'05 / NEXT STEP',contactTitle:'LET’S BUILD\nSOMETHING.',contactBody:'I am looking for internships and junior opportunities in Spain. If your team values curiosity, solid foundations and initiative, I would love to connect.',contactCta:'Connect on LinkedIn',location:'Spain · Remote / Hybrid / On-site',footer:'Designed and developed as part of my learning journey.',backTop:'Back to top',cv:'CV coming soon',cvHint:'Add your CV at public/cv.pdf to enable this button.'
  }
};
const stack = [
  ['C++','Java','Python','JavaScript','TypeScript'],
  ['React','Spring Boot','HTML / CSS'],
  ['SQL','MySQL','Git / GitHub','Docker','Linux','CMake','VS Code']
];

// Interactive 3D globe: projected rotating sphere, no external 3D dependency.
function DigitalPlanet() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    const motionReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let frame = 0;
    let angle = .3;
    let tilt = -.25;
    let pointerX = 0, pointerY = 0;
    let visible = true;
    let last = 0;
    const dots: Array<[number, number]> = [];
    for (let lat=-80;lat<=80;lat+=8) for(let lon=0;lon<360;lon+=9) dots.push([lat*Math.PI/180,lon*Math.PI/180]);
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1,2);
      canvas.width = Math.max(1,Math.round(rect.width*pixelRatio));
      canvas.height = Math.max(1,Math.round(rect.height*pixelRatio));
      ctx.setTransform(pixelRatio,0,0,pixelRatio,0,0);
    };
    function project(lat:number, lon:number, spin:number, pitch:number, radius:number) {
      const x=Math.cos(lat)*Math.cos(lon+spin), y=Math.sin(lat), z=Math.cos(lat)*Math.sin(lon+spin);
      const ry=y*Math.cos(pitch)-z*Math.sin(pitch);
      const rz=y*Math.sin(pitch)+z*Math.cos(pitch);
      return {x:x*radius,y:ry*radius,z:rz};
    }
    const draw = (ts:number) => {
      if (!ctx || !canvas) return;
      const w=canvas.clientWidth,h=canvas.clientHeight;
      ctx.clearRect(0,0,w,h);
      const radius=Math.min(w*.37,h*.37,285), cx=w*.5, cy=h*.5;
      if (!motionReduced && visible) { angle+=(ts-last>100?16:ts-last)*.00016; tilt+=(pointerY*.23-.16-tilt)*.025; }
      last=ts;
      const dark=document.documentElement.dataset.theme!=='light';
      const stroke=dark?'89,239,183':'15,139,103';
      const gradient=ctx.createRadialGradient(cx-radius*.28,cy-radius*.38,radius*.02,cx,cy,radius*1.25);
      gradient.addColorStop(0,dark?'rgba(58,143,111,.25)':'rgba(29,166,117,.16)');
      gradient.addColorStop(.65,dark?'rgba(4,28,27,.95)':'rgba(217,244,230,.93)');
      gradient.addColorStop(1,dark?'rgba(1,12,17,.98)':'rgba(208,232,217,.95)');
      ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2);ctx.fillStyle=gradient;ctx.fill();
      ctx.save();ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2);ctx.clip();
      const spin=angle+pointerX*.12;
      // Continuous parallels and meridians; skip rear hemisphere.
      for(let latitude=-75;latitude<=75;latitude+=15){
        const la=latitude*Math.PI/180;
        for(let longitude=0;longitude<360;longitude+=3){
          const a=project(la,longitude*Math.PI/180,spin,tilt,radius);
          const b=project(la,(longitude+3)*Math.PI/180,spin,tilt,radius);
          if(a.z>0 && b.z>0){ctx.beginPath();ctx.moveTo(cx+a.x,cy-a.y);ctx.lineTo(cx+b.x,cy-b.y);ctx.strokeStyle=`rgba(${stroke},.18)`;ctx.lineWidth=.75;ctx.stroke();}
        }
      }
      for(let longitude=0;longitude<360;longitude+=15){
        const lon=longitude*Math.PI/180;
        for(let latitude=-90;latitude<90;latitude+=3){
          const a=project(latitude*Math.PI/180,lon,spin,tilt,radius);
          const b=project((latitude+3)*Math.PI/180,lon,spin,tilt,radius);
          if(a.z>0 && b.z>0){ctx.beginPath();ctx.moveTo(cx+a.x,cy-a.y);ctx.lineTo(cx+b.x,cy-b.y);ctx.strokeStyle=`rgba(${stroke},.16)`;ctx.lineWidth=.8;ctx.stroke();}
        }
      }
      for(const [la,lo] of dots){
        const q=project(la,lo,spin,tilt,radius);
        if(q.z>0){ const op=.3+q.z*.55;ctx.beginPath();ctx.arc(cx+q.x,cy-q.y,1.15+q.z*.9,0,Math.PI*2);ctx.fillStyle=`rgba(${stroke},${op})`;ctx.fill(); }
      }
      ctx.restore();
      const halo=ctx.createRadialGradient(cx,cy,radius*.84,cx,cy,radius*1.27);
      halo.addColorStop(0,`rgba(${stroke},.17)`);halo.addColorStop(.55,`rgba(${stroke},.10)`);halo.addColorStop(1,`rgba(${stroke},0)`);
      ctx.beginPath();ctx.arc(cx,cy,radius*1.27,0,Math.PI*2);ctx.fillStyle=halo;ctx.fill();
      ctx.beginPath();ctx.arc(cx,cy,radius,0,Math.PI*2);ctx.strokeStyle=`rgba(${stroke},.47)`;ctx.lineWidth=1.6;ctx.stroke();
      // Orbital ring is a true perspective ellipse, with near/far halves.
      ctx.save();ctx.translate(cx,cy);ctx.rotate(-.33+pointerY*.08);ctx.scale(1,.28);
      ctx.beginPath();ctx.arc(0,0,radius*1.42,Math.PI,Math.PI*2);ctx.strokeStyle=`rgba(${stroke},.16)`;ctx.lineWidth=3;ctx.stroke();
      ctx.beginPath();ctx.arc(0,0,radius*1.42,0,Math.PI);ctx.strokeStyle=`rgba(${stroke},.66)`;ctx.lineWidth=4;ctx.stroke();ctx.restore();
      frame=window.requestAnimationFrame(draw);
    };
    const onPointer=(e:PointerEvent)=>{const rect=canvas.getBoundingClientRect();pointerX=(e.clientX-rect.left)/rect.width*2-1;pointerY=(e.clientY-rect.top)/rect.height*2-1;};
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;},{threshold:0});
    observer.observe(canvas);
    const ro=new ResizeObserver(resize);ro.observe(canvas);resize();
    canvas.addEventListener('pointermove',onPointer);
    frame=requestAnimationFrame(draw);
    return()=>{cancelAnimationFrame(frame);ro.disconnect();observer.disconnect();canvas.removeEventListener('pointermove',onPointer);};
  },[]);
  return <div className="planet-wrap"><div className="planet-aura"/><canvas ref={canvasRef} className="planet-canvas" role="img" aria-label="Interactive rotating digital planet, illustrated with latitude and longitude lines"/><div className="planet-label"><span className="planet-label-dot"/> DIGITAL / 3D SPHERE <span>001</span></div></div>;
}
function ProjectCard({ children, className }: {children:React.ReactNode;className:string}) {
  const ref=useRef<HTMLElement>(null);
  const onMove=(e:React.MouseEvent<HTMLElement>)=>{
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches || window.matchMedia('(pointer: coarse)').matches)return;
    const rect=e.currentTarget.getBoundingClientRect();
    const x=(e.clientX-rect.left)/rect.width-.5,y=(e.clientY-rect.top)/rect.height-.5;
    e.currentTarget.style.setProperty('--tilt-x',`${-y*3.5}deg`);
    e.currentTarget.style.setProperty('--tilt-y',`${x*3.5}deg`);
    e.currentTarget.style.setProperty('--pointer-x',`${(x+.5)*100}%`);
    e.currentTarget.style.setProperty('--pointer-y',`${(y+.5)*100}%`);
  };
  const reset=()=>{ref.current?.style.setProperty('--tilt-x','0deg');ref.current?.style.setProperty('--tilt-y','0deg');};
  return <article ref={ref} className={className} onMouseMove={onMove} onMouseLeave={reset}>{children}</article>;
}

function App(){
  const [lang,setLang]=useState<Lang>(()=>typeof localStorage!=='undefined' && localStorage.getItem('portfolio-lang')==='en'?'en':'es');
  const [theme,setTheme]=useState<'dark'|'light'>(()=>typeof localStorage!=='undefined' && localStorage.getItem('portfolio-theme')==='light'?'light':'dark');
  const [menu,setMenu]=useState(false);
  const [scrolled,setScrolled]=useState(false);
  const t=text[lang];
  useEffect(()=>{document.documentElement.dataset.theme=theme;localStorage.setItem('portfolio-theme',theme);},[theme]);
  useEffect(()=>{document.documentElement.lang=lang;localStorage.setItem('portfolio-lang',lang);},[lang]);
  useEffect(()=>{
    const els=document.querySelectorAll('.section-top,.timeline-item,.stack-panel,.project-card,.about-copy,.about-graphic,.contact-panel');
    els.forEach(el=>el.classList.add('reveal'));
    if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){els.forEach(el=>el.classList.add('revealed'));return;}
    const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('revealed');observer.unobserve(e.target);}}),{threshold:.08,rootMargin:'0px 0px -35px 0px'});
    els.forEach(el=>observer.observe(el));
    return()=>observer.disconnect();
  },[lang]);
  useEffect(()=>{ const f=()=>setScrolled(window.scrollY>30);window.addEventListener('scroll',f,{passive:true});return()=>window.removeEventListener('scroll',f);},[]);
  const navIds=['home','about','journey','stack','projects','contact'];
  return <div className="site" id="home">
    <header className={'header '+(scrolled?'scrolled':'')}>
      <a className="logo" href="#home" aria-label="Carlos Soto Torrex home">C<span className="logo-star">✳</span>S<span className="logo-dot">.</span></a>
      <nav className={'nav '+(menu?'nav-open':'')} aria-label="Main navigation">{t.nav.map((n,i)=><a key={n} onClick={()=>setMenu(false)} href={'#'+navIds[i]}>{n}</a>)}</nav>
      <div className="nav-actions"><button className="theme-toggle" onClick={()=>setTheme(theme==='dark'?'light':'dark')} aria-label={lang==='es'?'Cambiar tema':'Toggle theme'} title={lang==='es'?'Cambiar tema':'Toggle theme'}>{theme==='dark'?<Sun size={18}/>:<Moon size={18}/>}</button><button className="lang-toggle" onClick={()=>setLang(lang==='es'?'en':'es')} aria-label="Switch language"><Globe2 size={15}/><span>{lang.toUpperCase()}</span><span className="divider-slim">/</span><span className="lang-muted">{lang==='es'?'EN':'ES'}</span></button><a className="header-contact" href="#contact">{t.nav[5]} <ArrowUpRight size={15}/></a><button className="mobile-menu" aria-label="Toggle menu" onClick={()=>setMenu(!menu)}>{menu?<X/>:<Menu/>}</button></div>
    </header>
    <main>
      <section className="hero section-shell">
        <div className="hero-noise"/><div className="hero-grid"/><div className="hero-halo"/><DigitalPlanet/><div className="hero-crosshair">CS — 2026 <Sparkles size={14}/></div>
        <div className="hero-content"><div className="eyebrow"><span className="pulse-dot"/>{t.availability}</div><p className="hero-descriptor">{t.descriptor}</p>
          <h1><span>{t.heroLine1}</span><span>{t.heroLine2}</span><span className="gradient-text">{t.heroLine3}</span></h1>
          <div className="hero-bottom"><p>{t.intro}</p><div className="hero-buttons"><a className="button button-primary" href="#projects">{t.viewProjects}<ArrowUpRight size={18}/></a><a className="button button-quiet" href="#contact">{t.letsTalk}<ArrowRight size={18}/></a></div></div>
        </div>
        <div className="hero-side-text">PORTFOLIO / 2026</div>
        <a className="scroll-cue" href="#about"><span>{t.scroll}</span><ChevronDown size={16}/></a>
        <div className="hero-orb orb-one"/><div className="hero-orb orb-two"/>
      </section>
      <div className="ticker" aria-label="Core technologies"><div className="ticker-track">{Array.from({length:2}).flatMap((_,i)=>['C++','JAVA','PYTHON','REACT','TYPESCRIPT','SPRING BOOT','DOCKER','GIT'].map((word,j)=><span key={i+'-'+j}>{word}<i>✳</i></span>))}</div></div>
      <section className="section-shell about section-pad" id="about"><div className="section-label">{t.aboutKicker}</div><div className="about-layout"><div><h2 className="display-heading">{t.aboutTitle.split('\n').map((l,i)=><span key={i}>{l}</span>)}</h2><div className="about-graphic"><div className="big-code">&lt;/&gt;</div><div className="orbit orbit-a"/><div className="orbit orbit-b"/><span className="coord">37.7796° N / 3.7849° W</span></div></div><div className="about-copy"><p>{t.aboutP1}</p><p>{t.aboutP2}</p><div className="about-feature"><Code2 size={25}/><div><strong>{t.aboutCard1}</strong><span>{t.aboutCard1Text}</span></div></div><div className="about-feature"><GraduationCap size={25}/><div><strong>{t.aboutCard2}</strong><span>{t.aboutCard2Text}</span></div></div><a href={GH} target="_blank" rel="noreferrer" className="text-link">GitHub <ArrowUpRight size={17}/></a></div></div></section>
      <section className="section-shell journey section-pad" id="journey"><div className="section-label">{t.journeyKicker}</div><div className="section-top"><h2 className="display-heading">{t.journeyTitle.split('\n').map((l,i)=><span key={i}>{l}</span>)}</h2><p>{t.journeySub}</p></div><div className="timeline">{t.timeline.map((item,i)=><article className="timeline-item" key={i}><div className="timeline-date"><span className="timeline-pin"/>{item.date}</div><div className="timeline-main"><div className="tiny-tag">{item.tag}</div><h3>{item.title}</h3><div className="timeline-place">{item.where}</div><p>{item.description}</p></div><ArrowUpRight className="timeline-arrow" size={22}/></article>)}</div></section>
      <section className="section-shell stack-section section-pad" id="stack"><div className="section-label">{t.stackKicker}</div><div className="section-top"><h2 className="display-heading">{t.stackTitle.split('\n').map((l,i)=><span key={i}>{l}</span>)}</h2><p>{t.stackSub}</p></div><div className="stack-grid">{stack.map((group,i)=><div className="stack-panel" key={i}><div className="stack-panel-top"><span className="stack-icon">{i===0?<Terminal/>:i===1?<Layers3/>:<Database/>}</span><span>{t.stackGroups[i]}</span><span className="panel-counter">0{i+1}</span></div><div className="skill-list">{group.map(s=><div className="skill" key={s}><span className="skill-dot"/>{s}</div>)}</div></div>)}</div></section>
      <section className="section-shell projects section-pad" id="projects"><div className="section-label">{t.projectKicker}</div><div className="section-top"><h2 className="display-heading">{t.projectsTitle.split('\n').map((l,i)=><span key={i}>{l}</span>)}</h2><p>{t.projectsSub}</p></div><div className="projects-list">{t.projects.map((p,i)=><ProjectCard className={'project-card project-'+i} key={p.number}><div className="project-art"><div className="art-grid"/><div className="art-glow"/><div className="project-art-inner">{i===0?<div className="exam-ui"><div className="exam-top"><i/><i/><i/><span>ExamForge</span></div><div className="exam-content"><div className="exam-sidebar"><b/><b/><b/><b/></div><div className="exam-body"><div className="fake-heading"/><div className="fake-heading short"/><div className="fake-question"><span>A</span><i/></div><div className="fake-question"><span>B</span><i/></div><div className="fake-question"><span>C</span><i/></div></div></div></div>:i===1?<div className="stellar-art"><Blocks size={92} strokeWidth={0.8}/><div className="stellar-ring ring1"/><div className="stellar-ring ring2"/><div className="stellar-badge">SOROBAN / STELLAR</div></div>:<div className="code-art"><span className="code-comment">// data structures</span><span><em>class</em> LinkedList {'{'}</span><span className="code-indent"><em>Node</em>* head;</span><span className="code-indent"><em>void</em> insert(int value);</span><span className="code-indent"><em>void</em> remove(int value);</span><span>{'};'}</span></div>}</div><div className="project-index">{p.number} / 03</div></div><div className="project-details"><div className="tiny-tag">{p.tag}</div><h3>{p.title}</h3><h4>{p.subtitle}</h4><p>{p.description}</p><div className="chip-list">{p.chips.map(c=><span key={c}>{c}</span>)}</div><div className="project-coming"><GitBranch size={17}/>{t.reposSoon}</div></div></ProjectCard>)}</div></section>
      <section className="contact section-shell section-pad" id="contact"><div className="contact-glow"/><div className="section-label">{t.contactKicker}</div><div className="contact-layout"><div><h2 className="display-heading contact-heading">{t.contactTitle.split('\n').map((l,i)=><span key={i}>{l}</span>)}</h2><p className="contact-description">{t.contactBody}</p><a href={LI} target="_blank" rel="noreferrer" className="button button-primary contact-button">{t.contactCta}<ArrowUpRight size={20}/></a></div><aside className="contact-panel"><div className="contact-panel-header"><span className="pulse-dot"/>{t.availability}</div><a href={LI} target="_blank" rel="noreferrer"><Linkedin size={20}/>LinkedIn<ExternalLink size={16}/></a><a href={GH} target="_blank" rel="noreferrer"><Github size={20}/>GitHub<ExternalLink size={16}/></a><a href="mailto:" onClick={e=>e.preventDefault()} className="disabled-contact" title="Email pending"><Mail size={20}/>Email — pendiente</a><div className="location"><MapPin size={15}/>{t.location}</div></aside></div></section>
    </main>
    <footer className="footer section-shell"><div className="footer-top"><a className="logo" href="#home">C<span className="logo-star">✳</span>S<span className="logo-dot">.</span></a><span>CARLOS SOTO TORREX © 2026</span><a href="#home" className="back-top">{t.backTop} ↑</a></div><div className="footer-bottom"><span>{t.footer}</span><div><a href={GH} target="_blank" rel="noreferrer"><Github size={18}/></a><a href={LI} target="_blank" rel="noreferrer"><Linkedin size={18}/></a></div></div></footer>
  </div>
}
export default App;
