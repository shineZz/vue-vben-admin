import{_ as e}from"./index.2e3c5ad0.js";import{getBasicColumns as t,getBasicShortColumns as i}from"./tableData.7aa0192c.js";import{d as o,h as s,i as n,o as a,j as c,k as l,w as r,n as d}from"./index.a0c9d414.js";import{d as m}from"./table.ea267a81.js";import{u}from"./useTable.d2a04af0.js";import"./index.47fbc714.js";import"./index.60510fc2.js";import"./index.38c8e961.js";import"./index.fdcc7c21.js";import"./index.925fe361.js";import"./index.eae08916.js";import"./index.61099513.js";import"./index.9284d4e4.js";import"./useAttrs.d4af3e38.js";import"./index.8d91dadc.js";import"./index.f4c035d6.js";import"./uuid.467c825e.js";import"./index.d469528e.js";import"./index.4b5d41a1.js";import"./useTimeout.81dc2a45.js";import"./useWindowSizeFn.3ffc3951.js";import"./index.803cad5c.js";import"./index.34eb3473.js";import"./domUtils.dc6d2a29.js";import"./RightOutlined.c999941e.js";import"./useScrollTo.ffacd2e0.js";import"./animation.d0036cd9.js";import"./FullscreenOutlined.a24d6272.js";import"./index.a45b2b74.js";import"./index.99820032.js";import"./index.673364b0.js";import"./index.643da10c.js";import"./download.d1b8f6fd.js";import"./index.27bb0464.js";import"./clickOutside.ba49a855.js";import"./CheckOutlined.1616189b.js";import"./useSortable.1eebfae0.js";import"./SettingOutlined.fcf5c9f8.js";import"./useExpose.9b24ca4e.js";import"./useForm.0c31c5a9.js";var f=o({components:{BasicTable:e},setup(){const{createMessage:e}=s(),[o,{setLoading:n,setColumns:a,getColumns:c,getDataSource:l,reload:r,getPaginationRef:d,setPagination:f,getSelectRows:p,getSelectRowKeys:j,setSelectedRowKeys:g,clearSelectedRowKeys:b}]=u({canResize:!0,title:"useTable示例",titleHelpMessage:"使用useTable调用表格内方法",api:m,columns:t(),rowKey:"id",showTableSetting:!0,rowSelection:{type:"checkbox"}});return{registerTable:o,changeLoading:function(){n(!0),setTimeout((()=>{n(!1)}),1e3)},changeColumns:function(){a(i())},reloadTable:function(){a(t()),r({page:1})},getColumn:function(){e.info("请在控制台查看！")},getTableData:function(){e.info("请在控制台查看！")},getPagination:function(){e.info("请在控制台查看！")},setPaginationInfo:function(){f({current:2}),r()},getSelectRowList:function(){e.info("请在控制台查看！")},getSelectRowKeyList:function(){e.info("请在控制台查看！")},setSelectedRowKeyList:function(){g(["0","1","2"])},clearSelect:function(){b()}}}});const p={class:"p-4"},j={class:"mb-4"},g=d("还原"),b=d("开启loading"),C=d("更改Columns"),k=d("获取Columns"),x=d("获取表格数据"),S=d("跳转到第2页"),w={class:"mb-4"},R=d("获取选中行"),T=d("获取选中行Key"),_=d("设置选中行"),y=d("清空选中行"),h=d("获取分页信息");f.render=function(e,t,i,o,s,d){const m=n("a-button"),u=n("BasicTable");return a(),c("div",p,[l("div",j,[l(m,{class:"mr-2",onClick:e.reloadTable},{default:r((()=>[g])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeLoading},{default:r((()=>[b])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.changeColumns},{default:r((()=>[C])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getColumn},{default:r((()=>[k])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getTableData},{default:r((()=>[x])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setPaginationInfo},{default:r((()=>[S])),_:1},8,["onClick"])]),l("div",w,[l(m,{class:"mr-2",onClick:e.getSelectRowList},{default:r((()=>[R])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:r((()=>[T])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:r((()=>[_])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.clearSelect},{default:r((()=>[y])),_:1},8,["onClick"]),l(m,{class:"mr-2",onClick:e.getPagination},{default:r((()=>[h])),_:1},8,["onClick"])]),l(u,{onRegister:e.registerTable},null,8,["onRegister"])])};export default f;