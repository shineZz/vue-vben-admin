import{_ as e}from"./index.2e3c5ad0.js";import{getBasicColumns as i,getBasicData as t}from"./tableData.7aa0192c.js";import{_ as o}from"./index.5b50fd31.js";import{d as a,r as s,i as r,o as d,j as n,k as p,w as c,n as m,m as l}from"./index.a0c9d414.js";import"./index.47fbc714.js";import"./index.60510fc2.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.d4af3e38.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.4b5d41a1.js";import"./useTimeout.81dc2a45.js";import"./useWindowSizeFn.3ffc3951.js";import"./index.803cad5c.js";import"./index.34eb3473.js";import"./domUtils.dc6d2a29.js";import"./RightOutlined.c999941e.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./FullscreenOutlined.a24d6272.js";import"./index.a45b2b74.js";import"./index.99820032.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.d1b8f6fd.js";import"./index.27bb0464.js";import"./clickOutside.ba49a855.js";import"./CheckOutlined.1616189b.js";import"./useSortable.1eebfae0.js";import"./SettingOutlined.fcf5c9f8.js";import"./useExpose.9b24ca4e.js";import"./useForm.0c31c5a9.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.21816986.js";var u=a({components:{BasicTable:e,PageWrapper:o},setup(){const e=s(!1),o=s(!1),a=s(!0),r=s(!0),d=s(!1);return{columns:i(),data:t(),canResize:e,loading:o,striped:a,border:r,toggleStriped:function(){a.value=!a.value},toggleCanResize:function(){e.value=!e.value},toggleLoading:function(){o.value=!0,setTimeout((()=>{o.value=!1,d.value={pageSize:20}}),3e3)},toggleBorder:function(){r.value=!r.value},pagination:d}}});const j={class:"p-4"},g=m(" 开启loading ");u.render=function(e,i,t,o,a,s){const u=r("a-button"),f=r("BasicTable");return d(),n("div",j,[p(f,{title:"基础示例",titleHelpMessage:"温馨提醒",columns:e.columns,dataSource:e.data,canResize:e.canResize,loading:e.loading,striped:e.striped,bordered:e.border,showTableSetting:"",pagination:e.pagination},{toolbar:c((()=>[p(u,{type:"primary",onClick:e.toggleCanResize},{default:c((()=>[m(l(e.canResize?"取消自适应":"自适应高度"),1)])),_:1},8,["onClick"]),p(u,{type:"primary",onClick:e.toggleBorder},{default:c((()=>[m(l(e.border?"隐藏边框":"显示边框"),1)])),_:1},8,["onClick"]),p(u,{type:"primary",onClick:e.toggleLoading},{default:c((()=>[g])),_:1},8,["onClick"]),p(u,{type:"primary",onClick:e.toggleStriped},{default:c((()=>[m(l(e.striped?"隐藏斑马纹":"显示斑马纹"),1)])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource","canResize","loading","striped","bordered","pagination"])])};export default u;