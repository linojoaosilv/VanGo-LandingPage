import React from "react";
// import Header from "../../Components/Header/Header";
import "./PaginaPrincipal2.css"
import Footer from "../../Components/Footer/Footer";
import Topicos from "../../Components/Topicos/Topicos";
import { Link } from "react-scroll";
import LogoSite from '../../Img/Logo_Vango1.png';


function PaginaPrincipal2({texto}){

    const menuItems = [
        {
            id: 1,
            title: "seção4",
            itemMenu:"Por que usar VanGo?"
        },
                {
            id: 2,
            title: "seção6",
            itemMenu:"Sobre nós"
        }
      ];


    return(
        <>

        <header  class="header_site">
        <div id="div_header_geral">
            <div className="div_header">
            <nav>
                <div id="menuToggle">
                    <input type="checkbox" />
                    <span></span>
                    <span></span>
                    <span></span>
                    <ul id="menu">
                        {menuItems.map((menu) => (
                        <li>
                            <Link
                            to={menu.title}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            id="div-link"
                            >
                            {menu.itemMenu}
                            </Link>
                        </li>
                        ))}
                    </ul>
                </div> 
            </nav>
            <div class="div_logo">
                <img src={LogoSite} alt="logo_site" id="logo_site"/>
            </div>
            </div>
        </div>
        </header>

            <section class="seção2">
                <div class="div_secão2">
                    <h1>VanGo, sua melhor opção </h1>
                    <img src="https://www.gov.br/fnde/pt-br/assuntos/noticias/fnde-transferiu-r-91-milhoes-para-o-transporte-escolar-neste-mes-de-marco/WhatsAppImage20200827at17.37.462.jpeg/@@images/6efa9d53-d96b-49e6-8132-4dc16d2f5af9.jpeg" alt="." id="imagem_seçao2"/>
                </div>
            </section>

            <section className="seção3">
                <div className="div_texto_seção3">
                    <h1>Uma plataforma moderna</h1>
                    <p>Seu transporte escolar seguro, moderno e conectado: Descubra o aplicativo que transformará a forma como você e seus filhos viajam!</p>
                </div>
            </section>

            <section className="seção4">
                <h1>Por que usar VanGo?</h1>
                <div id="Caixa_topicos">
                    <Topicos texto="Segurança"/>
                    <Topicos texto="Facilidade"/>
                    <Topicos texto="Praticidade"/>
                    <Topicos texto="Inovação"/>
                </div>
            </section>

            <section class="seção5">
                <div class="div_secão5">
                    <h1>Na hora de viajar escolha VanGo! </h1>
                    <img src="https://img.nsctotal.com.br/wp-content/uploads/2022/10/van-transporte-escolar-1.jpg" alt="." id="imagem_seçao5"/>
                </div>
            </section>           

            <section class="seção6">
                    <h1>Sobre a nossa equipe</h1>
                    <p>O VanGo teve sua origem como um projeto de conclusão de curso apresentado pela turma de desenvolvimento de sistemas em 2023. O propósito fundamental do aplicativo é oferecer suporte tanto aos motoristas quanto aos clientes que fazem uso do serviço de transporte escolar.</p> 
                    <p>Em nossa aplicação, dispomos de diversas funcionalidades, como um chat em tempo real para aprimorar a comunicação, um sistema de verificação de faturas e uma variedade de outros serviços!</p>
            </section>



            <Footer/>
        </>
    )
}

export default PaginaPrincipal2;




