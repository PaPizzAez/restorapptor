import {Text, TouchableOpacity} from "react-native"

export enum TableStatuses {
  AVAILABLE = "available",
  MINE = "mine",
  RESERVED = "reserved"
}

export enum TableType {
  CIRCLE = "circle",
  RECT = "rect"
}

type TableParams = {
  top: number
  left: number
  width?: number
  height?: number
  type: TableType
  size?: number
  status: TableStatuses
  text: string
  onPress: () => void
}

function Table ({
  top, left,
  width, height,
  status,
  size = null,
  type = TableType.RECT,
  text,
  onPress
} : TableParams) {

  return (
    <TouchableOpacity
      style={{
        width: size ?? width,
        height: size ?? height,
        backgroundColor: (
          status === TableStatuses.AVAILABLE
            ? "rgba(39, 213, 7, 0.5)"
            : (
              status === TableStatuses.MINE
                ? "rgba(0, 0, 204, 0.5)"
                : "rgba(230, 0, 0, 0.5)"
            )
        ),
        position: "absolute",
        top,
        left,
        borderRadius: type === TableType.CIRCLE ? size/2 : 16*0.25,
        borderWidth: 2,
        borderColor: "white",
        overflow: "hidden",
      }}
      {
        ...(
          status === TableStatuses.AVAILABLE
            ? {onPress}
            : {activeOpacity: 1}
        )
      }
    >
      <Text
        style={{
          color: "white",
          textAlign: "center",
          lineHeight: (size ?? height) - 5,
          fontSize: 20
        }}
      >
        {text}
      </Text>
    </TouchableOpacity>
  )
}

export default Table
