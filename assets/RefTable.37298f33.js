import{_ as e}from"./index.2e3c5ad0.js";import{getBasicColumns as i,getBasicShortColumns as t}from"./tableData.7aa0192c.js";import{d as o,r as n,h as s,f as a,i as c,o as l,j as r,k as d,w as m,n as u}from"./index.a0c9d414.js";import{d as f}from"./table.ea267a81.js";import"./index.47fbc714.js";import"./index.60510fc2.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.d4af3e38.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.4b5d41a1.js";import"./useTimeout.81dc2a45.js";import"./useWindowSizeFn.3ffc3951.js";import"./index.803cad5c.js";import"./index.34eb3473.js";import"./domUtils.dc6d2a29.js";import"./RightOutlined.c999941e.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./FullscreenOutlined.a24d6272.js";import"./index.a45b2b74.js";import"./index.99820032.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.d1b8f6fd.js";import"./index.27bb0464.js";import"./clickOutside.ba49a855.js";import"./CheckOutlined.1616189b.js";import"./useSortable.1eebfae0.js";import"./SettingOutlined.fcf5c9f8.js";import"./useExpose.9b24ca4e.js";import"./useForm.0c31c5a9.js";var p=o({components:{BasicTable:e},setup(){const e=n(null),{createMessage:o}=s();function c(){const i=a(e);if(!i)throw new Error("tableAction is null");return i}return{tableRef:e,api:f,columns:i(),changeLoading:function(){c().setLoading(!0),setTimeout((()=>{c().setLoading(!1)}),1e3)},changeColumns:function(){c().setColumns(t())},reloadTable:function(){c().setColumns(i()),c().reload({page:1})},getColumn:function(){o.info("请在控制台查看！")},getTableData:function(){o.info("请在控制台查看！")},getPagination:function(){o.info("请在控制台查看！")},setPaginationInfo:function(){c().setPagination({current:2}),c().reload()},getSelectRowList:function(){o.info("请在控制台查看！")},getSelectRowKeyList:function(){o.info("请在控制台查看！")},setSelectedRowKeyList:function(){c().setSelectedRowKeys(["0","1","2"])},clearSelect:function(){c().clearSelectedRowKeys()}}}});const j={class:"p-4"},C={class:"mb-4"},b=u("还原"),g=u("开启loading"),k=u("更改Columns"),x=u("获取Columns"),w=u("获取表格数据"),S=u("跳转到第2页"),R={class:"mb-4"},_=u("获取选中行"),L=u("获取选中行Key"),T=u("设置选中行"),h=u("清空选中行"),y=u("获取分页信息");p.render=function(e,i,t,o,n,s){const a=c("a-button"),u=c("BasicTable");return l(),r("div",j,[d("div",C,[d(a,{class:"mr-2",onClick:e.reloadTable},{default:m((()=>[b])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeLoading},{default:m((()=>[g])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.changeColumns},{default:m((()=>[k])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getColumn},{default:m((()=>[x])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getTableData},{default:m((()=>[w])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setPaginationInfo},{default:m((()=>[S])),_:1},8,["onClick"])]),d("div",R,[d(a,{class:"mr-2",onClick:e.getSelectRowList},{default:m((()=>[_])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:m((()=>[L])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:m((()=>[T])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.clearSelect},{default:m((()=>[h])),_:1},8,["onClick"]),d(a,{class:"mr-2",onClick:e.getPagination},{default:m((()=>[y])),_:1},8,["onClick"])]),d(u,{canResize:!1,title:"RefTable示例",titleHelpMessage:"使用Ref调用表格内方法",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])};export default p;