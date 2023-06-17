import { useEffect, useState } from 'react';
import Chip from "../chip/chip"
import './card-collapse.scss'

function CardCollapse ({cardTitle, chipArray, cardDescription, dataActive, children}) {
    let [active, setActive] = useState(false)

    function handleSectionClick() {
        active ? setActive(false) : setActive(true)
    }

    useEffect(() => {
        dataActive ? setActive(true) : setActive(false)
    }, [dataActive]);

    return (
        <div className="card-collapse" data-active={active}>
            <div id={cardTitle} className="card_header-wrapper">
                    <div className='card_title-wrapper' onClick={handleSectionClick}>
                        <h2>{cardTitle}</h2>
                        <svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="M480 711 240 471l43-43 197 198 197-197 43 43-240 239Z"/></svg>
                    </div>
                    <div className='card_chip-wrapper'>
                        {
                            chipArray.map((chip) => {
                                return <Chip content={chip} />
                            })
                        }
                    </div>
                    <p>{cardDescription}</p>
            </div>
            <div className="card_content" data-collapse={!active}>
                {children}
            </div>
        </div>
    );
}

export default CardCollapse;