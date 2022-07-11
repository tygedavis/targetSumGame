import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';

export default function Game(props) {
	/* Creating an array of random numbers. */
	const randomNumbers = Array
		.from({ length: props.randomNumberCount })
		.map(() => 1 + Math.floor(Math.random() * 10));

	/* Creating a new array with the first 4 elements of `randomNumbers` and 
	then adding them together. */
	const targetNum = randomNumbers
		.slice(0, props.randomNumberCount - 2,)
		.reduce((acc, curr) => acc + curr, 0);

	return (
		<View style={styles.container}>
			<Text style={styles.goalNumber}>{targetNum}</Text>
			<View style={styles.numberContainer}>
				{randomNumbers.map((num, idx) => {
					return (
						<Text style={styles.guessNum} key={idx}>{num}</Text>
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
		paddingTop: 55
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
		justifyContent: 'space-around'
	},
	guessNum: {
		backgroundColor: '#336666',
		width: 100,
		marginHorizontal: 45,
		marginVertical: 40,
		padding: 15,
		fontSize: 25,
		textAlign: 'center'
	}
});
