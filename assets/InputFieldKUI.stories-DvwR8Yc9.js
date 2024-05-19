import{a as c,j as t}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{c as l,a as u,A as m,b as f}from"./emotion-react.browser.esm-Bz_cX1OA.js";import"./index-Cu9bd8lq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js";const b=l`
  display: flex;
  flexdirection: column;
`,g=l`
  color: grey;
  margin: 5px;
`,I=l`
  width: 200px;
  border: none;
  margin: 5px;
  border-bottom: 2px solid grey;

  &:focus {
    outline: none;
    border: none;
    border-bottom: solid #33c4b5 2px;
  }
`,a=({label:n,value:i,placeHolder:d,handleChange:p})=>c(f,{className:"KUI-inputfield-root",css:b,children:[t(u,{htmlFor:"toinput",className:"KUI-inputfield-label",css:g,children:n}),t(m,{className:"KUI-inputfield-input",css:I,placeholder:d,value:i,onChange:p,id:"toinput"})]});try{a.displayName="InputFieldKUI",a.__docgenInfo={description:"",displayName:"InputFieldKUI",props:{value:{defaultValue:null,description:"",name:"value",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"",name:"label",required:!1,type:{name:"string"}},placeHolder:{defaultValue:null,description:"",name:"placeHolder",required:!1,type:{name:"string"}},handleChange:{defaultValue:null,description:"",name:"handleChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}}}}}catch{}const K={component:a};let x;const e={args:{label:"Nombre",value:x}};var r,o,s;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    label: 'Nombre',
    value: estado
  }
}`,...(s=(o=e.parameters)==null?void 0:o.docs)==null?void 0:s.source}}};const N=["Example"];export{e as Example,N as __namedExportsOrder,K as default};
