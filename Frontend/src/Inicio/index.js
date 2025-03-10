import React, { useState } from 'react';
import Modal from 'react-modal';

// Importação de imagens
import game1 from '../Inicio/img/tle last of us.jpg';
import game2 from '../Inicio/img/gtaV.jpg';
import game3 from '../Inicio/img/red dead.jpg';
import game4 from '../Inicio/img/ea25.jpg';
import game5 from '../Inicio/img/ark.jpg';
import game6 from '../Inicio/img/enigma.jpg';
import game7 from '../Inicio/img/Mouthwashing.jpg';
import game8 from '../Inicio/img/assassin.jpg';
import game9 from '../Inicio/img/dayz.jpg';
import game10 from '../Inicio/img/diablo.jpg';
import game11 from '../Inicio/img/godofwar.jpg';
import game12 from '../Inicio/img/naruto.jpg';
import game13 from '../Inicio/img/palword.jpg';
import game14 from '../Inicio/img/planetzoo.jpg';
import game15 from '../Inicio/img/wukong.jpg';
import game16 from '../Inicio/img/DetroitBecomeHuman.png';
import game17 from '../Inicio/img/onePiece.png';
import game19 from '../Inicio/img/thesims2.jpg';
import game20 from '../Inicio/img/MarvelsSpiderMan.jpg';

import adventurePackageImg from '../Inicio/img/witcher.cyber.PNG';
import sportsPackageImg from '../Inicio/img/nba.f1.PNG';
import familyPackageImg from '../Inicio/img/mine.lego.PNG';
import headsetImg from '../Inicio/img/fonegamer.jpg';
import pcImg from '../Inicio/img/pcgamer.jpg';
import keyboardImg from '../Inicio/img/teclado.jpg';
import mouseImg from '../Inicio/img/mouse.jpg';
import placaImg from '../Inicio/img/placadevideo.jpg'
import cadeiraImg from '../Inicio/img/cadeira.jpg'

