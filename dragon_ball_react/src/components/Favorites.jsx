import React from 'react'

export default function Favorites({fav}) {
    return (
        <div>
            {
                fav.map((character) => {
                    return (
                        <div key={character.id}>
                            <h3><p><strong>Nombre: </strong>{character.name}</p></h3>
                            <h3><p><strong>Ki: </strong>{character.ki}</p></h3>
                            <h3><p><strong>Raza: </strong> {character.race}</p></h3>
                            <img src={character.image} alt="" />
                        </div>
                    )
                })
            }
        </div>
    )
}