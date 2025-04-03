import { useRouter } from 'expo-router';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default function StartScreen() {

    const router = useRouter();

    // PLAYER BUTTON
    const playerGame = () => {
        //console.log("playerGame");
        router.push("/(game)");
    }

    const difficultySelect = () => {
        //console.log("difficultySelect");
        router.push("/difficulty");
    }

    const backHome = () => {
        //console.log("backHome");
        router.dismissAll();
    }

    return (
    <View style={styles.container}>

        <Text style={styles.title}>SELECT OPPONENT</Text>
        
        {/* BUTTONS */}
        <View style={styles.buttonArea}>

        {/* PLAYER Button */}
        <TouchableOpacity 
        style={styles.button}
        onPress={playerGame}>
            <View>
                <Text>Versus</Text> 
            </View>
        </TouchableOpacity>

        {/* COMPUTER Button */}
        <TouchableOpacity 
        style={styles.button}
        onPress={difficultySelect}>
            <View>
                <Text>Computer</Text>
            </View>
        </TouchableOpacity>
        </View>

        {/* BACK Button */}
        <TouchableOpacity 
        style={styles.button}
        onPress={backHome}>
            <View>
                <Text>Back</Text>
            </View>
        </TouchableOpacity>

    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        //paddingTop: '40%',
        flex: 1,
        alignItems: "center",
        padding: 20,
        backgroundColor: "#922018"
    },
    title: {
        paddingTop: '40%',
        color: 'white',
        fontSize: 50,
        textAlign: 'center',
    },
    buttonArea: {
        marginTop: '30%',
    },
    button: {
        backgroundColor: "grey",
        marginVertical: "10%",
        marginHorizontal: "auto",
        minWidth: "70%",
        minHeight: '10%',
        borderRadius: 5
    }
});
