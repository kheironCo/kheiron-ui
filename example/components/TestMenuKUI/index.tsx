import { FaPen } from "react-icons/fa";
import { ModalKUI } from "../../../src";
import { IoMdSettings } from "react-icons/io";

const arregloItems = [{id: 1, icon: <FaPen />, text: "Texto 1"}, { id: 2, icon: <IoMdSettings/ >, text: "Texto 2"}, { id: 3, icon: <IoMdSettings/ >, text: "Texto 3"}]
export const TestMenuKUI = () => {
    
const handleClick = (id:number) =>{
    if(id == 1){
        console.log("click 1")
    }else if(id == 2){
        console.log("click 2")
        
    }else if(id == 3){
        console.log("click 3")
        
    }
}

    return (<ModalKUI marginLeft="300px" items={arregloItems} handleClick={handleClick}/>)
};