// Carrossel
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Inicio = () => {
  const [cart, setCart] = useState([]); // Estado para o carrinho
  const [isModalOpen, setIsModalOpen] = useState(false); // Controle do estado do modal

  // Abrir o modal
  const openCartModal = () => {
    setIsModalOpen(true);
  };

  // Fechar o modal
  const closeCartModal = () => {
    setIsModalOpen(false);
  };

  // Adicionar ao carrinho
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Remover um item do carrinho
  const removeFromCart = (item) => {
    setCart(cart.filter((cartItem) => cartItem.nome !== item.nome));
  };

  // Exibir o número de itens no carrinho
  const handleCartClick = () => {
    openCartModal();
  };

  // Carrossel
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="home-container">
      <header className="hero-section">
        <h1>Explore o Mundo dos Jogos</h1>
        <p>Encontre seus jogos favoritos e mergulhe em novas aventuras.</p>
      </header>

      {/* Carrinho (com ícone e contagem de itens) */}
      <div className="cart-icon" onClick={handleCartClick}>
        <a href="#">🛒 Carrinho ({cart.length})</a>
      </div>

      {/* Modal do Carrinho */}
      <Modal isOpen={isModalOpen} onRequestClose={closeCartModal} contentLabel="Carrinho">
        <div className="cart-modal">
          <h2>Itens no Carrinho</h2>
          <ul>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <li key={index} className="cart-item">
                  <img src={item.img} alt={item.nome} className="cart-item-img" />
                  <h3>{item.nome} - <span className="price">{item.preco}</span></h3>
                  <button onClick={() => removeFromCart(item)}>Remover</button>
                </li>
              ))
            ) : (
              <p>Seu carrinho está Vazio 😔... (igual seu coração)</p>
            )}
          </ul>
          <button onClick={closeCartModal}>Fechar</button>
          {cart.length > 0 && (
            <div className="checkout-container">
              <button onClick={() => alert('Ainda em Manutenção favor Esperar...')}>Finalizar Compra</button>
            </div>
          )}
        </div>
      </Modal>

      {/* Jogos Populares - Carrossel */}
      <section className="jogos-section" id="jogos-populares">
        <h2>Jogos Populares</h2>
        <Slider {...settings}>
          {[ 
            { nome: 'The Last of Us', preco: 'R$ 249,00', img: game1 },
            { nome: 'GTA V', preco: 'R$ 99,00', img: game2 },
            { nome: 'Red Dead Redemption 2', preco: 'R$ 159,00', img: game3 },
            { nome: 'EA 25', preco: 'R$ 199,00', img: game4 },
            { nome: 'Ark: Survival Evolved', preco: 'R$ 126,00', img: game5 },
            { nome: 'Enigma do Medo', preco: 'R$ 69,00', img: game6 },
            { nome: 'Mouthwashing', preco: 'R$ 39,00', img: game7 },
            { nome: 'Assassin’s Creed', preco: 'R$ 199,00', img: game8 },
            { nome: 'DayZ', preco: 'R$ 179,00', img: game9 },
            { nome: 'Diablo IV', preco: 'R$ 299,00', img: game10 },
            { nome: 'God of War', preco: 'R$ 249,00', img: game11 },
            { nome: 'Naruto Storm', preco: 'R$ 179,00', img: game12 },
            { nome: 'Palworld', preco: 'R$ 89,00', img: game13 },
            { nome: 'Planet Zoo', preco: 'R$ 169,00', img: game14 },
            { nome: 'Wukong', preco: 'R$ 149,00', img: game15 },
          ].map((jogo, index) => (
            <div key={index} className="jogo-card">
              <div className="image-container">
                <img src={jogo.img} alt={jogo.nome} />
              </div>
              <div className="description-container">
                <h3>{jogo.nome}</h3>
                <p>{jogo.preco}</p>
                <button onClick={() => addToCart(jogo)}>Adicionar ao Carrinho</button>
              </div>
            </div>
          ))}
        </Slider>
      </section>

      {/* Jogos Recém Adicionados - Menor */}
      <section className="jogos-section" id="jogos-recem-adicionados">
        <h2>Jogos Recém Adicionados</h2>
        <div className="jogos-list">
          {[ 
            { nome: 'Detroit: Become Human', preco: 'R$ 199,00', img: game16 },
            { nome: 'One Piece: Pirate Warriors 4', preco: 'R$ 179,00', img: game17 },
            { nome: 'The Sims 2', preco: 'R$ 99,00', img: game19 },
            { nome: 'Marvel’s Spider-Man', preco: 'R$ 249,00', img: game20 },
          ].map((jogo, index) => (
            <div key={index} className="jogo-card-small">
              <div className="image-container-small">
                <img src={jogo.img} alt={jogo.nome} />
              </div>
              <div className="description-container-small">
                <h3>{jogo.nome}</h3>
                <p>{jogo.preco}</p>
                <button onClick={() => addToCart(jogo)}>Adicionar</button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Ofertas Especiais */}
      <section className="ofertas-section" id="ofertas-especiais">
        <h2>Ofertas Especiais</h2>
        <ul>
          {[ 
            { 
              nome: 'Pacote Aventura', 
              preco: 'R$ 256,05', 
              descricao: 'Inclui The Witcher 3 + Cyberpunk 2077', 
              img: adventurePackageImg 
            },
            { 
              nome: 'Pacote Esportivo', 
              preco: 'R$ 249,00', 
              descricao: 'NBA 2K24 + F1 ', 
              img: sportsPackageImg 
            },
            { 
              nome: 'Pacote Família', 
              preco: 'R$ 357,99', 
              descricao: 'Minecraft + Lego Star Wars', 
              img: familyPackageImg 
            },
          ].map((pacote, index) => (
            <li key={index} className="pacote-card">
              <img src={pacote.img} alt={pacote.nome} className="pacote-img" />
              <h3>{pacote.nome} - <span className="price">{pacote.preco}</span></h3>
              <p>{pacote.descricao}</p>
              <button onClick={() => addToCart(pacote)}>Adicionar ao Carrinho</button>
            </li>
          ))}
        </ul>
      </section>

      {/* Pacotes Especiais - Acessórios Gamer */}
      <section className="pacotes-especiais-section" id="pacotes">
        <h2>Pacotes Especiais - Acessórios Gamer</h2>
        <ul>
          {[ 
            { 
              nome: 'Fone Gamer', 
              preco: 'R$ 159,00', 
              descricao: 'Fone de ouvido gamer com som surround 7.1.',
              img: headsetImg 
            },
            { 
              nome: 'PC Gamer Completo', 
              preco: 'R$ 3569,00', 
              descricao: 'PC gamer com placa de vídeo RTX 3060 e 16GB de RAM.',
              img: pcImg 
            },
            { 
              nome: 'Teclado Mecânico', 
              preco: 'R$ 248,90', 
              descricao: 'Teclado mecânico RGB com switches de alta precisão.',
              img: keyboardImg 
            },
            { 
              nome: 'Mouse Gamer', 
              preco: 'R$ 199,00', 
              descricao: 'Mouse gamer com 16000 DPI e design ergonômico.',
              img: mouseImg 
            },
            { 
              nome: 'Placa de Video', 
              preco: 'R$ 599,00', 
              descricao: 'Placa De Video Rage-x Amd Radeon Rx580 Gddr5 8gb/256 Bits.',
              img: placaImg 
            },
            { 
              nome: 'Cadeira Gamer', 
              preco: 'R$ 729,90', 
              descricao: 'GAMING Hailstorm CG450, Preta e Branca, Com Almofadas, Reclinável, Descanso de Braço 2D - KGCG450PTBR',
              img: cadeiraImg 
            },
          ].map((pacote, index) => (
            <li key={index} className="pacote-card">
              <img src={pacote.img} alt={pacote.nome} className="pacote-img" />
              <h3>{pacote.nome} - <span className="price">{pacote.preco}</span></h3>
              <p>{pacote.descricao}</p>
              <button onClick={() => addToCart(pacote)}>Adicionar ao Carrinho</button>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Inicio;
