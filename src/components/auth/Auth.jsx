import React, { useState } from "react";
import { Link } from "react-router-dom";
import style from './style.module.scss';

export const Auth = () => {
    const [value, setValue] = useState('lala@lala.ru');
    return (
        <div className={style.auth}>
            <h2>Начало игры</h2>
            <input type="text" placeholder="почта" value={value} onChange={(e) => setValue(e.target.value)} />
            <Link to={'/game/3jkdfviu37dkjs837'}>
                <button>Начать</button>
            </Link>

            <Link to={'/game/3jkdfviu37dkjs837'}>
                <button>Присоединиться к игре</button>
            </Link>
        </div>
    )
}