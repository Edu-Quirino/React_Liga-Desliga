import React from "react";
import LedVerde from './_img/led-verde.png'
import LedVermelho from './_img/led-vermelho.png'

export default function Led(props) {

    return (
        <div className="container">
            <h1>Curso de React.js</h1>
            <img className="img" src={props.ligado ? LedVerde : LedVermelho} />
            <br />
            <button className="botao" onClick={() => props.setLigado(!props.ligado)} >{props.ligado ? 'Desligar' : 'Ligar'}</button>
        </div>
    )
}