import{j as a,a as d}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{c as i,l as g,A as h,m as b,n as v}from"./emotion-react.browser.esm-C438drVl.js";import{r as f}from"./index-Cu9bd8lq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js";const E=i`
  background-color: #10b2cc;
  color: white;
  border: none;
  padding: 6px 8px;
  margin-right: 3px;
  border-radius: 5px;
  cursor: pointer;
`,x=i`
  outline: none;
  border: none;
  border-bottom: 2px solid #0c8ca0;
  padding: 3px 6px;
`,c=({handleSearch:n,getValue:t,placeholder:u})=>{const[p,l]=f.useState("");return a(v,{className:"KUI-search-bar-search KUI-search-bar-root",children:d(b,{className:"KUI-search-bar-form",onSubmit:e=>{n&&n(e)},children:[a(g,{className:"KUI-search-bar-button",css:E,type:"submit",children:"Search"}),a(h,{className:"KUI-search-bar-input",css:x,onChange:e=>{t&&t(e.target.value),l(e.target.value)},value:p,placeholder:u})]})})};c.__docgenInfo={description:"",methods:[],displayName:"SearchBarKUI",props:{handleChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: ChangeEvent<HTMLInputElement>) => void",signature:{arguments:[{type:{name:"ChangeEvent",elements:[{name:"HTMLInputElement"}],raw:"ChangeEvent<HTMLInputElement>"},name:"e"}],return:{name:"void"}}},description:""},handleSearch:{required:!1,tsType:{name:"signature",type:"function",raw:"(e: FormEvent<HTMLFormElement>) => void",signature:{arguments:[{type:{name:"FormEvent",elements:[{name:"HTMLFormElement"}],raw:"FormEvent<HTMLFormElement>"},name:"e"}],return:{name:"void"}}},description:""},placeholder:{required:!1,tsType:{name:"string"},description:""},getValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:""}}};const F={title:"Molecule/SearchBar",component:c},r={args:{}};var s,o,m;r.parameters={...r.parameters,docs:{...(s=r.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(m=(o=r.parameters)==null?void 0:o.docs)==null?void 0:m.source}}};const K=["Default"];export{r as Default,K as __namedExportsOrder,F as default};
