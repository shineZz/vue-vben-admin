import{x as e}from"./index.1cd496a6.js";import{d as t,r as n,f as a,o as s,j as r,ak as l,al as c,k as o,aa as u}from"./index.a0c9d414.js";var i=t({name:"ImportExcel",emits:["success","error"],setup(t,{emit:s}){const r=n(null),l=n(!1);function c(t){if(!t||!t["!ref"])return[];const n=[],a=e.utils.decode_range(t["!ref"]),s=a.s.r;for(let r=a.s.c;r<=a.e.c;++r){const a=t[e.utils.encode_cell({c:r,r:s})];let l="UNKNOWN "+r;a&&a.t&&(l=e.utils.format_cell(a)),n.push(l)}return n}function o(t){return l.value=!0,new Promise(((n,a)=>{const r=new FileReader;r.onload=async t=>{try{const a=t.target&&t.target.result,r=function(t){const n=[];for(const a of t.SheetNames){const s=t.Sheets[a],r=c(s),l=e.utils.sheet_to_json(s);n.push({header:r,results:l,meta:{sheetName:a}})}return n}(e.read(a,{type:"array"}));s("success",r),n("")}catch(r){a(r),s("error")}finally{l.value=!1}},r.readAsArrayBuffer(t)}))}return{handleUpload:function(){const e=a(r);e&&e.click()},handleInputClick:function(e){const t=e&&e.target.files,n=t&&t[0];n&&async function(e){const t=a(r);t&&(t.value=""),await o(e)}(n)},inputRef:r}}});i.render=function(e,t,n,a,i,d){return s(),r("div",null,[l(o("input",{ref:"inputRef",type:"file",accept:".xlsx, .xls",onChange:t[1]||(t[1]=(...t)=>e.handleInputClick&&e.handleInputClick(...t))},null,544),[[c,!1]]),o("div",{onClick:t[2]||(t[2]=(...t)=>e.handleUpload&&e.handleUpload(...t))},[u(e.$slots,"default")])])};export default i;