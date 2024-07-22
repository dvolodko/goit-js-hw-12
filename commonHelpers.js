import{S as p,i as o}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const u="32552782-0d4c86680018457e820f20492",y="https://pixabay.com/api/";function f(a){const r=new URLSearchParams({key:u,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${y}?${r}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()})}const h=document.querySelector(".gallery");function d(a){const r=a.map(({webformatURL:t,largeImageURL:l,tags:e,likes:s,views:i,comments:g,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${l}">
          <img class="gallery-image" src="${t}" alt="${e}">
            <div class="gallery-image-stats">
            <ul class="gallery-image-stats-list">
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Likes</p>
                <p class="gallery-image-stats-text">${s}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Views</p>
                <p class="gallery-image-stats-text">${i}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Comments</p>
                <p class="gallery-image-stats-text">${g}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Downloads</p>
                <p class="gallery-image-stats-text">${m}</p>
              </li>
            </ul>
          </div>
        </a>
      </li>`).join("");h.insertAdjacentHTML("beforeend",r)}const c=document.querySelector(".form");c.addEventListener("submit",$);const n=document.querySelector(".gallery"),L=new p(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function $(a){a.preventDefault();const r=a.target.elements.searchField.value.toLowerCase().trim();if(!r){o.error({title:"Oops!",message:"Sorry, you have to type something in the search field. Please try again!",position:"topRight"});return}n.innerHTML='<span class="loader"></span>',f(r).then(t=>{if(t.hits.length===0){o.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.innerHTML="";return}else o.success({title:"Hooray!",message:`We have found ${t.hits.length} images for you!`,position:"topRight"});n.innerHTML="",d(t.hits),L.refresh()}).catch(t=>{o.error({title:"Oops!",message:`Sorry, there is some error: ${t}`,position:"topRight"})}),c.reset()}
//# sourceMappingURL=commonHelpers.js.map
