import{j as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{c as s,j as c,b as m}from"./emotion-react.browser.esm-C438drVl.js";import{r as i}from"./index-Cu9bd8lq.js";const d=s`
  @import url('https://fonts.googleapis.com/css2?family=Blinker&display=swap');
`,f=s`
  height: 7rem;
  border-radius: 9999px;
`,p=s`
  ${d};
  font-family: 'Blinker', sans-serif;
  display: flex;
  height: 7rem;
  width: 7rem;
  border-radius: 9999px;
  background-color: magenta;
  color: white;
  font-size: 4rem;
  font-weight: bold;
  justify-content: center;
  align-items: center;
`,u=({imgSrc:e="",altText:r=""})=>{const[n,o]=i.useState(!1);return i.useEffect(()=>{const a=new Image;a.src=e,a.onload=()=>o(!0),a.onerror=()=>o(!1)},[e]),t(l,{children:n?t(c,{css:f,className:"KUI-avatar-root",src:e,alt:r}):t(m,{css:p,className:"KUI-avatar-alt",children:r.charAt(0)})})};u.__docgenInfo={description:"",methods:[],displayName:"AvatarKUI",props:{imgSrc:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}},altText:{required:!1,tsType:{name:"string"},description:"",defaultValue:{value:"''",computed:!1}}}};export{u as A};
