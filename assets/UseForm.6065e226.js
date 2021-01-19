import{_ as s}from"./index.60510fc2.js";import{a as e}from"./index.803cad5c.js";import{d as o,h as t,i as l,o as i,j as a,w as n,k as r,n as d}from"./index.a0c9d414.js";import{_ as p}from"./index.5b50fd31.js";import{u as c}from"./useForm.0c31c5a9.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.47fbc714.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.d4af3e38.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.4b5d41a1.js";import"./useTimeout.81dc2a45.js";import"./useWindowSizeFn.3ffc3951.js";import"./FullscreenOutlined.a24d6272.js";import"./index.a45b2b74.js";import"./index.99820032.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.d1b8f6fd.js";import"./domUtils.dc6d2a29.js";import"./index.34eb3473.js";import"./RightOutlined.c999941e.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./index.b0611c31.js";import"./index.9fbd6c39.js";import"./usePageContext.21816986.js";const m=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:{placeholder:"自定义placeholder",onChange:s=>{}}},{field:"field2",component:"Input",label:"字段2",colProps:{span:8}},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}}];var u=o({components:{BasicForm:s,CollapseContainer:e,PageWrapper:p},setup(){const{createMessage:s}=t(),[e,{setProps:o}]=c({labelWidth:120,schemas:m,actionColOptions:{span:24}});return{register:e,schemas:m,handleSubmit:e=>{s.success("click search,values:"+JSON.stringify(e))},setProps:o}}});const f={class:"mb-4"},b=d("更改labelWidth"),j=d("还原labelWidth"),P=d("更改Size"),x=d("还原Size"),C=d("禁用表单"),k=d("解除禁用"),h=d("紧凑表单"),_=d("还原正常间距"),g=d(" 操作按钮位置 "),S={class:"mb-4"},v=d(" 隐藏操作按钮 "),w=d(" 显示操作按钮 "),B=d(" 隐藏重置按钮 "),W=d(" 显示重置按钮 "),F=d(" 隐藏查询按钮 "),O=d(" 显示查询按钮 "),R=d(" 修改重置按钮 "),z=d(" 修改查询按钮 ");u.render=function(s,e,o,t,d,p){const c=l("a-button"),m=l("BasicForm"),u=l("CollapseContainer"),G=l("PageWrapper");return i(),a(G,{title:"UseForm操作示例"},{default:n((()=>[r("div",f,[r(c,{onClick:e[1]||(e[1]=e=>s.setProps({labelWidth:150})),class:"mr-2"},{default:n((()=>[b])),_:1}),r(c,{onClick:e[2]||(e[2]=e=>s.setProps({labelWidth:120})),class:"mr-2"},{default:n((()=>[j])),_:1}),r(c,{onClick:e[3]||(e[3]=e=>s.setProps({size:"large"})),class:"mr-2"},{default:n((()=>[P])),_:1}),r(c,{onClick:e[4]||(e[4]=e=>s.setProps({size:"default"})),class:"mr-2"},{default:n((()=>[x])),_:1}),r(c,{onClick:e[5]||(e[5]=e=>s.setProps({disabled:!0})),class:"mr-2"},{default:n((()=>[C])),_:1}),r(c,{onClick:e[6]||(e[6]=e=>s.setProps({disabled:!1})),class:"mr-2"},{default:n((()=>[k])),_:1}),r(c,{onClick:e[7]||(e[7]=e=>s.setProps({compact:!0})),class:"mr-2"},{default:n((()=>[h])),_:1}),r(c,{onClick:e[8]||(e[8]=e=>s.setProps({compact:!1})),class:"mr-2"},{default:n((()=>[_])),_:1}),r(c,{onClick:e[9]||(e[9]=e=>s.setProps({actionColOptions:{span:8}})),class:"mr-2"},{default:n((()=>[g])),_:1})]),r("div",S,[r(c,{onClick:e[10]||(e[10]=e=>s.setProps({showActionButtonGroup:!1})),class:"mr-2"},{default:n((()=>[v])),_:1}),r(c,{onClick:e[11]||(e[11]=e=>s.setProps({showActionButtonGroup:!0})),class:"mr-2"},{default:n((()=>[w])),_:1}),r(c,{onClick:e[12]||(e[12]=e=>s.setProps({showResetButton:!1})),class:"mr-2"},{default:n((()=>[B])),_:1}),r(c,{onClick:e[13]||(e[13]=e=>s.setProps({showResetButton:!0})),class:"mr-2"},{default:n((()=>[W])),_:1}),r(c,{onClick:e[14]||(e[14]=e=>s.setProps({showSubmitButton:!1})),class:"mr-2"},{default:n((()=>[F])),_:1}),r(c,{onClick:e[15]||(e[15]=e=>s.setProps({showSubmitButton:!0})),class:"mr-2"},{default:n((()=>[O])),_:1}),r(c,{onClick:e[16]||(e[16]=e=>s.setProps({resetButtonOptions:{disabled:!0,text:"重置New"}})),class:"mr-2"},{default:n((()=>[R])),_:1}),r(c,{onClick:e[17]||(e[17]=e=>s.setProps({submitButtonOptions:{disabled:!0,loading:!0}})),class:"mr-2"},{default:n((()=>[z])),_:1})]),r(u,{title:"useForm示例"},{default:n((()=>[r(m,{onRegister:s.register,onSubmit:s.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default u;