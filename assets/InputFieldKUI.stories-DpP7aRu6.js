import{a as m,j as t}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{c as n,a as c,A as u,b as g}from"./emotion-react.browser.esm-C438drVl.js";import"./index-Cu9bd8lq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js";const b=n`
  display: flex;
  flexdirection: column;
`,f=n`
  color: grey;
  margin: 5px;
`,I=n`
  width: 200px;
  border: none;
  margin: 5px;
  border-bottom: 2px solid grey;

  &:focus {
    outline: none;
    border: none;
    border-bottom: solid #33c4b5 2px;
  }
`,o=({label:i,value:l,placeHolder:p,handleChange:d})=>m(g,{className:"KUI-inputfield-root",css:b,children:[t(c,{htmlFor:"toinput",className:"KUI-inputfield-label",css:f,children:i}),t(u,{className:"KUI-inputfield-input",css:I,placeholder:p,value:l,onChange:d,id:"toinput"})]});o.__docgenInfo={description:"",methods:[],displayName:"InputFieldKUI",props:{value:{required:!1,tsType:{name:"string"},description:""},label:{required:!1,tsType:{name:"string"},description:""},placeHolder:{required:!1,tsType:{name:"string"},description:""},handleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""}}};const T={component:o};let x;const e={args:{label:"Nombre",value:x}};var s,r,a;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    value: estado
  }
}`,...(a=(r=e.parameters)==null?void 0:r.docs)==null?void 0:a.source}}};const K=["Example"];export{e as Example,K as __namedExportsOrder,T as default};
