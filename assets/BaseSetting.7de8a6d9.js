import{c1 as a,d as s,B as e,bP as t,H as o,R as i,a as d,a6 as r,h as n,br as c,bs as m,i as p,o as l,j as u,aJ as j,k as f,n as x}from"./index.a0c9d414.js";import"./index.38c8e961.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.8d91dadc.js";import{_ as h}from"./index.60510fc2.js";import{a as b}from"./index.803cad5c.js";import{h as g}from"./header.3041aac3.js";import{b as _}from"./data.a32591d5.js";import{u as C}from"./useForm.0c31c5a9.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.d4af3e38.js";import"./index.f4c035d6.js";import"./index.4b5d41a1.js";import"./useTimeout.81dc2a45.js";import"./useWindowSizeFn.3ffc3951.js";import"./FullscreenOutlined.a24d6272.js";import"./index.a45b2b74.js";import"./index.99820032.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.d1b8f6fd.js";import"./domUtils.dc6d2a29.js";import"./index.34eb3473.js";import"./RightOutlined.c999941e.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";var v;(v||(v={})).ACCOUNT_INFO="/account/getAccountInfo";var F=s({components:{BasicForm:h,CollapseContainer:b,Button:e,Upload:t,Icon:o,[i.name]:i,[d.name]:d},setup(){const{createMessage:s}=n(),[e,{setFieldsValue:t}]=C({labelWidth:120,schemas:_,showActionButtonGroup:!1});return r((async()=>{const s=await a.request({url:v.ACCOUNT_INFO,method:"GET"});t(s)})),{headerImg:g,register:e,handleSubmit:()=>{s.success("更新成功！")}}}});const I=j("data-v-756d276a");c("data-v-756d276a");const w={class:"change-avatar"},B=f("div",{class:"mb-2"},"头像",-1),O=x("更换头像 "),U=x("更新基本信息");m();const A=I(((a,s,e,t,o,i)=>{const d=p("BasicForm"),r=p("a-col"),n=p("Icon"),c=p("Button"),m=p("Upload"),j=p("a-row"),x=p("CollapseContainer");return l(),u(x,{title:"基本设置",canExpan:!1},{default:I((()=>[f(j,{gutter:24},{default:I((()=>[f(r,{span:14},{default:I((()=>[f(d,{onRegister:a.register},null,8,["onRegister"])])),_:1}),f(r,{span:10},{default:I((()=>[f("div",w,[B,f("img",{width:"140",src:a.headerImg},null,8,["src"]),f(m,{showUploadList:!1},{default:I((()=>[f(c,{type:"ghost",class:"ml-5"},{default:I((()=>[f(n,{icon:"feather:upload"}),O])),_:1})])),_:1})])])),_:1})])),_:1}),f(c,{type:"primary",onClick:a.handleSubmit},{default:I((()=>[U])),_:1},8,["onClick"])])),_:1})}));F.render=A,F.__scopeId="data-v-756d276a";export default F;