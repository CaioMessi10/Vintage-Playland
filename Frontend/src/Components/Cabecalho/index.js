import React, { useContext, useState } from "react";
import {AutenticadoContextoo} from '../../Contexts/authContexts'
import { toast } from "react-toastify";

// *IMPORTAÇÕES DE ICONS* //
import { FaInstagram } from "react-icons/fa";
import { VscAccount } from "react-icons/vsc";
import { FaLocationDot } from "react-icons/fa6";
import { FaGear } from "react-icons/fa6";

export default function Cabecalho() {
  const [isMenuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => setMenuVisible(!isMenuVisible);
  const loginEntrada = useContext(AutenticadoContextoo)
 
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  async function dadosLogin(e){
      e.preventDefault()
      if(!email || !password){
          toast.warning('Preencha todos os campos')
          return
      }
      try{
         await loginEntrada(email, password)
      } catch (err){

      }
  }
  return (
    <div>
      <header>
        <div className="cabecalho">
          <div className="icon1" onClick={toggleMenu}>
            <VscAccount />
          </div>

          <div className="logo-head">
            <h1 className="titulo-vintage">Vintage Playland</h1>
          </div>
          <div className="icon3">
            <a href="https://www.instagram.com/senacsaopaulo/">
              <FaInstagram />
            </a>
            <a href="https://www.google.com.br/maps/place/Senac+Bauru/@-22.3207517,-49.0697708,18z/data=!4m6!3m5!1s0x94bf67bbd5354fe1:0x696e1315626228ba!8m2!3d-22.3207393!4d-49.0684619!16s%2Fg%2F1tg6967c?entry=ttu">
              <FaLocationDot />
            </a>
            <a href="#sobre-a-empresa">
              <FaGear />
            </a>
          </div>
        </div>
      </header>



      {/* Área de Login e Cadastro */}


      
      {isMenuVisible && (
        <div className="menu">
          <div className="login-form">
            <h2>Login</h2>
            <form onSubmit={dadosLogin}>
                <input
                    type="text"
                    placeholder='Digite o E-mail'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
 
                <input
                    type="password"
                    placeholder='Digite a Senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button>Enviar</button>
            </form>
          </div>

        </div>
      )}



      {/* Área Sobre Empresa */}


      <section
        id="sobre-a-empresa"
        style={{ marginTop: isMenuVisible ? "20px" : "0" }}
      >
        <div className="sobre-container">
          <h2>Sobre a Empresa</h2>
          <p>
            Na Vintage Playland, a paixão pelos jogos vai além do virtual. Cada
            compra é feita com a certeza de que você estará levando para casa
            uma experiência de qualidade, com preços acessíveis e promoções
            especiais. Prepare-se para reviver momentos inesquecíveis ou
            descobrir novos mundos — o jogo nunca para na Vintage Playland!
          </p>
          <p></p>
        </div>
      </section>
    </div>
  );
}
