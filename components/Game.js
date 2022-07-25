import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import NumberButton from './NumberButton';

export default function Game(props) {
    const [ selectedNumberIds, setSelectedNumbersIds ] = React.useState([]);
    const [ randomNumbers ] = React.useState(Array
        .from({ length: props.randomNumberCount })
        .map(() => 1 + Math.floor(Math.random() * 10))
    );
    const [ targetNum ] = React.useState(randomNumbers
        .slice(0, props.randomNumberCount - 3)
        .reduce((acc, curr) => acc + curr, 0)
    );

    const isNumberSelected = (numIdx) => { 
        return selectedNumberIds.indexOf(numIdx) >= 0; 
    };

    const handleSelectedNumbers = (id) => {
        setSelectedNumbersIds([...selectedNumberIds, id]);
    };

    const gameStatus = () => {
        const sumSelected = selectedNumberIds.reduce((acc, curr) => {
            return acc + randomNumbers[curr];
        }, 0);
        console.log('*** sumSelected ***', sumSelected);
        
        if (sumSelected > targetNum) {
            return 'LOST';
        }
        
        if (sumSelected === targetNum) {
            return 'WON';
        }
        
        return 'PLAYING';
    };

    //TODO: Shuffle the random numbers

    return (
        <View style={styles.container}>
            <Text style={styles.goalNumber}>{targetNum}</Text>
            <View style={styles.numberContainer}>
                {randomNumbers.map((num, idx) => {
                    return (
                        <NumberButton 
                            key={idx}
                            id={idx} 
                            number={num}
                            isNumberSelected={isNumberSelected(idx)}
                            onPress={handleSelectedNumbers}
                            selectedNumbers={selectedNumberIds}
                        />
                    );
                })}
                <Text>{gameStatus()}</Text>
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
