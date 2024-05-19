import{a as m,j as e}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{r as u}from"./index-Cu9bd8lq.js";import{c as a,A as p,a as k,b as f}from"./emotion-react.browser.esm-Bz_cX1OA.js";import"./index-DD2vyTJL.js";import{I as r}from"./index-CAhcraO4.js";const y=a`
  display: flex;

  & input + label path {
    transition: 0.3s;
  }
`,C=a`
  height: 0;
  width: 0;
  visibility: hidden;
`,g=a`
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 0.25rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  position: relative;
  transition: 0.3s;

  :hover {
    background-color: #00000005;
    transition: 0.5s;
  }
`,o=({checked:t=!1,getValue:c,icon:i,iconChecked:l,className:d})=>{const[n,h]=u.useState(t);return m(f,{css:y,className:"KUI-check-root",children:[e(p,{css:C,checked:n,onChange:s=>{c&&c(s.target.checked),h(s.target.checked)},type:"checkbox",id:"KUICheck",className:`KUI-check-input ${d||""}`}),e(k,{css:g,htmlFor:"KUICheck",className:"KUI-check-label",children:n?l||e(r,{checked:!0}):i||e(r,{})})]})};try{o.displayName="CheckKUI",o.__docgenInfo={description:"",displayName:"CheckKUI",props:{checked:{defaultValue:{value:"false"},description:"",name:"checked",required:!1,type:{name:"boolean"}},getValue:{defaultValue:null,description:"",name:"getValue",required:!1,type:{name:"((checked: boolean) => void)"}},icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},iconChecked:{defaultValue:null,description:"",name:"iconChecked",required:!1,type:{name:"ReactElement<any, string | JSXElementConstructor<any>>"}},className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}}}}}catch{}export{o as C};
