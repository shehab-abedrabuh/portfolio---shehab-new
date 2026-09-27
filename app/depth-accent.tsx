"use client";
import {useEffect,useRef} from 'react';
export default function DepthAccent({variant}:{variant:'cube'|'orbit'}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const el=ref.current;if(!el)return;
  const reduced=matchMedia('(prefers-reduced-motion: reduce)');let frame=0,visible=false;
  const update=()=>{frame=0;if(reduced.matches||!visible)return;const r=el.parentElement!.getBoundingClientRect();const progress=Math.max(-1,Math.min(1,(innerHeight*.5-r.top)/innerHeight));el.style.setProperty('--depth-turn',`${progress*42}deg`);el.style.setProperty('--depth-shift',`${progress*-38}px`)};
  const scroll=()=>{if(!frame&&visible)frame=requestAnimationFrame(update)};
  const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)scroll()},{rootMargin:'100px'});observer.observe(el.parentElement!);
  window.addEventListener('scroll',scroll,{passive:true});window.addEventListener('resize',scroll);reduced.addEventListener('change',scroll);
  return()=>{observer.disconnect();cancelAnimationFrame(frame);window.removeEventListener('scroll',scroll);window.removeEventListener('resize',scroll);reduced.removeEventListener('change',scroll)};
 },[]);
 return <div ref={ref} className={'depth-accent depth-'+variant} aria-hidden="true"><div className="depth-object">{variant==='cube'?<><i/><i/><i/><i/><i/><i/></>:<><i/><i/><i/><b/></>}</div><span className="depth-shadow"/></div>
}
