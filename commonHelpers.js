import"./assets/styles-32c11958.js";/* empty css                     */import{f as l,i as s}from"./assets/vendor-77e16229.js";function o(e){return e<10?`0${e}`:e}document.addEventListener("DOMContentLoaded",()=>{const e=document.getElementById("datetime-picker"),n=document.getElementById("start-timer");l(e,{enableTime:!0,defaultDate:new Date,minuteIncrement:1,onClose(r){r[0]>new Date?n.disabled=!1:(s.error({title:"Error",message:"Please choose a date in the future"}),n.disabled=!0)}}),n.addEventListener("click",()=>{const r=new Date(e.value),a=setInterval(()=>{const t=r-new Date;if(t<=0){clearInterval(a),s.success({title:"Success",message:"Countdown Timer Finished"});return}const c=Math.floor(t/(1e3*60*60*24)),d=Math.floor(t%(1e3*60*60*24)/(1e3*60*60)),i=Math.floor(t%(1e3*60*60)/(1e3*60)),u=Math.floor(t%(1e3*60)/1e3);document.querySelector("[data-days]").textContent=o(c),document.querySelector("[data-hours]").textContent=o(d),document.querySelector("[data-minutes]").textContent=o(i),document.querySelector("[data-seconds]").textContent=o(u)},1e3);n.disabled=!0})});
//# sourceMappingURL=commonHelpers.js.map
