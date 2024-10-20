import React,{useState} from 'react';
import '../CSS/card.css';


const Card = ({imgSrc, imgAlt, titulo,descripcion}) => {

    const [contador, setContar] = useState(0);

    const aumentar = () => {
        setContar(contador + 1);
    };

    const disminuir = () => {
        contador > 0 && setContar(contador - 1);
    };

    return(
        <div className="contenedor_general">
            <div className="contenedor_img">
                <img src={imgSrc} alt={imgAlt}></img>
            </div>
            <div className="contenedor_texto">
                <h2>{titulo}</h2>
                <p>{descripcion}</p>
            </div>
            <div className="contenedor_botones">
                <button onClick={disminuir}> - </button>
                <div>{contador}</div>
                <button onClick={aumentar}> + </button>
            </div>
        </div>
    );
};

export default Card;