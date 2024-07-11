import{S as u,i as o}from"./assets/vendor-8c59ed88.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function t(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=t(e);fetch(e.href,s)}})();const p="32552782-0d4c86680018457e820f20492",y="https://pixabay.com/api/";function f(r){const a=new URLSearchParams({key:p,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${y}?${a}`).then(t=>{if(!t.ok)throw new Error(t.status);return t.json()}).catch(t=>console.log(t))}const h=document.querySelector(".gallery");function d(r){const a=r.map(({webformatURL:t,largeImageURL:i,tags:e,likes:s,views:l,comments:g,downloads:m})=>`<li class="gallery-item">
        <a class="gallery-link" href="${i}">
          <img class="gallery-image" src="${t}" alt="${e}">
            <div class="gallery-image-stats">
            <ul class="gallery-image-stats-list">
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Likes</p>
                <p class="gallery-image-stats-text">${s}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Views</p>
                <p class="gallery-image-stats-text">${l}</p>
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
      </li>`).join("");h.innerHTML=a}const c=document.querySelector(".form");c.addEventListener("submit",$);const n=document.querySelector(".gallery"),L=new u(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});function $(r){r.preventDefault();const a=r.target.elements.searchField.value.toLowerCase().trim();if(!a){o.error({title:"Oops!",message:"Sorry, you have to type something in the search field. Please try again!",position:"topRight"});return}n.innerHTML='<span class="loader"></span>',f(a).then(t=>{t.hits.length===0?o.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):o.success({title:"Hooray!",message:`We have found ${t.hits.length} images for you!`,position:"topRight"}),n.innerHTML="",d(t.hits),L.refresh()}),c.reset()}
//# sourceMappingURL=commonHelpers.js.map
