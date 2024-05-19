import{j as e,a as y}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{c as a,o as I,p as q,b as o,q as b,r as x}from"./emotion-react.browser.esm-C438drVl.js";import"./index-Cu9bd8lq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js";const E=a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid black;
`,A=a`
  display: flex;
`,N=a`
  display: flex;
  textdecoration: none;
  padding: 0 10px 0 10px;
  textalign: center;
`,l=({value:i,href:t,target:s})=>e(q,{className:"KUI-navbar-list",css:a(N),children:e(I,{target:s?"_blank":"",href:t,children:i})});l.__docgenInfo={description:"",methods:[],displayName:"AtomListComponent",props:{value:{required:!0,tsType:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}]},description:""},href:{required:!1,tsType:{name:"string"},description:""},target:{required:!1,tsType:{name:"boolean"},description:""}}};const f=({leftElement:i,listItem:t,rightElement:s})=>e(x,{className:"KUI-navbar-root",children:y(o,{css:E,className:"KUI-navbar-container",children:[e(o,{className:"KUI-navbar-content-left",children:i}),e(b,{className:"KUI-navbar-ul",css:A,children:Array.isArray(t)?t.map((h,v)=>e(l,{...h},`KUI-navbar-item-${v}`)):e(l,{...t})}),e(o,{className:"KUI-navbar-content-right",children:s})]})});f.__docgenInfo={description:"",methods:[],displayName:"NavBarKUI",props:{leftElement:{required:!1,tsType:{name:"React.JSX.Element"},description:""},listItem:{required:!0,tsType:{name:"union",raw:"ItemType[] | ItemType",elements:[{name:"Array",elements:[{name:"signature",type:"object",raw:`{
  value: string | undefined;
  href?: string;
  target?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"target",value:{name:"boolean",required:!1}}]}}],raw:"ItemType[]"},{name:"signature",type:"object",raw:`{
  value: string | undefined;
  href?: string;
  target?: boolean;
}`,signature:{properties:[{key:"value",value:{name:"union",raw:"string | undefined",elements:[{name:"string"},{name:"undefined"}],required:!0}},{key:"href",value:{name:"string",required:!1}},{key:"target",value:{name:"boolean",required:!1}}]}}]},description:""},rightElement:{required:!1,tsType:{name:"React.JSX.Element"},description:""}}};const w={component:f},r={args:{leftElement:e("strong",{children:"Izquierda"}),listItem:{value:"lista1",href:"direccion",target:!0},rightElement:e("i",{children:"Izquierda"})}},n={args:{leftElement:e("strong",{children:"Izquierda"}),listItem:[{value:"lista1",href:"direccion",target:!0},{value:"lista2",href:"direccion",target:!0},{value:"lista3",href:"direccion",target:!0}],rightElement:e("i",{children:"Izquierda"})}};var m,d,c;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    leftElement: <strong>Izquierda</strong>,
    listItem: {
      value: 'lista1',
      href: 'direccion',
      target: true
    },
    rightElement: <i>Izquierda</i>
  }
}`,...(c=(d=r.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var u,p,g;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    leftElement: <strong>Izquierda</strong>,
    listItem: [{
      value: 'lista1',
      href: 'direccion',
      target: true
    }, {
      value: 'lista2',
      href: 'direccion',
      target: true
    }, {
      value: 'lista3',
      href: 'direccion',
      target: true
    }],
    rightElement: <i>Izquierda</i>
  }
}`,...(g=(p=n.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};const z=["Example","Default"];export{n as Default,r as Example,z as __namedExportsOrder,w as default};
