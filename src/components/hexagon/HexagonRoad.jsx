import React from "react";
import style from './style.module.scss';

export const HexagonRoad = ({place}) => {
    return (
        <div
            className={[style.locationRoad, style[`locationRoad__${place}`]].join(' ')}
        >
        </div>
    )
}