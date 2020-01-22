import './SeasonDisplay.css';
import React from 'react';

const SeasonConfig = {
	summer: {
		text: "Let's hit the beach!",
		iconName: 'sun'
	},
	winter: {
		text: 'Burr it is cold!',
		iconName: 'snowflake'
	}
}

const getSeason = (lat, month) => {
	if (month > 2 && month < 9) {
		return lat > 0 ? 'summer' : 'winter';
	} else {
		return lat > 0 ? 'winter' : 'summer';
	}
}

const SeasonDisplay = props => {
	const season = getSeason(props.lat, new Date().getMonth());
	const data = SeasonConfig[season]
	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${data.iconName} icon`} />
			<h1>{data.text}</h1>
			<i className={`icon-right massive ${data.iconName} icon`} />
		</div>
	);
};

export default SeasonDisplay;