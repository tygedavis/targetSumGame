import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import NumberButton from './NumberButton';

export default function Game(props) {
	const [selectedNumbers, handleSelectedNumbers] = React.useState([0, 4]);

	const isNumberSelected = (numIdx) => { 
		return selectedNumbers.indexOf(numIdx) >= 0; 
	};

	/* Creating an array of random numbers. */
	const randomNumbers = Array
		.from({ length: props.randomNumberCount })
		.map(() => 1 + Math.floor(Math.random() * 10));

	/* Creating a new array with the first 4 elements of `randomNumbers` and 
	then adding them together. */
	const targetNum = randomNumbers
		.slice(0, props.randomNumberCount - 2,)
		.reduce((acc, curr) => acc + curr, 0);

	//TODO: Shuffle the random numbers

	return (
		<View style={styles.container}>
			<Text style={styles.goalNumber}>{targetNum}</Text>
			<View style={styles.numberContainer}>
				{randomNumbers.map((num, idx) => {
					return (
						<NumberButton 
							key={idx} 
							number={num}
							isNumberSelected={isNumberSelected(idx)}
						/>
					);
				})}
			</View>
		</View>
	);
}

Game.propTypes = {
	randomNumberCount: PropTypes.number.isRequired
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'skyblue',
		paddingTop: 155
	},
	goalNumber: {
		backgroundColor: '#333366',
		fontSize: 40,
		marginHorizontal: 50,
		textAlign: 'center'
	},
	numberContainer: {
		flex: 1,
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
		marginTop: 40
	}
});
