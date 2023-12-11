import {StyleSheet, Text, TouchableOpacity, View} from "react-native"
import {useGlobalContext} from "../../../contexts/Global.context"

function Header() {
  const {dispatch} = useGlobalContext()

  return (
    <View style={styles.textBg}>
      <Text style={styles.title}> План ресторану </Text>
      <Text style={styles.description}>
        Ви можете скролити зображення й клікати на столи для резезвування.
        <Text style={styles.red}> Червоні</Text> столи зарезервовані,
        <Text style={styles.blue}> сині</Text> зарезервовані вами,
        <Text style={styles.green}> зелені</Text> - вільні.
      </Text>

      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => dispatch({currentRoute: "login"})}>
          <Text style={styles.backButtonText}>⬅️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.myReservationButton}>
        <TouchableOpacity onPress={() => dispatch({currentRoute: "reservations"})}>
          <Text style={styles.myReservationButtonText}>🧾</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  textBg: {
    backgroundColor: "rgba(0, 0, 0, 0.75)"
  },
  title: {
    width: "100%",
    fontSize: 30,
    fontFamily: "Comic Sans MS",
    color: "rgb(224,224,224)",
    textAlign: "center",
    paddingTop: 16*1.5,
    paddingBottom: 16*0.5
  },
  description: {
    paddingHorizontal: 16*0.75,
    paddingBottom: 16,
    width: "100%",
    fontSize: 18,
    fontFamily: "Comic Sans MS",
    color: "rgb(199,198,198)",
    textAlign: "center"
  },
  red: {
    color: "#d11313"
  },
  blue: {
    color: "deepskyblue"
  },
  green: {
    color: "green"
  },

  backButton: {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 9999999,

    width: 48,
    height: 48,
    backgroundColor: "rgb(255,255,255)",
    borderBottomRightRadius: 16*0.5
  },
  backButtonText: {
    fontSize: 35,
    textAlign: "center"
  },

  myReservationButton: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: 9999999,

    width: 48,
    height: 48,
    backgroundColor: "rgb(255,255,255)",
    borderBottomLeftRadius: 16*0.5
  },
  myReservationButtonText: {
    fontSize: 35,
    textAlign: "center"
  }

})

export default Header
