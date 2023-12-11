import {ReactElement} from "react"
import {useGlobalContext} from "../contexts/Global.context"

type RouterParams = {
  routes: {
    [routeName: string]: ReactElement
  }
}

export function Router({routes}: RouterParams) {
  const {state} = useGlobalContext()

  return routes[state.currentRoute]
}
