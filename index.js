import{a as L,S as q,i}from"./assets/vendor-5YrzWRhu.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&c(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function c(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();const v="51380879-d62d23ff75e6f86b6b9ab3020";async function h(r,s){return(await L.get("https://pixabay.com/api/",{params:{key:v,q:r.trim(),image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s}})).data}const m=document.querySelector(".gallery"),p=document.querySelector(".loader"),S=new q(".gallery a",{}),g=document.querySelector(".more-btn");function y(r){m.insertAdjacentHTML("beforeend",r.map(({webformatURL:s,largeImageURL:t,tags:c,likes:e,views:o,comments:l,downloads:x})=>`<li class="gallery-item">
            <a class="gallery-link" href="${t}">
                <img class="gallery-img" src="${s}" alt="${c}"/>
            </a>
            <ul class="descr-list">
                <li class="descr-list-item">
                    <h2>Likes</h2>
                    <p>${e}</p>
                </li>
                <li class="descr-list-item">
                    <h2>Views</h2>
                    <p>${o}</p>
                </li>
                <li class="descr-list-item">
                    <h2>Comments</h2>
                    <p>${l}</p>
                </li>
                <li class="descr-list-item">
                    <h2>Downloads</h2>
                    <p>${x}</p>
                </li>
            </ul>
        </li>`).join("")),S.refresh()}function B(){m.innerHTML=""}function f(){p.style.display="block"}function a(){p.style.display="none"}function b(){g.style.display="block"}function u(){g.style.display="none"}const w=document.querySelector(".form"),k=document.querySelector(".more-btn");let d=1,C="",n;w.addEventListener("submit",W);k.addEventListener("click",$);async function W(r){r.preventDefault(),B(),f(),u(),d=1;const[s]=r.target.elements;if(C=s.value.trim(),!s.value.trim()){i.show({message:"Please enter a valid search query",messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}),a();return}try{const t=await h(s.value,d);n=t.totalHits,t.hits.length===0?i.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}):(n-=t.hits.length,y(t.hits),b(),t.hits.length>=n&&(i.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"lightBlue",maxWidth:"432px",close:!0,position:"topRight"}),u())),a()}catch(t){i.show({message:t.message,messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}),a()}w.reset()}async function $(){u(),f(),d++;try{const r=await h(C,d);y(r.hits),a(),b();const t=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:t.height*2,behavior:"smooth"}),n-=r.hits.length,n||(i.show({message:"We're sorry, but you've reached the end of search results.",messageColor:"white",backgroundColor:"lightBlue",maxWidth:"432px",close:!0,position:"topRight"}),u())}catch(r){i.show({message:r.message,messageColor:"white",backgroundColor:"red",maxWidth:"432px",close:!0,position:"topRight"}),a()}}
//# sourceMappingURL=index.js.map
