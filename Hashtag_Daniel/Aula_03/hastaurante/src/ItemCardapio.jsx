import { enroladinhoMignon } from "./cardapio";

export function ItemCardapio(props) {
    return <div className="container-item-cardapio">
        <div>
            <h2>{props.nome}</h2>
            <span>{props.preco}</span>
            <p>{props.descricao}</p>
        </div>
        <img src={props.imagem} alt="Enroladinho de Mignon" />
    </div>
}