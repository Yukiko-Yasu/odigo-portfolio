!function(){let e=document.querySelector(".header");window.onscroll=()=>{window.scrollY>100?e.classList.add("header_active"):e.classList.remove("header_active")}}(),function(){let e=document.querySelector(".burger"),l=document.querySelector(".header__nav"),t=document.querySelector(".header__nav-close"),r=document.querySelectorAll(".header__link");if(e.addEventListener("click",()=>{l.classList.add("header__nav_active"),scrollController.disabledScroll()}),t.addEventListener("click",()=>{l.classList.remove("header__nav_active"),scrollController.enabledScroll()}),window.innerWidth<=767)for(let c=0;c<r.length;c++)r[c].addEventListener("click",()=>{l.classList.remove("header__nav_active")})}(),function(){let e=function(e,l){let t=document.querySelector(".header").clientHeight,r=document.querySelector(e).getBoundingClientRect().top-t,c=window.scrollY,o=null,n=function(e){var t,s,i,a;null===o&&(o=e);let d=e-o,u=(t=d,s=c,i=r,a=l,(t/=a/2)<1?i/2*t*t+s:-i/2*(--t*(t-2)-1)+s);window.scrollTo(0,u),d<l&&requestAnimationFrame(n)};requestAnimationFrame(n)};!function(){let l=document.querySelectorAll(".js-scroll");l.forEach(l=>{l.addEventListener("click",function(){let l=this.getAttribute("href");e(l,1e3)})})}()}();const scrollController = {
  disabledScroll() {
    document.body.style.cssText = `
    overflow: hidden;
    `
  },
  enabledScroll() {
    document.body.style.cssText = `
    overflow: auto;
    `
  },
}; 
