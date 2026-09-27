"use client";
import {useEffect,useRef,useState} from 'react';
import {Pause,Play,MoveUpRight} from 'lucide-react';

/** One low-poly scene, loaded separately from the primary page. */
export default function KineticScene(){
 const host=useRef<HTMLDivElement>(null),pausedRef=useRef(false);
 const [paused,setPaused]=useState(false),[ready,setReady]=useState(false);
 useEffect(()=>{pausedRef.current=paused},[paused]);
 useEffect(()=>{
  if(!host.current)return;const el:HTMLDivElement=host.current;
  let destroyed=false,dispose=()=>{};
  async function init(){
   try{
    const T=await import('three');
    const {RoomEnvironment}=await import('three/addons/environments/RoomEnvironment.js');
    if(destroyed)return;
    const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
    const mobile=window.matchMedia('(max-width: 650px)').matches;
    const renderer=new T.WebGLRenderer({alpha:true,antialias:!mobile,powerPreference:'low-power'});
    renderer.setPixelRatio(Math.min(window.devicePixelRatio,mobile?1.25:1.6));
    renderer.setClearColor(0x000000,0);renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.6;
    renderer.domElement.setAttribute('aria-hidden','true');el.appendChild(renderer.domElement);
    const scene=new T.Scene();
    const camera=new T.PerspectiveCamera(34,1,.1,100);camera.position.set(0,0,8.9);
    const pmrem=new T.PMREMGenerator(renderer),room=new RoomEnvironment();
    const environment=pmrem.fromScene(room,.05);scene.environment=environment.texture;room.dispose();pmrem.dispose();
    const sculpture=new T.Group();scene.add(sculpture);
    const material=new T.MeshPhysicalMaterial({color:'#8880eb',metalness:.85,roughness:.21,clearcoat:1,clearcoatRoughness:.12,iridescence:.85,iridescenceIOR:1.35,iridescenceThicknessRange:[130,370],envMapIntensity:1.45});
    const geometry=new T.TorusKnotGeometry(1.22,.37,mobile?100:160,20,2,3);
    const knot=new T.Mesh(geometry,material);knot.rotation.set(.4,.1,.2);sculpture.add(knot);
    const ringMaterial=new T.MeshStandardMaterial({color:'#d4d4ed',metalness:.85,roughness:.25});
    const ringGeometry=new T.TorusGeometry(2.05,.017,8,120);
    const ring=new T.Mesh(ringGeometry,ringMaterial);ring.rotation.set(1.06,.24,-.35);sculpture.add(ring);
    const orbGeometry=new T.SphereGeometry(.12,20,16);
    const orbMaterial=new T.MeshStandardMaterial({color:'#4c47ef',metalness:.5,roughness:.16});
    const orb=new T.Mesh(orbGeometry,orbMaterial);sculpture.add(orb);
    const light=new T.DirectionalLight('#ffffff',4);light.position.set(3,5,5);scene.add(light);
    const fill=new T.PointLight('#b9bcff',28);fill.position.set(-4,0,3);scene.add(fill);
    const rim=new T.PointLight('#bda4ff',30);rim.position.set(3,-3,-1);scene.add(rim);
    sculpture.position.set(-.05,.26,0);
    let visible=true,raf=0,last=0,time=0,targetX=0,targetY=0,needsRender=true;
    const resize=()=>{const w=el.clientWidth,h=el.clientHeight;if(!w||!h)return;renderer.setSize(w,h);camera.aspect=w/h;camera.updateProjectionMatrix();needsRender=true};
    const resizeObserver=new ResizeObserver(resize);resizeObserver.observe(el);resize();
    const observer=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting},{rootMargin:'80px'});observer.observe(el);
    const move=(e:PointerEvent)=>{if(reduced.matches)return;const rect=el.getBoundingClientRect();targetX=((e.clientX-rect.left)/rect.width-.5)*.5;targetY=((e.clientY-rect.top)/rect.height-.5)*.3};
    const reset=()=>{targetX=0;targetY=0};
    el.addEventListener('pointermove',move);el.addEventListener('pointerleave',reset);
    const onContextLost=(e:Event)=>{e.preventDefault();setReady(false)};renderer.domElement.addEventListener('webglcontextlost',onContextLost);
    const render=(now:number)=>{if(destroyed)return;raf=requestAnimationFrame(render);if(now-last<(mobile?1000/24:1000/36))return;const delta=Math.min((now-last)/1000,.05);last=now;if(!visible||document.hidden)return;const pointerMoving=Math.abs(targetX-sculpture.rotation.y)>.001||Math.abs(targetY-sculpture.rotation.x)>.001;if((pausedRef.current||reduced.matches)&&!pointerMoving&&!needsRender)return;
     if(!pausedRef.current&&!reduced.matches){time+=delta;knot.rotation.y=.1+time*.15;knot.rotation.z=.2+Math.sin(time*.23)*.16;sculpture.position.y=.26+Math.sin(time*.8)*.09;orb.position.set(Math.cos(time*.36)*2.05,Math.sin(time*.36)*.7,Math.sin(time*.36)*1.75);}
     sculpture.rotation.y+=(targetX-sculpture.rotation.y)*.05;sculpture.rotation.x+=(targetY-sculpture.rotation.x)*.05;renderer.render(scene,camera);
    };
    orb.position.set(1.9,.35,.3);renderer.render(scene,camera);setReady(true);raf=requestAnimationFrame(render);
    dispose=()=>{cancelAnimationFrame(raf);resizeObserver.disconnect();observer.disconnect();el.removeEventListener('pointermove',move);el.removeEventListener('pointerleave',reset);renderer.domElement.removeEventListener('webglcontextlost',onContextLost);geometry.dispose();ringGeometry.dispose();orbGeometry.dispose();material.dispose();ringMaterial.dispose();orbMaterial.dispose();environment.dispose();renderer.dispose();renderer.domElement.remove()};
   }catch{setReady(false)}
  }
  init();return()=>{destroyed=true;dispose()};
 },[]);
 return <div className={'kinetic-stage '+(ready?'scene-ready':'')}>
  <div className="stage-grid" aria-hidden="true"/><div className="stage-coordinate top">01 / CONNECTED THINKING</div>
  <div className="scene-host" ref={host} aria-label="Animated three-dimensional metallic sculpture" role="img"/>
  <div className="scene-fallback" aria-hidden="true"><i/><i/><i/></div>
  <div className="scene-cross cross-one" aria-hidden="true">+</div><div className="scene-cross cross-two" aria-hidden="true">+</div>
  <span className="scene-label label-support">Support<span>01</span></span><span className="scene-label label-systems">Systems<span>02</span></span>
  <div className="identity-card"><div className="identity-photo"><img src="/shehab.webp" alt="Shehab Al-Deen Haytham Abedrabuh" width="960" height="960" fetchPriority="high"/></div><div className="identity-caption"><span>THE PERSON BEHIND THE WORK</span><strong>Shehab Abedrabuh</strong><small>Nablus, Palestine <MoveUpRight size={13}/></small></div></div>
  <div className="stage-bottom"><span>TECHNOLOGY, WITH A HUMAN SIDE.</span>{ready&&<button onClick={()=>setPaused(!paused)} aria-label={paused?'Resume 3D animation':'Pause 3D animation'}>{paused?<Play size={13}/>:<Pause size={13}/>}<span>{paused?'Resume motion':'Pause motion'}</span></button>}</div>
 </div>
}


