import { FaPen } from "react-icons/fa";
import { MenuKUI } from "../../../src";
import { IoMdSettings } from "react-icons/io";

export const TestMenuKUI = () => {
    function handleClick (){
        console.log("hola");
    }


    const arregloItems = [{ icon: <FaPen />, text: "Texto 1", onClick: handleClick}, {  icon: <IoMdSettings/ >, text: "Texto 2"}, {  icon: <IoMdSettings/ >, text: "Texto 3"}]
    return (
        <div>
            <MenuKUI marginLeft="180px" items={arregloItems}  />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident modi, nemo similique voluptatum blanditiis perferendis, ea accusantium doloremque atque debitis incidunt obcaecati quaerat neque eos quis, aut facere officia et!</p>

        </div>
    )
};