import"./assets/modulepreload-polyfill-3cfb730f.js";/* empty css                      */import{i as s}from"./assets/vendor-77e16229.js";const o=document.querySelector(".form");o.addEventListener("submit",m);function m(i){i.preventDefault();const t=o.elements.delay.value,f=o.elements.state.value;function r(e,l){return new Promise((n,a)=>{setTimeout(()=>{l==="fulfilled"&&n(e),a(e)},t),o.reset()})}r(t,f).then(e=>{s.success({message:`✅ Fulfilled promise in ${e}ms`,title:"OK",icon:"",backgroundColor:"#59A10D",titleColor:"#ffffff",messageColor:"#ffffff",close:!1,position:"topRight",titleSize:16,messageSize:16})}).catch(e=>{s.error({title:"Error",message:`❌ Rejected promise in ${e}ms`,icon:"",backgroundColor:"#EF4040",titleColor:"#ffffff",messageColor:"#ffffff",close:!1,position:"topRight",titleSize:16,messageSize:16})})}
//# sourceMappingURL=commonHelpers2.js.map
