import React from "react"
import {View, TextInput, StyleSheet} from "react-native"

type TextFieldParams = {
  placeholder: string
  onChangeText: (text: string) => void
  value: string
  containerStyle: object
}

export const TextField = ({
  placeholder,
  onChangeText,
  value,
  containerStyle,
  ...otherParams
}: TextFieldParams) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TextInput
        {...otherParams}
        placeholder={placeholder}
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    borderColor: "#ced4da",
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 4,
    backgroundColor: "white",

    flex: 1,
    maxHeight: 40,
    justifyContent: "center",
    alignItems: "center"
  },
  input: {
    height: 40,

    color: "#495057",
    fontSize: 16,
    textAlign: "center"
  },
})
