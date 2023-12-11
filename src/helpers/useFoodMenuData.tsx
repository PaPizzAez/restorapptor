import {useState, useEffect} from "react"
import request from "./request"
import {useGlobalContext} from "../contexts/Global.context"

function useFoodMenuData() {
  const [foodMenu, setFoodMenu] = useState<[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  const {state, dispatch} = useGlobalContext()

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true)
      setError(null)

      try {
        const data = await request("http://10.0.2.2:3000/food_menu", {
          method: "GET",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${state.token}`
          },
          onAuthFail: () => dispatch({currentRoute: "login"})
        })

        setFoodMenu(data?.data)
      }
      catch (error) {
        setError(error.message || "Error fetching tables data")
      }
      finally {
        setIsLoading(false)
      }
    }

    if (state.token) fetchData()

  }, [state.token])

  return {data: foodMenu, isLoading, error}
}

export default useFoodMenuData
