import React from 'react';
import Card from './card';
import playstation1Img from '../RECURSOS/playstation1.png';
import playstation2Img from '../RECURSOS/playstation2.webp';
import playstation3Img from '../RECURSOS/playstation3.jpg';
import '../CSS/cards.css';


const Cards =() => {
    return(
        <div className='Cards'>
            <Card imgSrc={playstation1Img} imgAlt='PlayStation' titulo='PlayStation' descripcion='Pureisutēshon, oficialmente abreviada como PS o PSone) es la primera videoconsola de sobremesa descontinuada producida por Sony Computer Entertainment. Fue lanzado en Japón el 3 de diciembre de 1994, en América del Norte el 9 de septiembre de 1995, en Europa el 29 de septiembre de 1995 y en Australia el 15 de noviembre de 1995. Como consola de quinta generación, PlayStation compitió principalmente con Nintendo 64 y el Sega Saturn.'/>
            <Card imgSrc={playstation2Img} imgAlt='PlayStation 2' titulo='PlayStation 2' descripcion='Pureisutēshon Tsu, oficialmente abreviada como PS2) es la segunda videoconsola de sobremesa producida por Sony Computer Entertainment. Fue la tercera consola de Sony en ser diseñada por el japonés Ken Kutaragi, además de ser la sucesora de la PlayStation. Compitió con Dreamcast, GameCube y la primera Xbox.'/>
            <Card imgSrc={playstation3Img} imgAlt='PlayStation 3' titulo='PlayStation 3' descripcion='Pureisutēshon Surī?, oficialmente abreviada como PS3)4​ es la tercera videoconsola de sobremesa descontinuada producida por Sony Computer Entertainment. Fue la quinta y última consola de Sony en ser diseñada por Ken Kutaragi y formó parte de las videoconsolas de séptima generación y sus competidores fueron la Xbox 360 de Microsoft y la Wii de Nintendo.'/>
        </div>
    )
}

export default Cards;