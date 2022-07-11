import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function NumberButton(props) {
	const handlePress = () => {

	};

	return (
		<TouchableOpacity 
			style={[styles.container, props.isNumberSelected && styles.selectedContainer]}
			onPress={handlePress}
		>
			<Text style={styles.numberText}>{props.number}</Text>
		</TouchableOpacity>
	);
}

NumberButton.propTypes = {
	number: PropTypes.number.isRequired,
	isNumberSelected: PropTypes.bool.isRequired
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: '#336666',
		width: 100,
		marginHorizontal: 45,
		marginVertical: 40,
		padding: 15
	},
	selectedContainer: {
		padding: 10,
		borderColor: '#0F0',
		borderWidth: 5
	},
	numberText: {
		fontSize: 25,
		textAlign: 'center'
	}
});