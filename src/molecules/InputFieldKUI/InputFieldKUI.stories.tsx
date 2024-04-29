import { ChangeEvent, useState } from 'react';
import { InputFieldKUI } from '../InputFieldKUI';



export default {
        component: InputFieldKUI,
  };
  
  let estado;
  export const Example = {
    args: {
      label: "Nombre",
      value: estado,
      placeHolder: "",
      handleChange: (e:ChangeEvent<HTMLInputElement>) =>{
        const [estado, setState] = useState("");
        setState(e.target.value)
      } 

  }

}