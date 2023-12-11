import {useState} from "react"
import {Alert, StyleSheet, Text, View} from "react-native"

import {Button} from "../components/Button"
import {TextField} from "../components/TextField"

import {useGlobalContext} from "../contexts/Global.context"
import request from "../helpers/request"

function RegisterScreen () {
  const {dispatch} = useGlobalContext()

  const [name, setName] = useState("")
  const [password, setPassword] = useState("")
  const [isDisabled, setIsDisabled] = useState(false)

  const onSubmit = async () => {
    setIsDisabled(true)

    request("http://10.0.2.2:3000/register", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({name, password})
    })
      .then(data => {
        if (data.code !== 200 || typeof data?.token !== "string")
          throw new Error(data.message)

        dispatch({
          currentRoute: "home",
          token: data?.token ?? null
        })
        Alert.alert("Успіх!", "Ви зареєструвалися у нашому додатку!")
      })
      .catch(error => {
        console.error(error)
        Alert.alert("Помилка!", "Неможливо увійти! Можливі неправильні ім'я або пароль")
      })
      .finally(() => {
        setIsDisabled(false)
      })
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.form}>
        <Text style={styles.title}>RestorApptor - Реєстрація</Text>
        <TextField
          containerStyle={{marginBottom: 16}}
          placeholder="Ім'я"
          value={name}
          onChangeText={setName}
        />
        <TextField
          containerStyle={{marginBottom: 16}}
          placeholder="Пароль"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={true}
        />

        <Button
          type="primary"
          title="Зареєструватися"
          onPress={onSubmit}
          disabled={isDisabled}
        />

        <Button
          type="secondary"
          title="Маєш аккаунт? Хочеш увійти?"
          onPress={() => dispatch({currentRoute: "login"})}
          containerStyle={{ marginTop: 30 }}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  form: {
    minWidth: "70%"
  },
  title: {
    textAlign: "center",
    fontSize: 20,
    marginBottom: 16
  }
})

export default RegisterScreen
