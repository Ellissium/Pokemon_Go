import React, { useEffect, useState } from 'react'
import fetchHeroes from './API/fetchHeroes'
import getSortedHeroes from './API/getSortedHeroes'
import HeroesList from './components/HeroesList'
import MyButton from './components/UI/button/MyButton'
import Loader from './components/UI/loader/Loader'
import HeroFeatures from './components/heroFeatures/HeroFeatures'
import classes from './styles/App.module.scss'
import './styles/index.css'
function App() {
	const [heroes, setHeroes] = useState([])
	const [heroesFeatures, setHeroesFeatures] = useState([])
	const [selectedSort, setSelectedSort] = useState('')
	const [isHeroesLoading, setIsHeroesLoading] = useState(false)

	useEffect(() => {
		setIsHeroesLoading(true)
		fetchHeroes(callback)
		setIsHeroesLoading(false)
	}, [])

	const sortedHeroes = getSortedHeroes(heroes, selectedSort)

	const heroInfo = hero => {
		setHeroesFeatures([hero])
	}

	const callback = temp => {
		console.log(temp)
		setIsHeroesLoading(false)
		setHeroes([...heroes, ...temp])
	}

	const sortHeroes = sort => {
		setSelectedSort(sort)
	}

	return (
		<div className={classes.App}>
			{/* <MySelect
				value={selectedSort}
				onChange={sortHeroes}
				defaultValue=' - Filter by type - '
				options={[
					{ value: 'normal' },
					{ value: 'fighting' },
					{ value: 'flying' },
					{ value: 'poison' },
					{ value: 'ground' },
					{ value: 'rock' },
					{ value: 'bug' },
					{ value: 'ghost' },
					{ value: 'steel' },
					{ value: 'fire' },
					{ value: 'water' },
					{ value: 'grass' },
					{ value: 'electric' },
					{ value: 'psychic' },
					{ value: 'ice' },
					{ value: 'dragon' },
					{ value: 'dark' },
					{ value: 'fairy' },
					{ value: 'shadow' },
				]}
			/> */}
			<div className={classes.heroes}>
				<div className={classes.heroes__leftBoard}>
					<div className={classes.heroes__header__container}>
						<div className={classes.hero__logo}>
							<div className={classes.hero__Ball}>
								<div className={classes.hero__topBall}></div>
								<div className={classes.hero__bottomBall}>
									<div className={classes.hero__middleBall}></div>
								</div>
							</div>
						</div>
						<div className={classes.hero__indicator_1}></div>
						<div className={classes.hero__indicator_2}></div>
						<div className={classes.hero__indicator_3}></div>
						<h1 className={classes.heroes__header}>
							<strong className={classes.heroes__logo__text}>Pokedex</strong>
						</h1>
						<div className={classes.heroes__header_1}></div>
						<div className={classes.heroes__header_2}></div>
						<div className={classes.heroes__header_3}></div>
					</div>
					<div className={classes.heroes__leftBoard__container}>
						<div className={classes.heroes__leftBoard__line}>
							<div className={classes.heroes__leftBoard__board}></div>
						</div>
					</div>

					<div className={classes.heroes__frame__container}>
						<div className={classes.heroes__frame}>
							<div className={classes.heroes__monitor}>
								{isHeroesLoading ? (
									<Loader />
								) : (
									<>
										{sortedHeroes.length !== 0 ? (
											<HeroesList heroInfo={heroInfo} heroes={sortedHeroes} />
										) : (
											<div className={classes.report}>No such pokemon!</div>
										)}
									</>
								)}
							</div>
							<MyButton
								onClick={() => {
									setIsHeroesLoading(true)
									fetchHeroes(callback)
								}}
							>
								{/* <strong>Load More</strong> */}
							</MyButton>
						</div>
					</div>
					<div className={classes.heroes__hinge__container}>
						<div className={classes.heroes__hinge_1}></div>
						<div className={classes.heroes__hinge_2}></div>
						<div className={classes.heroes__hinge_3}></div>
					</div>
					{/* <div className={classes.heroes__footer__container}>
						<div className={classes.heroes__footer}>1</div>
					</div> */}
				</div>
				<div className={classes.heroes__rightBoard}>
					<div className={classes.heroes__rightBoard__container}>
						<div className={classes.heroes__rightBoard__line_1}>
							<div className={classes.heroes__rightBoard__line_2}>
								<div className={classes.heroes__rightBoard__board}></div>
							</div>
						</div>
					</div>

					<div className={classes.heroes__features__container}>
						<div className={classes.heroes__features}>
							<div className={classes.heroes__features__monitor}>
								{heroesFeatures.length !== 0 ? (
									heroesFeatures.map(heroFeatures => (
										<HeroFeatures
											heroFeatures={heroFeatures}
											key={heroFeatures.id}
										/>
									))
								) : (
									<div className={classes.report}>
										Choose a pokemon to see full features!
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default App
