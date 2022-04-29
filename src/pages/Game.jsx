import React, { useEffect, useState } from "react";
import style from '../components/game/style.module.scss';
import { Hexagon } from "../components/hexagon/Hexagon";
import { getMaps } from "../utils/maps";

export const Game = () => {
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        createMaps();
        console.log('maps', maps);
    }, []);

    const createMaps = async () => {
        const newMaps = await getMaps();
        setMaps(newMaps);
    }

    return (
        <div className={style.game}>

            <div className={style.playingField}>

                <div className={style.rows}>
                    {maps.map(row => (
                        <div className={style.row} key={row.row}>
                            {row.cols.map(hexagon => (
                                <Hexagon 
                                    img={hexagon?.card.img} 
                                    id={hexagon?.id}
                                    locationsCity={hexagon?.locationsCity}
                                    roads={hexagon?.roads}
                                />
                            ))}
                        </div>
                    ))}
                </div>

            </div>

            
        </div>
    )
}