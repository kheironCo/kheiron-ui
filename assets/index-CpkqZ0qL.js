import{a as h,j as e}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{r as m}from"./index-Cu9bd8lq.js";import{c as t,A as p,a as u,b as k}from"./emotion-react.browser.esm-C438drVl.js";import{I as o}from"./index-B41TfyrL.js";import"./index-D7Ao0EVs.js";import"./index-DoPdq3Ec.js";import"./index-DckSb__0.js";import"./index-y-KoEC9x.js";const f=t`
  display: flex;

  & input + label path {
    transition: 0.3s;
  }
`,g=t`
  height: 0;
  width: 0;
  visibility: hidden;
`,y=t`
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
`,C=({checked:r=!1,getValue:s,icon:i,iconChecked:n,className:l})=>{const[a,d]=m.useState(r);return h(k,{css:f,className:"KUI-check-root",children:[e(p,{css:g,checked:a,onChange:c=>{s&&s(c.target.checked),d(c.target.checked)},type:"checkbox",id:"KUICheck",className:`KUI-check-input ${l||""}`}),e(u,{css:y,htmlFor:"KUICheck",className:"KUI-check-label",children:a?n||e(o,{checked:!0}):i||e(o,{})})]})};C.__docgenInfo={description:"",methods:[],displayName:"CheckKUI",props:{checked:{required:!1,tsType:{name:"boolean"},description:"",defaultValue:{value:"false",computed:!1}},getValue:{required:!1,tsType:{name:"signature",type:"function",raw:"(checked: boolean) => void",signature:{arguments:[{type:{name:"boolean"},name:"checked"}],return:{name:"void"}}},description:""},icon:{required:!1,tsType:{name:"ReactElement"},description:""},iconChecked:{required:!1,tsType:{name:"ReactElement"},description:""},className:{required:!1,tsType:{name:"string"},description:""}}};export{C};
