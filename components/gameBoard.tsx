//Test game board by mace
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';


export default function GameBoard() {
    return (
        <View style={styles.container}>
            <View style={styles.scoreBox}>
                <Text style={styles.scoreText}>123</Text>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#922018',
        padding: 10,
        width: '100%',
        height: '100%',
    },
    scoreBox: {
        borderWidth: 2,
        borderColor: 'white',
        marginTop: 2,
        padding: 4,
        height: 'auto',
    },
    scoreText: {
        color: 'white',
        fontSize: 32,
        textAlign: 'center',
    }
});
