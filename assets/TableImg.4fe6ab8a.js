import{d as e,bN as s,N as a,i,o as r,j as t,k as l,w as n,l as u,Q as p,S as m}from"./index.a0c9d414.js";import"./index.643da10c.js";var o=e({name:"TableImage",components:{Image:s,PreviewGroup:s.PreviewGroup},props:{imgList:{type:Array,default:null},size:{type:Number,default:40}},setup(){const{prefixCls:e}=a("basic-table-img");return{prefixCls:e}}});o.render=function(e,s,a,o,d,c){const f=i("Image"),g=i("PreviewGroup");return e.imgList&&e.imgList.length?(r(),t("div",{key:0,class:e.prefixCls},[l(g,null,{default:n((()=>[(r(!0),t(p,null,m(e.imgList,(s=>(r(),t(f,{key:s,width:e.size,src:s},null,8,["width","src"])))),128))])),_:1})],2)):u("",!0)};export default o;