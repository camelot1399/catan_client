import React from "react";
import style from './style.module.scss';

export const HexagonLocationCity = ({place}) => {
    return (
        <div
            className={[style.locationCity, style[`locationCity__${place}`]].join(' ')}
        >
        </div>
    )
}