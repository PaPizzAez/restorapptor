import {useEffect, useMemo, useRef} from "react"
import {Animated, FlatList, ImageBackground, StyleSheet, Text, View} from "react-native"

import {Button} from "../../../components/Button"
import {useGlobalContext} from "../../../contexts/Global.context"
import useFoodMenuData from "../../../helpers/useFoodMenuData"
import AnimatedList from '../../../components/AnimatedList'

const FoodMenuListItem = ({item}) => {
  const {state, dispatch} = useGlobalContext()

  const isActive = useMemo(() => {
    return state.foodBuyList.find(el => el.foodName === item.foodName) ?? false
  }, [state.foodBuyList, item.foodName])

  return (
    <ImageBackground
      source={{uri: item.previewImage}}
      resizeMode='cover'
    >
      <View style={[styles.listItem, {backgroundColor: isActive ? 'rgba(0, 123, 255, 0.5)' : 'transparent'}]}>
        <Text style={styles.listItemTitle}>
          {`[${Number(item.price)}грн] `}
          {item.foodName}
        </Text>

        <View style={{flexDirection: 'row'}}>
          <Button
            title="Прев'ю"
            type='secondary'
            onPress={() => false}
            containerStyle={{width: 100}}
          />
          <Button
            title={isActive ? 'Прибрати' : 'Обрати'}
            type='secondary'
            onPress={() => {
              if (isActive) {
                dispatch({foodBuyList: state.foodBuyList.filter(el => el.foodName !== item.foodName)});
              } else dispatch({foodBuyList: [...state.foodBuyList, item]});
            }}
            containerStyle={{width: 120, marginLeft: 16}}
          />
        </View>
      </View>
    </ImageBackground>
  )
}

function FoodMenu() {

  const {data = [], isLoading, error} = useFoodMenuData()

  if (isLoading) return <Text>Завантаження...</Text>
  if (error) return <Text>Сталася критична помилка!</Text>

  return (
    <AnimatedList
      data={data}
      ListItem={FoodMenuListItem}
    />
  )
}

const styles = StyleSheet.create({
  listItem: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  listItemTitle: {
    color: "black",
    marginBottom: 10,
    fontSize: 20,
    backgroundColor: "white",
    borderRadius: 16*0.25,
    paddingVertical: 16*0.25,
    paddingHorizontal: 16*0.5
  }
})

export default FoodMenu
