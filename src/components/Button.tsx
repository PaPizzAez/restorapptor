import {StyleSheet, TouchableOpacity, Text} from "react-native"

type ButtonParams = {
  title: string
  type: string
  onPress: () => void
  containerStyle?: object
}

export function Button({
  title,
  type,
  onPress,
  containerStyle,
  ...otherParams
}: ButtonParams) {

  const additionalContainerStyle = {
    backgroundColor: "white"
  }
  const additionalTextStyle = {
    color: "white"
  }

  if (type === "primary") {
    additionalContainerStyle.backgroundColor = "#1aab15"
  }
  else if (type === "secondary") {
    additionalTextStyle.color = "#1aab15"
    additionalContainerStyle.backgroundColor = "white"
    additionalContainerStyle.borderColor = "#1aab15"
    additionalContainerStyle.borderWidth = 2
  }

  return (
    <TouchableOpacity style={[styles.button, additionalContainerStyle, containerStyle]} onPress={onPress}>
      <Text style={[styles.buttonText, additionalTextStyle]} {...otherParams}>{title}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#1aab15",
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 4,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
})
