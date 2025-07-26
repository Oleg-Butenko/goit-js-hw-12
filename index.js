import{a as x,S as C,i as a}from"./assets/vendor-5YrzWRhu.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const q="51380879-d62d23ff75e6f86b6b9ab3020";async function h(s,o){return(await x.get("https://pixabay.com/api/",{params:{key:q,q:s.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),v=new C(".gallery a",{}),g=document.querySelector(".more-btn");function f(s){m.insertAdjacentHTML("beforeend",s.map(({webformatURL:o,largeImageURL:r,tags:n,likes:e,views:t,comments:l,downloads:L})=>`<li class="gallery-item">
            <a class="gallery-link" href="${r}">
                <img class="gallery-img" src="${o}" alt="${n}"/>
            </a>
            <ul class="descr-list">
                <li class="descr-list-item">
                    <h2>Likes</h2>
                    <p>${e}</p>
                </li>
                <li class="descr-list-item">
                    <h2>Views</h2>
                    <p>${t}</p>
                </li>
                <li class="descr-list-item">
                    <h2>Comments</h2>
                    <p>${l}</p>
                </li>
                <li class="descr-list-item">
                    <h2>Downloads</h2>
                    <p>${L}</p>
                </li>
            </ul>
        </li>`).join("")),v.refresh()}function S(){m.innerHTML=""}function y(){p.style.display="block"}function c(){p.style.display="none"}function b(){g.style.display="block"}function u(){g.style.display="none"}const d=document.querySelector(".form"),B=document.querySelector(".more-btn");let i=1,w="";d.addEventListener("submit",$);B.addEventListener("click",k);function $(s){s.preventDefault(),S(),y(),u(),i=1;const[o]=s.target.elements;if(w=o.value.trim(),!o.value.trim()){a.show({message:"Please enter a valid search query",messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}),c(),d.reset();return}h(o.value,i).then(r=>{r.hits.length===0?a.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}):(f(r.hits),b(),i>=r.totalHits/15&&(a.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"lightBlue",maxWidth:"432px",close:!0,position:"topRight"}),u())),c()}).catch(r=>{a.show({message:r.message,messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}),c()}),d.reset()}function k(){y(),i++,u(),h(w,i).then(s=>{i>=s.totalHits/15&&(u(),a.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"lightBlue",maxWidth:"432px",close:!0,position:"topRight"})),f(s.hits);const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"}),c(),b()})}
//# sourceMappingURL=index.js.map
