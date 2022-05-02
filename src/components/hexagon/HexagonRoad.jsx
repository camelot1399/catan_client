import React, { useEffect, useRef } from "react";
import style from './style.module.scss';

export const HexagonRoad = ({place, road}) => {

    return (
        <div
            className={[style.locationRoad, style[`locationRoad__${place}`]].join(' ')}
            control-id={road.id}
        >
        </div>
    )
}