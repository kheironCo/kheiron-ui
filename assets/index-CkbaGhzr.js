import{j as t,F as l}from"./emotion-react-jsx-runtime.browser.esm-CLGpUU4U.js";import{c as r,f as m,b as d}from"./emotion-react.browser.esm-Bz_cX1OA.js";import{r as i}from"./index-Cu9bd8lq.js";const p=r`
  @import url('https://fonts.googleapis.com/css2?family=Blinker&display=swap');
`,f=r`
  height: 7rem;
  border-radius: 9999px;
`,g=r`
  ${p};
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
`,n=({imgSrc:e="",altText:s=""})=>{const[c,o]=i.useState(!1);return i.useEffect(()=>{const a=new Image;a.src=e,a.onload=()=>o(!0),a.onerror=()=>o(!1)},[e]),t(l,{children:c?t(m,{css:f,className:"KUI-avatar-root",src:e,alt:s}):t(d,{css:g,className:"KUI-avatar-alt",children:s.charAt(0)})})};try{n.displayName="AvatarKUI",n.__docgenInfo={description:"",displayName:"AvatarKUI",props:{imgSrc:{defaultValue:{value:""},description:"",name:"imgSrc",required:!1,type:{name:"string"}},altText:{defaultValue:{value:""},description:"",name:"altText",required:!1,type:{name:"string"}}}}}catch{}export{n as A};
