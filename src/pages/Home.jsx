import React from "react";
import { Auth } from "../components/auth/Auth";
import style from '../components/home/style.module.scss';

export const Home = () => {
    return (
        <div className={style.home}>
            <div>
                Картинка катана
            </div>

            <Auth />
        </div>
    )
}