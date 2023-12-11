import { createContext, useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const UserContext = createContext()

const UserContextProvider = ({ children }) => {
  const [curUserData, setCurUserData] = useState(null)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    console.log('UserProvider mounted')
    if (curUserData) {
      setIsLoggedIn(() => true)
      console.log('curUserData!!!!:', curUserData)
    } else setIsLoggedIn(() => false)
    return () => {
      console.log('UserProvider unmounted')
    }
  }, [setCurUserData])

  return (
    <UserContext.Provider value={{ curUserData, setCurUserData, isLoggedIn }}>
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserContextProvider }
