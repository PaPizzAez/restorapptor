function request(
  url: string,
  {onAuthFail = () => false, ...params}
) {
  return new Promise(async (resolve, reject) => {
    try {
      const response = await fetch(url, params)

      if (!response.ok) throw new Error("Network response was not ok")

      const data = await response.json()

      if (data.code === 401) {
        if (onAuthFail) onAuthFail()
        return
      }

      if (data.code !== 200) {
        throw new Error(data.message)
      }

      resolve(data)
    }
    catch (error) {
      reject(error)
    }
  })
}

export default request
