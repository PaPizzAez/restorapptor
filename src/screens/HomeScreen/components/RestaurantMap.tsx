import {useState} from "react"
import {Image, ScrollView, Text} from "react-native"

import Table from "./Table"
import SelectDishesModal from "../modal/SelectDishesModal"
import useTablesData from "../../../helpers/useTablesData"
import {useGlobalContext} from "../../../contexts/Global.context"

function RestaurantMap() {
  const {dispatch} = useGlobalContext()
  const [isModalOpened, setIsModalOpened] = useState(false)
  const {data = [], error, isLoading} = useTablesData()

  if (isLoading) return <Text>Завантаження...</Text>
  if (error) return <Text>Сталася критична помилка!</Text>

  return (
    <ScrollView horizontal bounces={false} directionalLockEnabled={false}>
      <ScrollView
        directionalLockEnabled={false}
        nestedScrollEnabled
        bounces={false}
        contentContainerStyle={{marginVertical: 16, height: 1015 + 16*2}}
      >
        <Image
          source={require("../../../assets/plan2.png")}
          resizeMode="contain"
        />

        {
          data.map(el =>
            <Table
              key={el.id}
              type={el.type}
              top={el.y}
              left={el.x}
              width={el.width}
              height={el.height}
              size={el.size}
              status={el.tableStatus}
              text={el.id}
              onPress={() => {
                dispatch({foodBuyList: [], selectedTableId: el.id})
                setIsModalOpened(true)
              }}
            />
          )
        }

        <SelectDishesModal
          isOpened={isModalOpened}
          onClose={() => setIsModalOpened(false)}
        />

      </ScrollView>
    </ScrollView>
  )
}

export default RestaurantMap
