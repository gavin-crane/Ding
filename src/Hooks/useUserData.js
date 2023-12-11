import { UserContext } from '../Providers'
import { useContext } from 'react'

const useUserData = () => {
  const { curUserData, setCurUserData, isLoggedIn } = useContext(UserContext)
  return { curUserData, setCurUserData, isLoggedIn }
}

export { useUserData }
