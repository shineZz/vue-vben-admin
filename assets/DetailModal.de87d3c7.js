import{_ as t}from"./index.4b5d41a1.js";import{D as e}from"./index.e5ec3032.js";import{u as s}from"./useDescription.8e2498d2.js";import{d as i,u as o,i as r,o as a,j as d,w as n,k as c,y as m}from"./index.a0c9d414.js";import{getDescSchema as p}from"./data.10ccc2ff.js";import"./useTimeout.81dc2a45.js";import"./useAttrs.d4af3e38.js";import"./useWindowSizeFn.3ffc3951.js";import"./index.803cad5c.js";import"./index.34eb3473.js";import"./domUtils.dc6d2a29.js";import"./RightOutlined.c999941e.js";import"./index.8d91dadc.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./FullscreenOutlined.a24d6272.js";import"./index.c741f5a3.js";import"./index.9284d4e4.js";var l=i({name:"ErrorLogDetailModal",components:{BasicModal:t,Description:e},props:{info:{type:Object,default:null}},setup(){const{t:t}=o(),[e]=s({column:2,schema:p()});return{register:e,useI18n:o,t:t}}});l.render=function(t,e,s,i,o,p){const l=r("Description"),u=r("BasicModal");return a(),d(u,m({width:800,title:t.t("sys.errorLog.tableActionDesc")},t.$attrs),{default:n((()=>[c(l,{data:t.info,onRegister:t.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default l;