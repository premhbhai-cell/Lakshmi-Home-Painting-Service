(function(){var d=document,H=d.documentElement,pg=(location.pathname.split('/').pop()||'index.html').replace(/\.html$/,'')||'index',ed=/[?&]edit=1/.test(location.search)&&window.parent!==window,adm=+localStorage.getItem('cms_admin')>Date.now();
H.style.visibility='hidden';var shown=0;function show(){if(!shown){shown=1;H.style.visibility=''}}setTimeout(show,2500);
function apply(h){var b=d.body,s=b.querySelector('script'),t=d.createElement('div');t.innerHTML=h;[].slice.call(b.children).forEach(function(e){if(e.tagName!='SCRIPT')e.remove()});while(t.firstChild)b.insertBefore(t.firstChild,s);
d.querySelectorAll('.rv').forEach(function(e){e.classList.add('in')});var f=location.pathname.split('/').pop()||'index.html';d.querySelectorAll('.bnav a').forEach(function(a){if(a.getAttribute('href')==f)a.classList.add('on')})}
function login(){var n=d.querySelector('header nav');if(n&&!n.querySelector('.cms-login')){var a=d.createElement('a');a.className='btn sm cms-login';a.href='admin.html';a.textContent='Login';n.appendChild(a)}}
function ld(src,cb){var s=d.createElement('script');s.src=src;s.onload=cb;d.body.appendChild(s)}
function go(){var loc=null;if(adm)try{loc=JSON.parse(localStorage.getItem('cms_p_'+pg))}catch(e){}
(loc?Promise.resolve(loc):fetch('content/'+pg+'.json',{cache:'no-cache'}).then(function(r){return r.ok?r.json():null})).catch(function(){return null}).then(function(j){if(j&&j.html)apply(j.html)}).then(function(){if(ed&&adm)ld('cms-core.js',function(){ld('editor.js')});else login();show()})}
if(d.readyState=='loading')d.addEventListener('DOMContentLoaded',go);else go()})();
