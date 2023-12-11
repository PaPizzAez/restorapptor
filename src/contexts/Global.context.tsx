import React, {createContext, useState, useContext, ReactElement} from "react"

type GlobalContextProps = {
  state: {
    currentRoute: string
    token: string | null

    selectedTableId: string | null
    needReRender: boolean | null

    foodBuyList: Array<{
      foodName: string
      price: number
      previewImage: string
      preview3dModelObj: string
      preview3dModelMtl: string
    }>
  },
  dispatch: React.Dispatch<any>
}

const defaultValues: GlobalContextProps = {
  state: {
    currentRoute: "login", // TODO: "register" by default
    token: null,
    foodBuyList: [],
    selectedTableId: null,
    needReRender: null
  },
  dispatch: () => {}
}

const GlobalContext = createContext<GlobalContextProps>(defaultValues)

export const GlobalContextProvider = ({children}: {children: ReactElement}) => {
  const [state, setState] = useState(defaultValues.state)

  const dispatch = (action: any) => {
    setState((prevState) => ({ ...prevState, ...action }))
  }

  return (
    <GlobalContext.Provider value={{state, dispatch}}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useGlobalContext = () => {
  const context = useContext(GlobalContext)
  if (!context) {
    throw new Error("useRoute must be used within a RouteProvider")
  }
  return context
}
