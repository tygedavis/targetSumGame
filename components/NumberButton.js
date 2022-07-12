import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

export default function NumberButton(props) {
	const handlePress = () => {
		if (!props.isNumberSelected) {
			props.onPress([...props.selectedNumbers, props.id]);
		}
	};

	return (
		<TouchableOpacity 
			style={[styles.container, props.isNumberSelected && styles.selectedContainer]}
			onPress={handlePress}
			disabled={ props.isNumberSelected }
		>
			<Text style={styles.numberText}>{props.number}</Text>
		</TouchableOpacity>
	);
}

NumberButton.propTypes = {
	id: PropTypes.number.isRequired,
	number: PropTypes.number.isRequired,
	isNumberSelected: PropTypes.bool.isRequired,
	onPress: PropTypes.func.isRequired,
	selectedNumbers: PropTypes.array.isRequired
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
		opacity: 0.5,
		padding: 10,
		borderColor: '#0F0',
		borderWidth: 5
	},
	numberText: {
		fontSize: 25,
		textAlign: 'center'
	}
});