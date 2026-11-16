"use client";

import {useState} from 'react';
import {ArrowUpRight, ArrowRight, Layers, Wrench, Cpu, Compass, Maximize2, Globe} from 'lucide-react';
import {Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription} from '@/components/ui/dialog';

const views = [
  {id:'overview', label:'Platform overview', image:'/emupath-overview.jpg', url:'https://emupath.com', caption:'The starting point: discover tools, software and technical learning resources.', alt:'EmuPath homepage with its resource search and task-based starting points'},
  {id:'tools', label:'Online tools', image:'/emupath-tools.jpg', url:'https://emupath.com/tools', caption:'Browser utilities organized by task, category and technical role.', alt:'EmuPath online tools directory with search, category filters and utility cards'},
  {id:'hardware', label:'Hardware Lab', image:'/emupath-hardware.jpg', url:'https://emupath.com/hardware-lab/gpu-explorer', caption:'An interactive GPU explorer that introduces graphics-card components.', alt:'EmuPath Hardware Lab showing an interactive three-dimensional graphics card'},
];
const features = [
  {icon:Wrench, title:'Tools for everyday work', text:'Browser utilities for code, networks, images and files.', url:'https://emupath.com/tools', label:'Explore online tools'},
  {icon:Layers, title:'A place to discover', text:'Software sources, AI services and public API documentation.', url:'https://emupath.com/software', label:'Browse software'},
  {icon:Compass, title:'A path to keep learning', text:'Technology roadmaps and resources for your next skill.', url:'https://emupath.com/roadmaps', label:'Explore learning roadmaps'},
  {icon:Cpu, title:'Learning through interaction', text:'Device interface demos and a hands-on 3D hardware lab.', url:'https://emupath.com/hardware-lab', label:'Visit Hardware Lab'},
];

export default function EmupathProject(){
  const [selected,setSelected]=useState(0);
  const view=views[selected];
  return <section id="projects" className="section projects-section case-section" aria-labelledby="projects-title">
    <div className="container">
      <div className="section-heading reveal">
        <div><p className="eyebrow"><span>04</span> FEATURED PROJECT</p><h2 id="projects-title">From an idea to a useful platform.</h2></div>
        <p className="section-description">A closer look at my independent work, with real views from the live project.</p>
      </div>
      <article className="case-study" aria-labelledby="emupath-title">
        <div className="case-intro reveal">
          <div className="case-identity"><div className="case-logo" aria-hidden="true"><Layers size={30}/></div><div><span className="case-kicker">TOOLS & DIGITAL RESOURCES</span><h3 id="emupath-title">EmuPath<span>.</span></h3></div></div>
          <div className="case-pitch"><p>One starting point.<br/><strong>More ways to build and learn.</strong></p><a href="https://emupath.com" className="button primary" target="_blank" rel="noopener noreferrer">Visit EmuPath <ArrowUpRight size={18}/></a></div>
        </div>
        <dl className="case-facts reveal"><div><dt>MY ROLE</dt><dd>Creator & developer</dd></div><div><dt>PROJECT TYPE</dt><dd>Independent web platform</dd></div><div><dt>BUILT FOR</dt><dd>Developers, IT learners & curious minds</dd></div><div><dt>EXPLORE</dt><dd><a href="https://emupath.com" target="_blank" rel="noopener noreferrer">emupath.com <ArrowUpRight size={14}/></a></dd></div></dl>
        <div className="case-gallery reveal">
          <div className="gallery-toolbar"><span className="gallery-dots" aria-hidden="true"><i/><i/><i/></span><a href={view.url} target="_blank" rel="noopener noreferrer"><Globe size={13}/>{view.url.replace('https://','')}<ArrowUpRight size={13}/></a><span className="gallery-label">PROJECT SCREENSHOT</span></div>
          <Dialog>
            <DialogTrigger asChild><button type="button" className="gallery-image-button" aria-label={'Enlarge '+view.label+' screenshot'}><img key={view.image} src={view.image} alt={view.alt} width="1440" height="960" loading="lazy"/><span className="gallery-zoom"><Maximize2 size={16}/> Enlarge preview</span></button></DialogTrigger>
            <DialogContent className="project-lightbox"><DialogTitle>EmuPath — {view.label}</DialogTitle><DialogDescription>{view.caption} Screenshot of the live project.</DialogDescription><img src={view.image} alt={view.alt} width="1440" height="960"/><a className="text-link" href={view.url} target="_blank" rel="noopener noreferrer">Open this page on EmuPath <ArrowUpRight size={16}/></a></DialogContent>
          </Dialog>
          <div className="gallery-caption"><p id="gallery-caption" aria-live="polite">{view.caption}</p><span>0{selected+1} / 03</span></div>
          <div className="gallery-selectors" role="group" aria-label="Choose a project screenshot">{views.map((item,index)=><button type="button" key={item.id} aria-pressed={selected===index} onClick={()=>setSelected(index)}><img src={item.image} alt="" width="144" height="96" loading="lazy"/><span><small>0{index+1}</small>{item.label}</span><ArrowRight size={16}/></button>)}</div>
        </div>
        <div className="case-story reveal"><div><p className="case-kicker">THE IDEA</p><h4>Make the next useful resource easier to find.</h4></div><div><p>I developed EmuPath to bring useful software, AI tools, online utilities and learning resources together in one platform.</p><p>The project connects my interests in IT support and development: helping people solve practical tasks while giving them more ways to explore technology.</p></div></div>
        <div className="case-features">{features.map(({icon:Icon,title,text,url,label},i)=><a className="case-feature reveal" key={title} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}><div><Icon size={23}/><span>0{i+1}</span></div><h4>{title}</h4><p>{text}</p><span className="case-feature-link">{label}<ArrowUpRight size={16}/></span></a>)}</div>
        <div className="case-bottom"><span>Designed around discovery, practical tasks and continuous learning.</span><a href="https://emupath.com" target="_blank" rel="noopener noreferrer">Explore the live platform <ArrowUpRight size={17}/></a></div>
      </article>
    </div>
  </section>;
}
