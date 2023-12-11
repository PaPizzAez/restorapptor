import {useState, useEffect} from "react"
import request from "./request"
import {useGlobalContext} from "../contexts/Global.context"

function useTablesData() {
  const [tablesData, setTablesData] = useState<[] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<any>(null)

  const {state, dispatch} = useGlobalContext()

  const fetchData = async () => {
    setIsLoading(true)
    setError(null)

    try {
      const data = await request("http://10.0.2.2:3000/tables", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: `Bearer ${state.token}`
        },
        onAuthFail: () => dispatch({currentRoute: "login"})
      })

      setTablesData(data?.data)
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

  useEffect(() => {
    if (state.needReRender) {
      fetchData().then(() => dispatch({needReRender: false}))
    }
  }, [state.needReRender])

  return {data: tablesData, isLoading, error}
}

export default useTablesData
