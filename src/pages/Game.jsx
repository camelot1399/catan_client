import React, { useEffect, useState } from "react";
import Draggable, {DraggableCore} from 'react-draggable';
import { City } from "../components/city/City";
import style from '../components/game/style.module.scss';
import { Hexagon } from "../components/hexagon/Hexagon";
import { Road } from "../components/road/Road";
import { Village } from "../components/village/Village";
import { getMaps } from "../utils/maps";

export const Game = () => {
    const [maps, setMaps] = useState([]);

    useEffect(() => {
        createMaps();
    }, []);

    const createMaps = async () => {
        const newMaps = await getMaps();
        setMaps(newMaps);
    }

    return (
        <div className={style.game}>

            <div className={style.playingField}>

            <Draggable
                // onDrag={e => console.log(e)}
                onStop={e => console.log(e.path[0])}
            >
                
                <div ><Road /></div>
            </Draggable>

            <Draggable 
                onStop={e => console.log(e)}
                disabled={true}
            >
                <div>
                    <Village />
                </div>
            </Draggable>
           

            <Draggable onStop={e => console.log(e)}>
                <div>
                    <City />
                </div>
            </Draggable>

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