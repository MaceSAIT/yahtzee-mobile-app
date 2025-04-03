import { View, Text, StyleSheet } from 'react-native';
import GameBoard from '../../../components/gameBoard';

export default function GameScreen() {
    return (
    <View style={styles.container}>
        <GameBoard/>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
