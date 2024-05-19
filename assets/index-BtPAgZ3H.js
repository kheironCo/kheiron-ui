import{a as e,j as r}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{k as d,c as o,e as c,b as n,f as i}from"./emotion-react.browser.esm-C438drVl.js";const m=d`
  from{
      max-height: 1px;
      opacity: 0;
  }
  to{
      max-height: 100vh;
      opacity: 1;
  }
`,p=o`
  width: auto;
  max-width: 400px;
  border: 1px solid #ccc;
  border-radius: 4px;
  transition: background-color 0.3s ease;
  &[open] {
    background-color: #f7f7f7;
  }
  &summary::marker {
    content: '';
  }

  &summary::marker {
    content: '';
  }
  &[open] {
    > .KUI-dropdown-content {
      display: block;
      animation: ${m} 2s ease;
    }
    > .KUI-dropdown-summary {
      .KUI-dropdown-summary-icon {
        transform: rotate(0deg);
      }
    }
  }
`,l=o`
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`,u=o`
  min-width: 1rem;
  min-height: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  transform: rotate(-90deg);
  transition: all 0.2s ease-out;
`,h=o`
  max-height: 100vh;
  padding: 0.5rem 1rem;
  display: none;
  overflow: hidden;
  background-color: blanchedalmond;
`,y=({icon:a,summary:s,children:t})=>e(i,{css:p,className:"KUI-dropdown",children:[e(c,{css:l,className:"KUI-dropdown-summary",children:[r(n,{css:u,className:"KUI-dropdown-summary-icon",children:a||"▼"}),s]}),r(n,{css:h,className:"KUI-dropdown-content",children:t})]});y.__docgenInfo={description:"",methods:[],displayName:"DropDownKUI",props:{icon:{required:!1,tsType:{name:"React.JSX.Element"},description:""},summary:{required:!0,tsType:{name:"React.JSX.Element"},description:""},children:{required:!0,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:""}}};export{y as D};
