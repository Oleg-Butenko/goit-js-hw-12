import{a as C,S as L,i}from"./assets/vendor-5YrzWRhu.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function c(e){if(e.ep)return;e.ep=!0;const t=s(e);fetch(e.href,t)}})();const q="51380879-d62d23ff75e6f86b6b9ab3020";async function h(o,r){return(await C.get("https://pixabay.com/api/",{params:{key:q,q:o.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),v=new L(".gallery a",{}),g=document.querySelector(".more-btn");function f(o){m.insertAdjacentHTML("beforeend",o.map(({webformatURL:r,largeImageURL:s,tags:c,likes:e,views:t,comments:a,downloads:x})=>`<li class="gallery-item">
            <a class="gallery-link" href="${s}">
                <img class="gallery-img" src="${r}" alt="${c}"/>
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
                    <p>${a}</p>
                </li>
                <li class="descr-list-item">
                    <h2>Downloads</h2>
                    <p>${x}</p>
                </li>
            </ul>
        </li>`).join("")),v.refresh()}function S(){m.innerHTML=""}function y(){p.style.display="block"}function n(){p.style.display="none"}function b(){g.style.display="block"}function u(){g.style.display="none"}const d=document.querySelector(".form"),B=document.querySelector(".more-btn");let l=1,w="";d.addEventListener("submit",k);B.addEventListener("click",W);function k(o){o.preventDefault(),S(),y(),u(),l=1;const[r]=o.target.elements;if(w=r.value.trim(),!r.value.trim()){i.show({message:"Please enter a valid search query",messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}),n(),d.reset();return}h(r.value,l).then(s=>{s.hits.length===0?i.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}):(f(s.hits),b(),l>=s.totalHits/15&&(i.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"lightBlue",maxWidth:"432px",close:!0,position:"topRight"}),u())),n()}).catch(s=>{i.show({message:s.message,messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}),n()}),d.reset()}function W(){y(),l++,u(),h(w,l).then(o=>{l>=o.totalHits/15&&(u(),i.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"lightBlue",maxWidth:"432px",close:!0,position:"topRight"})),f(o.hits);const s=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:s.height*2,behavior:"smooth"}),n(),b()}).catch(o=>{i.show({message:o.message,messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}),n()})}
//# sourceMappingURL=index.js.map
