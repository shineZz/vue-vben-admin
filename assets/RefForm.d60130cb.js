import{_ as s}from"./index.60510fc2.js";import{a as e}from"./index.803cad5c.js";import{d as o,r as t,h as l,i,o as a,j as n,w as r,k as d,n as c}from"./index.a0c9d414.js";import{_ as p}from"./index.5b50fd31.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.d4af3e38.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.4b5d41a1.js";import"./useTimeout.81dc2a45.js";import"./useWindowSizeFn.3ffc3951.js";import"./FullscreenOutlined.a24d6272.js";import"./index.a45b2b74.js";import"./index.99820032.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.d1b8f6fd.js";import"./domUtils.dc6d2a29.js";import"./index.34eb3473.js";import"./RightOutlined.c999941e.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.21816986.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:s=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=o({components:{BasicForm:s,CollapseContainer:e,PageWrapper:p},setup(){const s=t(null),{createMessage:e}=l();return{formElRef:s,schemas:m,handleSubmit:s=>{e.success("click search,values:"+JSON.stringify(s))},setProps(e){const o=s.value;o&&o.setProps(e)}}}});const f={class:"mb-4"},b=c("更改labelWidth"),j=c("还原labelWidth"),P=c("更改Size"),x=c("还原Size"),C=c("禁用表单"),h=c("解除禁用"),k=c("紧凑表单"),_=c("还原正常间距"),S=c(" 操作按钮位置 "),v={class:"mb-4"},w=c(" 隐藏操作按钮 "),B=c(" 显示操作按钮 "),g=c(" 隐藏重置按钮 "),W=c(" 显示重置按钮 "),O=c(" 隐藏查询按钮 "),R=c(" 显示查询按钮 "),z=c(" 修改重置按钮 "),F=c(" 修改查询按钮 ");u.render=function(s,e,o,t,l,c){const p=i("a-button"),m=i("BasicForm"),u=i("CollapseContainer"),G=i("PageWrapper");return a(),n(G,{title:"Ref操作示例"},{default:r((()=>[d("div",f,[d(p,{onClick:e[1]||(e[1]=e=>s.setProps({labelWidth:150})),class:"mr-2"},{default:r((()=>[b])),_:1}),d(p,{onClick:e[2]||(e[2]=e=>s.setProps({labelWidth:120})),class:"mr-2"},{default:r((()=>[j])),_:1}),d(p,{onClick:e[3]||(e[3]=e=>s.setProps({size:"large"})),class:"mr-2"},{default:r((()=>[P])),_:1}),d(p,{onClick:e[4]||(e[4]=e=>s.setProps({size:"default"})),class:"mr-2"},{default:r((()=>[x])),_:1}),d(p,{onClick:e[5]||(e[5]=e=>s.setProps({disabled:!0})),class:"mr-2"},{default:r((()=>[C])),_:1}),d(p,{onClick:e[6]||(e[6]=e=>s.setProps({disabled:!1})),class:"mr-2"},{default:r((()=>[h])),_:1}),d(p,{onClick:e[7]||(e[7]=e=>s.setProps({compact:!0})),class:"mr-2"},{default:r((()=>[k])),_:1}),d(p,{onClick:e[8]||(e[8]=e=>s.setProps({compact:!1})),class:"mr-2"},{default:r((()=>[_])),_:1}),d(p,{onClick:e[9]||(e[9]=e=>s.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:r((()=>[S])),_:1})]),d("div",v,[d(p,{onClick:e[10]||(e[10]=e=>s.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:r((()=>[w])),_:1}),d(p,{onClick:e[11]||(e[11]=e=>s.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:r((()=>[B])),_:1}),d(p,{onClick:e[12]||(e[12]=e=>s.setProps({showResetButton:!1})),class:"mr-2"},{default:r((()=>[g])),_:1}),d(p,{onClick:e[13]||(e[13]=e=>s.setProps({showResetButton:!0})),class:"mr-2"},{default:r((()=>[W])),_:1}),d(p,{onClick:e[14]||(e[14]=e=>s.setProps({showSubmitButton:!1})),class:"mr-2"},{default:r((()=>[O])),_:1}),d(p,{onClick:e[15]||(e[15]=e=>s.setProps({showSubmitButton:!0})),class:"mr-2"},{default:r((()=>[R])),_:1}),d(p,{onClick:e[16]||(e[16]=e=>s.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:r((()=>[z])),_:1}),d(p,{onClick:e[17]||(e[17]=e=>s.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:r((()=>[F])),_:1})]),d(u,{title:"使用ref调用表单内部函数示例"},{default:r((()=>[d(m,{schemas:s.schemas,ref:"formElRef",labelWidth:100,onSubmit:s.handleSubmit,actionColOptions:{span:24}},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default u;