import React from 'react'
import getHeroColors from '../API/heroColors'
import classes from './UI/HeroItem.module.scss'

const HeroItem = ({ hero, heroInfo }) => {
    let heroColors = ["gray", "black"]
    let indexOfColor = 0

    heroColors = getHeroColors(hero)

    return (
        <div
            className={classes.hero__features + " " + classes.hero__animation}
            onClick={(e) => heroInfo(hero)}
            style={{ backgroundColor: `rgba(${heroColors[0]}, 1)`, outlineColor: `rgba(${heroColors[1]}, 1)` }}
        >
            <div className={classes.hero__content}>
                <div className={classes.hero__Ball}>
                    <div className={classes.hero__topBall}></div>
                    <div className={classes.hero__bottomBall}>
                        <div className={classes.hero__middleBall}></div>
                    </div>
                </div>
                <div className={classes.hero__id__container}>  <strong className={classes.hero__id}>{hero.id}</strong></div>
                <div className={classes.hero__image}>
                    <img alt={hero.name} src={hero.features.sprites.front_default} />
                </div>
                <div className={classes.hero__name} >
                    <strong className={classes.hero__name__table}
                        style={{ backgroundColor: `rgba(${heroColors[0]}, 0.7)` }}> {hero.name}  </strong>
                </div>

                <div className={classes.hero__types__container}>
                    <div className={classes.hero__types}>
                        {hero.features.types.map(types =>
                            <strong
                                className={classes.hero__type + " " + classes.hero__list__type}
                                key={types.slot}
                                style={{ background: `rgba(${heroColors[indexOfColor++]}, 1)` }}
                            >
                                {types.type.name}
                            </strong>
                        )}
                    </div>
                </div>
            </div>
        </div >
    )
}

export default HeroItem