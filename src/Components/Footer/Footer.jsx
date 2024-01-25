import React from "react";
import './Footer.css';
import icone_VanGo from "../../Img/Logo_Vango1.png";


export default function Footer(){
    return(
        <div>   
            <footer>
                <div class="div_logo_rodape">
                    <img src={icone_VanGo} alt="logo_site" id="logo_site"/>
                </div>
                <div class="div_contatos">
                    <label>
                    ©2023 
                    </label>
                </div>
            </footer>
        </div>
    )
}