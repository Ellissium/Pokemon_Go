import getHeroColors from '../../API/heroColors'
import classes from './HeroFeatures.module.scss'

const HeroFeatures = ({ heroFeatures }) => {
    let heroColors = ["gray", "black"]
    heroColors = getHeroColors(heroFeatures)

    return (
        <div
            className={classes.hero__features}
        // style={{ backgroundColor: heroColors[0], borderColor: heroColors[1] }}
        >
            <div className={classes.features__content}>
                <div className={classes.features__content__left}
                    style={{ backgroundColor: `rgba(${heroColors[0]}, 1)` }}>
                    <div className={classes.hero__id__container}>
                        <div className={classes.hero__id}><div className={classes.hero__id__text}>{heroFeatures.id}</div></div>
                    </div>

                    <div className={classes.hero__image}>
                        <img alt={heroFeatures.name} src={heroFeatures.features.sprites.front_default} />
                    </div>
                    <div className={classes.hero__name__container}>
                        <div className={classes.hero__name}> <div className={classes.hero__name__text}>{heroFeatures.name}</div></div>
                    </div>
                </div>
                <div className={classes.features__content__right}
                    style={{ backgroundColor: `rgba(${heroColors[0]}, 0.7)` }}>
                    <div className={classes.features__list}>
                        <div className={classes.list__row}>
                            <div className={classes.list__row__name}>
                                Type
                            </div>
                            <div className={classes.list__row__value}>
                                {heroFeatures.features.types.map(types =>
                                    <div className={classes.hero__type} key={types.slot}>{types.type.name}</div>
                                )}
                            </div>
                        </div>
                        <div className={classes.list__row}>
                            <div className={classes.list__row__name}>
                                Attack
                            </div>
                            <div className={classes.list__row__value}>
                                {heroFeatures.features.stats[1].base_stat}
                            </div>
                        </div>
                        <div className={classes.list__row}>
                            <div className={classes.list__row__name}>
                                Defense
                            </div>
                            <div className={classes.list__row__value}>
                                {heroFeatures.features.stats[2].base_stat}
                            </div>
                        </div>
                        <div className={classes.list__row}>
                            <div className={classes.list__row__name}>
                                HP
                            </div>
                            <div className={classes.list__row__value}>
                                {heroFeatures.features.stats[0].base_stat}
                            </div>
                        </div>
                        <div className={classes.list__row}>
                            <div className={classes.list__row__name}>
                                SP Attack
                            </div>
                            <div className={classes.list__row__value}>
                                {heroFeatures.features.stats[3].base_stat}
                            </div>
                        </div>
                        <div className={classes.list__row}>
                            <div className={classes.list__row__name}>
                                SP Defense
                            </div>
                            <div className={classes.list__row__value}>
                                {heroFeatures.features.stats[4].base_stat}
                            </div>
                        </div>
                        <div className={classes.list__row}>
                            <div className={classes.list__row__name}>
                                Speed
                            </div>
                            <div className={classes.list__row__value}>
                                {heroFeatures.features.stats[5].base_stat}
                            </div>
                        </div>
                        <div className={classes.list__row}>
                            <div className={classes.list__row__name}>
                                Weight
                            </div>
                            <div className={classes.list__row__value}>
                                {heroFeatures.features.weight}
                            </div>
                        </div>
                        <div className={classes.list__row}>
                            <div className={classes.list__row__name}>
                                Total moves
                            </div>
                            <div className={classes.list__row__value}>
                                {heroFeatures.features.moves.length}
                            </div>
                        </div>
                        {/* <table className={classes.features__table}>
                            <tr>
                                <td>Type</td>
                                <td>{heroFeatures.features.types.map(types =>
                                    <div className={classes.hero__type} key={types.slot}>{types.type.name}</div>
                                )}</td>
                            </tr>
                            <tr>
                                <td>Attack</td>
                                <td>{heroFeatures.features.stats[1].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Defense</td>
                                <td>{heroFeatures.features.stats[2].base_stat}</td>
                            </tr>
                            <tr>
                                <td>HP</td>
                                <td>{heroFeatures.features.stats[0].base_stat}</td>
                            </tr>
                            <tr>
                                <td>SP Attack</td>
                                <td>{heroFeatures.features.stats[3].base_stat}</td>
                            </tr>
                            <tr>
                                <td>SP Defense</td>
                                <td>{heroFeatures.features.stats[4].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Speed</td>
                                <td>{heroFeatures.features.stats[5].base_stat}</td>
                            </tr>
                            <tr>
                                <td>Weight</td>
                                <td>{heroFeatures.features.weight}</td>
                            </tr>
                            <tr>
                                <td>Total moves</td>
                                <td>{heroFeatures.features.moves.length}</td>
                            </tr>
                        </table> */}
                    </div>
                </div>



            </div>
        </div>
    )
}

export default HeroFeatures