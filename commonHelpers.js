import{s as m,i as l}from"./assets/vendor-1d1bb5a2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&t(a)}).observe(document,{childList:!0,subtree:!0});function i(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=i(e);fetch(e.href,s)}})();function u(o){const r="https://pixabay.com/api/",i=new URLSearchParams({key:"43225287-97b9a21e329f588fe71ea406f",q:o,image_type:"photo",orientation:"horizontal",safesearch:"true"}),t=`${r}?${i}`;return fetch(t).then(e=>e.json()).catch(e=>console.log(e))}const n=document.querySelector(".gallery");function f(o){const r=o.map(t=>`
        <div class="gallery-item">
        <a href="${t.largeImageURL}" class="photo-item">
        <img class='img' src="${t.webformatURL}" 
        alt="${t.tags}"/>
        </a>
        <ul class="text-list">
        <li class="list-item">Likes:<span class="image-text">${t.likes}</span></li>
        <li class="list-item">Views:<span class="image-text">${t.views}</span></li>
        <li class="list-item">Comments:<span class="image-text">${t.comments}</span></li>
        <li class="list-item">Downloads:<span class="image-text">${t.downloads}</span></li>
        </ul>
        </div>
      `).join(" ");n.innerHTML=r,new m(".gallery a").refresh()}form.addEventListener("submit",d);const c=document.querySelector(".loader");function d(o){o.preventDefault(),n.innerHTML="";const r=o.target.elements.formInput.value.trim();r===""?(l.error({color:"red",message:"Please,type any text",position:"topRight",title:"Error"}),n.innerHTML=""):u(r).then(i=>{i.hits.length<1?l.error({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",title:"Oops"}):(c.classList.add("show"),setTimeout(()=>{c.classList.remove("show"),f(i.hits)},1500))}).catch(i=>console.log(i))}
//# sourceMappingURL=commonHelpers.js.map
