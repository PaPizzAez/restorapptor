import {View, StyleSheet, ImageBackground} from "react-native"

import Header from "./components/Header"
import RestaurantMap from "./components/RestaurantMap"

function HomeScreen () {
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../assets/home_bg.jpg")}
        resizeMode="cover"
        style={styles.bg}
      >
        <Header/>
        <RestaurantMap/>
      </ImageBackground>
    </View>
  )
}

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    justifyContent: "center"
  },
  container: {
    flex: 1,
    backgroundColor: "white",
  }
})

export default HomeScreen
