import React from "react";
import { HexagonLocationCity } from "./HexagonLocationCity";
import { HexagonRoad } from "./HexagonRoad";
import style from './style.module.scss';

export const Hexagon = ({img, id, locationsCity, roads}) => {

    return (
        <div className={style.hexagon__wrapper}>
            <div 
                key={id}
                className={style.hexagon} 
                onClick={e => console.log(e.target)}
            >
                <img className={style.hexagon__img} src={img} alt="" />
            </div>

            {locationsCity && locationsCity.map(ls => (
                <HexagonLocationCity 
                    key={ls.id} 
                    place={ls.place}
                />
            ))}

            {roads && roads.map(road => (
                <HexagonRoad 
                    key={road.id}
                    place={road.place}
                    road={road}
                />
            ))}
        </div>
    )
}