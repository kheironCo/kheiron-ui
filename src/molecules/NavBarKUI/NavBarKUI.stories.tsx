import { NavBarKUI } from "./index";

export default {
        component: NavBarKUI,
  };
  
export const Default = {
    args: {
        leftElement: <strong>Izquierda</strong>,
        listItem: [{value:"lista1", href: "direccion", target: true}, {value:"lista2", href: "direccion", target: true}, {value:"lista3", href: "direccion", target: true}],
        rightElement: <i>Izquierda</i>,
    },
  };