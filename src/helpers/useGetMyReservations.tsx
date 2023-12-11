import {useState, useEffect} from "react"
import request from "./request"
import {useGlobalContext} from "../contexts/Global.context"

function useGetMyReservations() {
  const [reservationsData, setReservationsData] = useState<[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  const {state, dispatch} = useGlobalContext()

  const fetchData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await request("http://10.0.2.2:3000/my_orders", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`
        },
        onAuthFail: () => dispatch({currentRoute: "login"})
      })

      setReservationsData(data?.data)
    }
    catch (error) {
      setError(error.message || "Error fetching tables data")
    }
    finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    if (state.token)
      fetchData()
  }, [state.token])

  return {data: reservationsData, isLoading, error}
}

export default useGetMyReservations
