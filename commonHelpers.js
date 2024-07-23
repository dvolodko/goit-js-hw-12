import{a as p,i,S as w}from"./assets/vendor-53a1b719.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const r of a.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&n(r)}).observe(document,{childList:!0,subtree:!0});function l(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function n(t){if(t.ep)return;t.ep=!0;const a=l(t);fetch(t.href,a)}})();const H="32552782-0d4c86680018457e820f20492";p.defaults.baseURL="https://pixabay.com/api/";const m={params:{key:H,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}};async function y(e,s){return m.params.q=e,m.params.page=s,(await p.get("",m)).data}const O=document.querySelector(".gallery");function q(e){const s=e.map(({webformatURL:l,largeImageURL:n,tags:t,likes:a,views:r,comments:S,downloads:$})=>`<li class="gallery-item">
        <a class="gallery-link" href="${n}">
          <img class="gallery-image" src="${l}" alt="${t}">
            <div class="gallery-image-stats">
            <ul class="gallery-image-stats-list">
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Likes</p>
                <p class="gallery-image-stats-text">${a}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Views</p>
                <p class="gallery-image-stats-text">${r}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Comments</p>
                <p class="gallery-image-stats-text">${S}</p>
              </li>
              <li class="gallery-image-stats-item">
                <p class="gallery-image-stats-title">Downloads</p>
                <p class="gallery-image-stats-text">${$}</p>
              </li>
            </ul>
          </div>
        </a>
      </li>`).join("");O.insertAdjacentHTML("beforeend",s)}function x(){i.error({title:"Oops!",message:"Sorry, you have to type something in the search field. Please try again!",position:"topRight"})}function M(){i.error({title:"Oops!",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"})}function P(e){i.success({title:"Hooray!",message:`We have found ${e} images for you!`,position:"topRight"})}function R(){i.info({title:"Oops!",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})}function d(e){i.error({title:"Oops!",message:`Sorry, there is some error: ${e}`,position:"topRight"})}const f=document.querySelector(".loader-element");function h(){f.insertAdjacentHTML("beforeend",'<span class="loader"></span>')}function g(){f.innerHTML=""}const L=document.querySelector(".form");L.addEventListener("submit",B);const v=document.querySelector(".gallery"),u=document.querySelector(".js-load-more");u.addEventListener("click",E);const T=new w(".gallery a",{captionsData:"alt",captionDelay:250,overlayOpacity:.8});let c="",o=1;async function B(e){if(e.preventDefault(),I(),c=e.target.elements.searchField.value.toLowerCase().trim(),!c){x();return}h();try{const s=await y(c,o);s.hits.length===0?(M(),g()):(P(s.totalHits),b(s))}catch(s){d(s),g()}L.reset()}async function E(){h();try{const e=await y(c,o);b(e),j()}catch(e){d(e),g()}}async function b(e){g(),q(e.hits),T.refresh();const s=Math.ceil(e.totalHits/15);o+=1,o>s?(R(),u.classList.add("hidden")):u.classList.remove("hidden")}function I(){o=1,v.innerHTML=""}function j(){const e=v.querySelector(".gallery-item").getBoundingClientRect().height;window.scrollBy({top:e*2,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
