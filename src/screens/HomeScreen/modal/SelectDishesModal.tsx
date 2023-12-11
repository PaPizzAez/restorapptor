import {Button, Modal, StyleSheet, TouchableOpacity, View, Text, Alert} from "react-native"
import FoodMenu from "./FoodMenu"
import {useGlobalContext} from "../../../contexts/Global.context"
import request from "../../../helpers/request"

function SelectDishesModal ({isOpened, onClose}) {
  const {state, dispatch} = useGlobalContext()

  const reserveTable = () => {
    console.log(JSON.stringify({
      selectedTableId: state.selectedTableId,
      foodBuyList: state.foodBuyList
    }))

    request("http://10.0.2.2:3000/order_table", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Authorization: `Bearer ${state.token}`,
      },
      body: JSON.stringify({
        selectedTableId: state.selectedTableId,
        foodBuyList: state.foodBuyList
      }),
      onAuthFail: () => dispatch({currentRoute: "login"})
    })
      .then(() => {
        Alert.alert("Успіх!", "Ви успішно зробити замовлення!", [
          {
            text: "OK",
            onPress: () => dispatch({needReRender: true})
          }
        ])
        onClose()
      })
      .catch(error => {
        console.error(error)
        Alert.alert("Помилка!", "Неможливо замовити столик!")
      })
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isOpened}
      onRequestClose={() => onClose()}
    >
      <View style={styles.container}>
        <TouchableOpacity style={styles.hideModal} onPress={() => onClose()}>
          <Text style={styles.hideModalText}>❌</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Оберіть страву:</Text>

        <View style={styles.flatList}>
          <Text style={styles.flatListTotal}>
            Загальна сума замовлення:
            {
              " "+state.foodBuyList.reduce(
                (accumulator, currentItem) =>
                  accumulator += Number(currentItem.price),
                0
              )
            }
            грн
          </Text>

          <FoodMenu/>
        </View>

        <View style={styles.footer}>
          <Button
            title="Зарезервувати на завтра"
            type="primary"
            onPress={reserveTable}
          />
        </View>

      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(255, 255, 255, 1)",
  },
  hideModal: {
    position: "absolute",
    top: 0,
    right: 0,

    zIndex: 9999999,

    width: 48,
    height: 48,

    borderColor: "red",
    borderWidth: 1,
    borderBottomLeftRadius: 16*0.5
  },
  hideModalText: {
    paddingTop: 16*0.35,
    fontSize: 25,
    textAlign: "center",
    color: "red"
  },

  title: {
    paddingTop: 16*0.35,
    marginBottom: 16*2,
    fontSize: 25,
    textAlign: "center",
    color: "black"
  },

  flatList: {
    flex: 1,
    marginBottom: 30
  },
  flatListTotal: {
    marginHorizontal: 16,
    marginBottom: 10,
    fontSize: 16
  },

  footer: {
    flexDirection: "column",
    marginHorizontal: 16,
    paddingBottom: 20
  }
})

export default SelectDishesModal
