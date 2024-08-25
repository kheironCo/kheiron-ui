import { FaPen } from "react-icons/fa";
import { MenuKUI } from "../../../src";
import { IoMdSettings } from "react-icons/io";

export const TestMenuKUI = () => {
    function handleClick1 (){
        console.log("Opcion 1");
    }
    function handleClick2 (){
        console.log("Opcion 2");
    }
    function handleClick3 (){
        console.log("Opcion 3");
    }


    const arregloItems = [{ icon: <FaPen />, text: "Texto 1", onClick: handleClick1}, {  icon: <IoMdSettings/ >, text: "Texto 2", onClick: handleClick2}, {  icon: <IoMdSettings/ >, text: "Texto 3", onClick: handleClick3}]
    return (
        <div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ut enim aspernatur maiores ratione, aut, molestias odit corporis eveniet error, vero eos! Minus quisquam consequatur fuga eius repellendus libero quae?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ut enim aspernatur maiores ratione, aut, molestias odit corporis eveniet error, vero eos! Minus quisquam consequatur fuga eius repellendus libero quae?</p>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid ut enim aspernatur maiores ratione, aut, molestias odit corporis eveniet error, vero eos! Minus quisquam consequatur fuga eius repellendus libero quae?</p>
            <MenuKUI marginLeft="200px" items={arregloItems}  />
            <MenuKUI marginLeft="500px" items={arregloItems}  />
            <MenuKUI marginLeft="800px" items={arregloItems}  />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident modi, nemo similique voluptatum blanditiis perferendis, ea accusantium doloremque atque debitis incidunt obcaecati quaerat neque eos quis, aut facere officia et!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident modi, nemo similique voluptatum blanditiis perferendis, ea accusantium doloremque atque debitis incidunt obcaecati quaerat neque eos quis, aut facere officia et!</p>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident modi, nemo similique voluptatum blanditiis perferendis, ea accusantium doloremque atque debitis incidunt obcaecati quaerat neque eos quis, aut facere officia et!</p>

        </div>
    )
};