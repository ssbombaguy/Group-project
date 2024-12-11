
import classes from "../../modules/Home.module.scss";

import {useState} from "react";
const Home = () => {
    const ClickHandler =() =>{

    }
    return (

        <div className={classes["main-wrapper"]}>
            <div>
                <div className={classes}>
                    <h2>SO, YOU WANT TO TRAVEL TO</h2>
                </div>
                <div className={classes["header"]}>
                    <h1>SPACE</h1>
                </div>
                <div className={classes["text-wrapper"]}>
                    <p>Let’s face it; if you want to go to space, you might as well genuinely go to
                        outer space and not hover kind of on the edge of it. Well sit back,
                        and relax because we’ll give you a truly out of this world experience!</p>
                </div>
            </div>
            <div className={classes["btn-wrapper"]}>
                <button className={classes["explore-btn"]} onClick={ClickHandler}>EXPLORE</button>

            </div>

        </div>
    )
}
export default Home