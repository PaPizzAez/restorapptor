import {FlatList, Animated} from 'react-native'
import {ComponentType, ReactElement, useEffect, useRef} from 'react';

const AnimatedListItem = ({children, index}) => {
  const translateAnim = useRef(new Animated.Value(500)).current
  const opacityAnim = useRef(new Animated.Value(0)).current

  useEffect(() => {
    Animated.parallel([
      Animated.timing(translateAnim, {
        toValue: 0,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      }),
      Animated.timing(opacityAnim, {
        toValue: 1,
        duration: 500,
        delay: index * 100,
        useNativeDriver: true,
      }),
    ]).start()
  }, [index, opacityAnim, translateAnim])

  return (
    <Animated.View
      style={{
        width: "100%",
        transform: [{translateX: translateAnim}] as any,
        opacity: opacityAnim as number
      }}
    >
      {children}
    </Animated.View>
  )
}

function AnimatedList({data, ListItem}: {data: [], ListItem: ComponentType}) {

  return (
    <FlatList
      data={data}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({item, index}) =>
        <AnimatedListItem index={index}>
          <ListItem item={item} index={index}/>
        </AnimatedListItem>
      }
    />
  )
}

export default AnimatedList
