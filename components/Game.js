import React, { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import NumberButton from './NumberButton';

export default function Game(props) {
    const [state, setState] = React.useState({
        selectedNumbers: [],
        randomNumbers: Array
            .from({ length: props.randomNumberCount })
            .map(() => 1 + Math.floor(Math.random() * 10)),
        targetNum: 0,
        status: 'new'
    });

    useEffect(() => {
        setState({
            ...state,
            randomNumbers: Array
                .from({ length: props.randomNumberCount })
                .map(() => 1 + Math.floor(Math.random() * 10))
        });
    }, [state.status]);

    const generateRandomNumbersArray = () => {
        if (state.status === 'new') {
            setState({
                ...state,
                targetNum: state.randomNumbers
                    .slice(0, props.randomNumberCount - 3)
                    .reduce((acc, curr) => acc + curr, 0),
                status: 'playing'
            });
        }
    };

    generateRandomNumbersArray();

    const isNumberSelected = (numIdx) => { 
        return state.selectedNumbers.indexOf(numIdx) >= 0; 
    };

    const handleSelectedNumbers = (num) => {
        setState({
            ...state,
            selectedNumbers: [...state.selectedNumbers, num]
        });
    };

    const gameStatus = () => {
        console.log('*** state.targetNum ***', state.targetNum);
        const sumSelected = state.selectedNumbers.reduce((acc, curr) => {
            return acc + state.randomNumbers[curr];
        }, 0);
        console.log('*** sumSelected ***', sumSelected);
        
        if (sumSelected === state.targetNum && state.status !== 'new') {
            console.log('*** You did it! ***');
        }
    };

    gameStatus();

    //TODO: Shuffle the random numbers

    return (
        <View style={styles.container}>
            <Text style={styles.goalNumber}>{state.targetNum}</Text>
            <View style={styles.numberContainer}>
                {state.randomNumbers.map((num, idx) => {
                    return (
                        <NumberButton 
                            key={idx}
                            id={idx} 
                            number={num}
                            isNumberSelected={isNumberSelected(idx)}
                            onPress={handleSelectedNumbers}
                            selectedNumbers={state.selectedNumbers}
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
