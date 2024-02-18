import { useState } from "react";
import Hastaurante from "./assets/hashtaurante.webp";
import './App.css';
import { Navegacao } from "./Navegacao";
import { ItemCardapio } from "./ItemCardapio";
import { pratosPrincipais, sobremesas, bebidas } from "./cardapio";


export function App() {
  const pagesMenu = [pratosPrincipais, sobremesas, bebidas];
  const [pageSelecionada, atualizarPageSelecionada] = useState(0);
  
  return <>

         <img src={Hastaurante} alt="Restaurante em Mônaco." className="capa"/>    

         <Navegacao atualizarPageSelecionada={atualizarPageSelecionada} />

         <div className="menu">

            { pagesMenu[pageSelecionada].map(item => <ItemCardapio 
            nome={item.nome} 
            descricao={item.descricao} 
            preco={item.preco} 
            imagem={item.imagem}/>) }

         </div>

         </>
}