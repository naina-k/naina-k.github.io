const reveals=document.querySelectorAll('.reveal');
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
reveals.forEach((el,i)=>{el.style.transitionDelay=(i%5)*70+'ms';observer.observe(el)});

const cursor=document.querySelector('.cursor'), ring=document.querySelector('.cursor-ring');
if(window.matchMedia('(pointer:fine)').matches){
 document.body.classList.add('has-cursor');
 window.addEventListener('mousemove',e=>{cursor.style.left=e.clientX+'px';cursor.style.top=e.clientY+'px';ring.style.left=e.clientX+'px';ring.style.top=e.clientY+'px'});
 document.querySelectorAll('a,button,.project,.cert,.skill-cloud span').forEach(el=>{
   el.addEventListener('mouseenter',()=>{ring.style.width='48px';ring.style.height='48px'});
   el.addEventListener('mouseleave',()=>{ring.style.width='30px';ring.style.height='30px'});
 });
}
document.querySelector('.menu').addEventListener('click',()=>{
 const nav=document.querySelector('nav');
 nav.style.display=nav.style.display==='flex'?'none':'flex';
 nav.style.position='absolute';nav.style.top='78px';nav.style.right='6vw';nav.style.flexDirection='column';
 nav.style.background='rgba(251,250,247,.98)';nav.style.padding='20px';nav.style.gap='18px';
});
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>{if(innerWidth<801)document.querySelector('nav').style.display='none'}));
