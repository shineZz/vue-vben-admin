import{d as o,au as e,u as t,Y as s,N as i,s as a,as as r,f as n,at as d,br as l,bs as c,i as p,o as m,j as u,k as f,m as j,l as b,aJ as x}from"./index.a0c9d414.js";import"./index.5dbf41a4.js";import{D as _,G as C,S as F}from"./siteSetting.2daee9f0.js";import{G as S}from"./GithubFilled.3a4f5aeb.js";import"./index.673364b0.js";import"./index.8d91dadc.js";import"./useTimeout.81dc2a45.js";import"./useHeaderSetting.06bc887a.js";import"./domUtils.dc6d2a29.js";import"./index.803cad5c.js";import"./index.34eb3473.js";import"./RightOutlined.c999941e.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./index.fb1c853e.js";import"./useWindowSizeFn.3ffc3951.js";import"./usePageContext.21816986.js";import"./index.6f7c662f.js";import"./clickOutside.ba49a855.js";import"./index.a0e9bc88.js";import"./index.99820032.js";import"./useSortable.1eebfae0.js";var h=o({name:"LayoutFooter",components:{Footer:e.Footer,GithubFilled:S},setup(){const{t:o}=t(),{getShowFooter:e}=d(),{currentRoute:l}=s(),{prefixCls:c}=i("layout-footer");return{getShowLayoutFooter:a((()=>{var o;return n(e)&&!(null==(o=n(l).meta)?void 0:o.hiddenFooter)})),prefixCls:c,t:o,DOC_URL:_,GITHUB_URL:C,SITE_URL:F,openWindow:r}}});const g=x("data-v-47369c67");l("data-v-47369c67");const v=f("div",null,"Copyright ©2020 Vben Admin",-1);c();const w=g(((o,e,t,s,i,a)=>{const r=p("GithubFilled"),n=p("Footer");return o.getShowLayoutFooter?(m(),u(n,{key:0,class:o.prefixCls},{default:g((()=>[f("div",{class:`${o.prefixCls}__links`},[f("a",{onClick:e[1]||(e[1]=e=>o.openWindow(o.SITE_URL))},j(o.t("layout.footer.onlinePreview")),1),f(r,{onClick:e[2]||(e[2]=e=>o.openWindow(o.GITHUB_URL)),class:`${o.prefixCls}__github`},null,8,["class"]),f("a",{onClick:e[3]||(e[3]=e=>o.openWindow(o.DOC_URL))},j(o.t("layout.footer.onlineDocument")),1)],2),v])),_:1},8,["class"])):b("",!0)}));h.render=w,h.__scopeId="data-v-47369c67";export default h;