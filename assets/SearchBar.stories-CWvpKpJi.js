import{j as t,a as m}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{c as i,g as h,A as g,h as b,i as f}from"./emotion-react.browser.esm-Bz_cX1OA.js";import{r as _}from"./index-Cu9bd8lq.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-Bcg3o4Lk.js";const S=i`
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
`,o=({handleSearch:r,getValue:n,placeholder:d})=>{const[u,p]=_.useState("");return t(f,{className:"KUI-search-bar-search KUI-search-bar-root",children:m(b,{className:"KUI-search-bar-form",onSubmit:e=>{r&&r(e)},children:[t(h,{className:"KUI-search-bar-button",css:S,type:"submit",children:"Search"}),t(g,{className:"KUI-search-bar-input",css:x,onChange:e=>{n&&n(e.target.value),p(e.target.value)},value:u,placeholder:d})]})})};try{o.displayName="SearchBarKUI",o.__docgenInfo={description:"",displayName:"SearchBarKUI",props:{handleChange:{defaultValue:null,description:"",name:"handleChange",required:!1,type:{name:"((e: ChangeEvent<HTMLInputElement>) => void)"}},handleSearch:{defaultValue:null,description:"",name:"handleSearch",required:!1,type:{name:"((e: FormEvent<HTMLFormElement>) => void)"}},placeholder:{defaultValue:null,description:"",name:"placeholder",required:!1,type:{name:"string"}},getValue:{defaultValue:null,description:"",name:"getValue",required:!1,type:{name:"((value: string) => void)"}}}}}catch{}const C={title:"Molecule/SearchBar",component:o},a={args:{}};var s,c,l;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {}
}`,...(l=(c=a.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const E=["Default"];export{a as Default,E as __namedExportsOrder,C as default};
