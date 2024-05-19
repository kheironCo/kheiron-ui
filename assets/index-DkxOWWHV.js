import{a as r,j as n}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{k as m,c as o,d as i,b as a,e as c}from"./emotion-react.browser.esm-Bz_cX1OA.js";const p=m`
  from{
      max-height: 1px;
      opacity: 0;
  }
  to{
      max-height: 100vh;
      opacity: 1;
  }
`,l=o`
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
      animation: ${p} 2s ease;
    }
    > .KUI-dropdown-summary {
      .KUI-dropdown-summary-icon {
        transform: rotate(0deg);
      }
    }
  }
`,u=o`
  font-weight: bold;
  padding: 5px;
  cursor: pointer;
  overflow: hidden;
  display: flex;
  flex-direction: row;
`,y=o`
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
`,s=({icon:e,summary:t,children:d})=>r(c,{css:l,className:"KUI-dropdown",children:[r(i,{css:u,className:"KUI-dropdown-summary",children:[n(a,{css:y,className:"KUI-dropdown-summary-icon",children:e||"▼"}),t]}),n(a,{css:h,className:"KUI-dropdown-content",children:d})]});try{s.displayName="DropDownKUI",s.__docgenInfo={description:"",displayName:"DropDownKUI",props:{icon:{defaultValue:null,description:"",name:"icon",required:!1,type:{name:"Element"}},summary:{defaultValue:null,description:"",name:"summary",required:!0,type:{name:"Element"}}}}}catch{}export{s as D};
