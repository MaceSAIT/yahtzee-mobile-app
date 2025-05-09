import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { useRouter, Link } from 'expo-router';
import { Image } from "expo-image";

export default function Page() {


  const router = useRouter();

  // PLAY BUTTON
  const play = () => {
    //console.log("PLAY");
    //router.push("/(play)"); // Disabled for Modal Testing

    <Link href="/modal"></Link>
  }
  // OPTIONS BUTTON
  const options = () => {
    //console.log("OPTIONS");
    router.push("/options");
  }

  return (
    <View style={styles.container}>
      <View style={styles.main}>

        {/* IMAGE */}
        <Image
          style={styles.image}
          source={require('../assets/d31logo.png')}
          contentFit="contain"
          contentPosition={"center"}
        />

        {/* BUTTONS */}
        <View style={styles.buttonArea}>

          {/* PLAY Button */}
          <Link href="/modal"
            style={styles.button}
            //onPress={play}
            >
              <View>
                <Text>PLAY</Text> 
              </View>
          </Link>

          {/* OPTIONS Button */}
          <TouchableOpacity 
            style={styles.button}
            onPress={options}>
              <View>
                <Text>OPTIONS</Text>
              </View>
          </TouchableOpacity>

        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    backgroundColor: "#922018"
  },
  main: {
    flex: 1,
    //justifyContent: "center",
    paddingTop: "20%",
    //maxWidth: 960,
    //marginHorizontal: "auto",
  },
  image: {
    flex: 1,
    maxHeight: '35%',
    minWidth: '100%'
  },

  buttonArea:{
    //backgroundColor: 'blue',
    marginTop: '30%',
  },
  button: {
    backgroundColor: "grey",
    marginVertical: "10%",
    marginHorizontal: "auto",
    minWidth: "70%",
    minHeight: '10%',
    borderRadius: 5
  },
});
