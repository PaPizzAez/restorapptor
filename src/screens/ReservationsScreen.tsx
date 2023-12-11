import {ImageBackground, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {useGlobalContext} from '../contexts/Global.context'
import AnimatedList from '../components/AnimatedList'
import useGetMyReservations from '../helpers/useGetMyReservations'

function ReservationInfo ({item, index}) {
  return (
    <View style={styles.reservationInfo}>
      <Text style={styles.reservationInfoText}>Номер столика: {item.tableId}</Text>
      <Text style={styles.reservationInfoText}>Замовлені страви: </Text>
      <View style={styles.reservationInfoFoodList}>
        {
          JSON.parse(item.foodList).map(el =>
            <Text>- {el.foodName} - {Number(el.price)}грн</Text>
          )
        }
      </View>
    </View>
  )
}

function ReservationsScreen() {
  const {dispatch} = useGlobalContext()
  const {data = [], isLoading, error} = useGetMyReservations()

  if (isLoading) return <Text>Завантаження...</Text>
  if (error) return <Text>Сталася критична помилка!</Text>

  return (
    <ImageBackground
      style={styles.bg}
      source={require("../assets/reservations_bg.jpg")}
      resizeMode='cover'
    >
      <View style={styles.backButton}>
        <TouchableOpacity onPress={() => dispatch({currentRoute: "home"})}>
          <Text style={styles.backButtonText}>⬅️</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text style={styles.title}> Ваші резервації </Text>
      </View>
      <Text style={styles.description}>
        Тут показується список усіх ваших резервацій на завтра.
      </Text>

      <View>
        <AnimatedList
          data={data}
          ListItem={ReservationInfo}
        />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  bg: {
    flex: 1
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

  titleContainer: {
    width: "100%",
    paddingHorizontal: 16*5,
  },
  title: {
    fontSize: 30,
    fontFamily: "Comic Sans MS",
    color: "rgb(0,0,0)",
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    borderBottomRightRadius: 16*0.25,
    borderBottomLeftRadius: 16*0.25,
    textAlign: "center",
    paddingTop: 16*0.5,
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

  reservationInfo: {
    borderRadius: 16*0.5,
    backgroundColor: "rgba(255, 255, 255, 0.85)",
    padding: 16*0.5,
    marginHorizontal: 16,
    marginBottom: 16*0.5
  },
  reservationInfoText: {
    color: "black",
    fontSize: 20
  },
  reservationInfoFoodList: {
    marginTop: 16*0.5,
    marginLeft: 16
  }
})

export default ReservationsScreen
