import React from 'react'
import style from './style.module.css'

const HelpProps = (props) => {

    return (
        <div>
            <section className={style.helpBox}>
                <div className={style.cardBox}>
                    <div className={style.card}>
                        <img src={props.CardImage} alt=""/>
                        <div className={style.cardBody}>
                            <p>{props.Cardtext}</p>
                            <label>
                                <span><small>Goals</small> {props.Goals}</span>
                                <span><small>Raised</small> {props.Raised}</span>
                                <span><small>To Go </small>{props.Togo}</span>
                            </label>
                            <button><a href="">{props.Button}</a></button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
export default HelpProps;