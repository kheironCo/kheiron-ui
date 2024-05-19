import{j as a,a as s}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{c as e,b as t,j as o,l as d,m as c}from"./emotion-react.browser.esm-Bz_cX1OA.js";import"./index-CNsE2FKG.js";import{A as p}from"./index-CkbaGhzr.js";try{ButtonKUI.displayName="ButtonKUI",ButtonKUI.__docgenInfo={description:"",displayName:"ButtonKUI",props:{className:{defaultValue:null,description:"",name:"className",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"filled"},description:"",name:"variant",required:!1,type:{name:"enum",value:[{value:'"filled"'},{value:'"outlined"'}]}},palette:{defaultValue:{value:"primary"},description:"",name:"palette",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'}]}}}}}catch{}try{AvatarKUI.displayName="AvatarKUI",AvatarKUI.__docgenInfo={description:"",displayName:"AvatarKUI",props:{imgSrc:{defaultValue:{value:""},description:"",name:"imgSrc",required:!1,type:{name:"string"}},altText:{defaultValue:{value:""},description:"",name:"altText",required:!1,type:{name:"string"}}}}}catch{}const m=e`
  @import url('https://fonts.googleapis.com/css2?family=Blinker&display=swap');
`,u=e`
  @import url('https://fonts.googleapis.com/css2?family=Quicksand&display=swap');
`,f=e`
  display: flex;
  gap: 1rem;
  heigth: auto;
  width: fit-content;
  border: 1px solid #ccc;
  border-radius: 10px;
  padding: 0.8rem;
  justify-content: center;
  align-items: center;
`;e`
  height: 7rem;
  border-radius: 9999px;
`;const y=e`
  ${m};
  font-family: 'Blinker', sans-serif;
`,g=e`
  ${u};
  font-family: 'Quicksand', sans-serif;
`,l=({image:r="",head:i,body:n})=>a(t,{children:s(c,{css:f,className:"KUI-user-profile-card-root",children:[a(t,{children:a(p,{imgSrc:r,altText:i})}),s(t,{children:[a(o,{variant:"h4",css:y,className:"KUI-user-profile-card-head",children:i}),a(d,{css:g,className:"KUI-user-profile-card-body",children:n})]})]})});try{l.displayName="UserProfileCardKUI",l.__docgenInfo={description:"",displayName:"UserProfileCardKUI",props:{image:{defaultValue:{value:""},description:"",name:"image",required:!1,type:{name:"string"}},head:{defaultValue:null,description:"",name:"head",required:!0,type:{name:"string"}},body:{defaultValue:null,description:"",name:"body",required:!0,type:{name:"string"}}}}}catch{}export{l as U};
