import{j as e,a as y}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{c as s,n as v,o as _,b as o,p as E,q as x}from"./emotion-react.browser.esm-Bz_cX1OA.js";import"./index-Cu9bd8lq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js";const q=s`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  height: 60px;
  border-bottom: 1px solid black;
`,N=s`
  display: flex;
`,b=s`
  display: flex;
  textdecoration: none;
  padding: 0 10px 0 10px;
  textalign: center;
`,i=({value:t,href:r,target:l})=>e(_,{className:"KUI-navbar-list",css:s(b),children:e(v,{target:l?"_blank":"",href:r,children:t})});try{i.displayName="AtomListComponent",i.__docgenInfo={description:"",displayName:"AtomListComponent",props:{value:{defaultValue:null,description:"",name:"value",required:!0,type:{name:"string | undefined"}},href:{defaultValue:null,description:"",name:"href",required:!1,type:{name:"string"}},target:{defaultValue:null,description:"",name:"target",required:!1,type:{name:"boolean"}}}}}catch{}const c=({leftElement:t,listItem:r,rightElement:l})=>e(x,{className:"KUI-navbar-root",children:y(o,{css:q,className:"KUI-navbar-container",children:[e(o,{className:"KUI-navbar-content-left",children:t}),e(E,{className:"KUI-navbar-ul",css:N,children:Array.isArray(r)?r.map((h,I)=>e(i,{...h},`KUI-navbar-item-${I}`)):e(i,{...r})}),e(o,{className:"KUI-navbar-content-right",children:l})]})});try{c.displayName="NavBarKUI",c.__docgenInfo={description:"",displayName:"NavBarKUI",props:{leftElement:{defaultValue:null,description:"",name:"leftElement",required:!1,type:{name:"Element"}},listItem:{defaultValue:null,description:"",name:"listItem",required:!0,type:{name:"ItemType | ItemType[]"}},rightElement:{defaultValue:null,description:"",name:"rightElement",required:!1,type:{name:"Element"}}}}}catch{}const L={component:c},a={args:{leftElement:e("strong",{children:"Izquierda"}),listItem:{value:"lista1",href:"direccion",target:!0},rightElement:e("i",{children:"Izquierda"})}},n={args:{leftElement:e("strong",{children:"Izquierda"}),listItem:[{value:"lista1",href:"direccion",target:!0},{value:"lista2",href:"direccion",target:!0},{value:"lista3",href:"direccion",target:!0}],rightElement:e("i",{children:"Izquierda"})}};var m,d,u;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    leftElement: <strong>Izquierda</strong>,
    listItem: {
      value: 'lista1',
      href: 'direccion',
      target: true
    },
    rightElement: <i>Izquierda</i>
  }
}`,...(u=(d=a.parameters)==null?void 0:d.docs)==null?void 0:u.source}}};var p,g,f;n.parameters={...n.parameters,docs:{...(p=n.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(f=(g=n.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};const V=["Example","Default"];export{n as Default,a as Example,V as __namedExportsOrder,L as default};
