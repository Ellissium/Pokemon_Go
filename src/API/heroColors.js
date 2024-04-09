export default function getHeroColors(heroFeatures) {
	let heroBackgroundColor = 'gray'
	let heroBorderColor = 'black'
	let heroTypes = []
	let heroColors = []

	heroFeatures.features.types.forEach(element => {
		heroTypes.push(element.type.name)
	})
	// switch (heroTypes[0] {
	//     case "normal": heroBackgroundColor = "#FFDCC4"
	//     break;
	//     case "fighting": heroBackgroundColor = "#FFC4C4"
	//     break;
	//     case "flying": heroBackgroundColor = "#97C4BE"
	//     break;
	//     case "poison": heroBackgroundColor = "#BE9EF6"
	//     break;
	//     case "ground": heroBackgroundColor = "#8B765F"
	//     break;
	//     case "rock": heroBackgroundColor = "#7A8182"
	//     break;
	//     case "bug": heroBackgroundColor = "#FFE9A8"
	//     break;
	//     case "ghost": heroBackgroundColor = "#D9D9E0"
	//     break;
	//     case "steel": heroBackgroundColor = "#5E7B80"
	//     break;
	//     case "fire": heroBackgroundColor = "#FFB79A"
	//     break;
	//     case "water": heroBackgroundColor = "#9AD1F5"
	//     break;
	//     case "grass": heroBackgroundColor = "#ACDFAC"
	//     break;
	//     case "electric": heroBackgroundColor = "#FFF28F"
	//     break;
	//     case "psychic": heroBackgroundColor = "#B2A2CD"
	//     break;
	//     case "ice": heroBackgroundColor = "#E3F2FB"
	//     break;
	//     case "dragon": heroBackgroundColor = "#72ADA0"
	//     break;
	//     case "dark": heroBackgroundColor = "#8484BA"
	//     break;
	//     case "fairy": heroBackgroundColor = "#E0ACC9"
	//     break;
	//     case "unknown": heroBackgroundColor = "#D6D8DD"
	//     break;
	//     case "shadow": heroBackgroundColor = "#36425D"
	//     break;
	//     default: heroBackgroundColor = "#D6D8DD"
	//     break;
	// }

	// switch (heroTypes[1] {
	//     case "normal": heroBorderColor = "#FFDCC4"
	//     break;
	//     case "fighting": heroBorderColor = "#FFC4C4"
	//     break;
	//     case "flying": heroBorderColor = "#97C4BE"
	//     break;
	//     case "poison": heroBorderColor = "#BE9EF6"
	//     break;
	//     case "ground": heroBorderColor = "#8B765F"
	//     break;
	//     case "rock": heroBorderColor = "#7A8182"
	//     break;
	//     case "bug": heroBorderColor = "#FFE9A8"
	//     break;
	//     case "ghost": heroBorderColor = "#D9D9E0"
	//     break;
	//     case "steel": heroBorderColor = "#5E7B80"
	//     break;
	//     case "fire": heroBorderColor = "#FFB79A"
	//     break;
	//     case "water": heroBorderColor = "#9AD1F5"
	//     break;
	//     case "grass": heroBorderColor = "#ACDFAC"
	//     break;
	//     case "electric": heroBorderColor = "#FFF28F"
	//     break;
	//     case "psychic": heroBorderColor = "#B2A2CD"
	//     break;
	//     case "ice": heroBorderColor = "#E3F2FB"
	//     break;
	//     case "dragon": heroBorderColor = "#72ADA0"
	//     break;
	//     case "dark": heroBorderColor = "#8484BA"
	//     break;
	//     case "fairy": heroBorderColor = "#E0ACC9"
	//     break;
	//     case "unknown": heroBorderColor = "#D6D8DD"
	//     break;
	//     case "shadow": heroBorderColor = "#36425D"
	//     break;
	//     default: heroBorderColor = "#D6D8DD"
	//     break;
	// }
	switch (heroTypes[0]) {
		case 'normal':
			heroBackgroundColor = '255, 220, 196'
			break
		case 'fighting':
			heroBackgroundColor = '255, 196, 196'
			break
		case 'flying':
			heroBackgroundColor = '151, 196, 190'
			break
		case 'poison':
			heroBackgroundColor = '190, 158, 246'
			break
		case 'ground':
			heroBackgroundColor = '139, 118, 95'
			break
		case 'rock':
			heroBackgroundColor = '122, 129, 130'
			break
		case 'bug':
			heroBackgroundColor = '255, 233, 168'
			break
		case 'ghost':
			heroBackgroundColor = '217, 217, 224'
			break
		case 'steel':
			heroBackgroundColor = '94, 123, 128'
			break
		case 'fire':
			heroBackgroundColor = '255, 183, 154'
			break
		case 'water':
			heroBackgroundColor = '154, 209, 245'
			break
		case 'grass':
			heroBackgroundColor = '172, 223, 172'
			break
		case 'electric':
			heroBackgroundColor = '255, 242, 143'
			break
		case 'psychic':
			heroBackgroundColor = '178, 162, 205'
			break
		case 'ice':
			heroBackgroundColor = '227, 242, 251'
			break
		case 'dragon':
			heroBackgroundColor = '114, 173, 160'
			break
		case 'dark':
			heroBackgroundColor = '132, 132, 186'
			break
		case 'fairy':
			heroBackgroundColor = '224, 172, 201'
			break
		case 'unknown':
			heroBackgroundColor = '214, 216, 221'
			break
		case 'shadow':
			heroBackgroundColor = '54, 66, 93'
			break
		default:
			heroBackgroundColor = '214, 216, 221'
			break
	}

	switch (heroTypes[1]) {
		case 'normal':
			heroBorderColor = '255, 220, 196'
			break
		case 'fighting':
			heroBorderColor = '255, 196, 196'
			break
		case 'flying':
			heroBorderColor = '151, 196, 190'
			break
		case 'poison':
			heroBorderColor = '190, 158, 246'
			break
		case 'ground':
			heroBorderColor = '139, 118, 95'
			break
		case 'rock':
			heroBorderColor = '122, 129, 130'
			break
		case 'bug':
			heroBorderColor = '255, 233, 168'
			break
		case 'ghost':
			heroBorderColor = '217, 217, 224'
			break
		case 'steel':
			heroBorderColor = '94, 123, 128'
			break
		case 'fire':
			heroBorderColor = '255, 183, 154'
			break
		case 'water':
			heroBorderColor = '154, 209, 245'
			break
		case 'grass':
			heroBorderColor = '172, 223, 172'
			break
		case 'electric':
			heroBorderColor = '255, 242, 143'
			break
		case 'psychic':
			heroBorderColor = '178, 162, 205'
			break
		case 'ice':
			heroBorderColor = '227, 242, 251'
			break
		case 'dragon':
			heroBorderColor = '114, 173, 160'
			break
		case 'dark':
			heroBorderColor = '132, 132, 186'
			break
		case 'fairy':
			heroBorderColor = '224, 172, 201'
			break
		case 'unknown':
			heroBorderColor = '214, 216, 221'
			break
		case 'shadow':
			heroBorderColor = '54, 66, 93'
			break
		default:
			heroBorderColor = '214, 216, 221'
			break
	}
	heroColors.push(heroBackgroundColor)
	heroColors.push(heroBorderColor)

	return heroColors
}
