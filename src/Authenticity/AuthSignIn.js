import pb from '../lib/pocketbase.js'
import { useState, useEffect } from 'react'
import {
  GluestackUIProvider,
  Text,
  Box,
  Button,
  set
} from '@gluestack-ui/themed'
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Input,
  InputField,
  AlertCircleIcon,
  InputSlot,
  InputIcon,
  EyeIcon,
  EyeOffIcon,
  Heading,
  VStack,
  ButtonText,
  ButtonIcon,
  ButtonIconText,
  Spinner
} from '@gluestack-ui/themed'
import { useUserData } from '../Hooks/useUserData.js'

export const AuthSignIn = () => {
  const [email, setEmail] = useState('fakeemail@email.com')
  const [password, setPassword] = useState('1234abcd')
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(false)
  const { curUserData, setCurUserData } = useUserData()

  const login = async () => {
    try {
      setIsLoading(() => true)
      let authData = await pb
        .collection('users')
        .authWithPassword(email, password)
      console.log('authData:', authData)
      setCurUserData(() => authData)
      setError(() => false)
      setIsLoading(() => false)
    } catch (err) {
      console.log('err:', err)
      setError(() => true)
      setIsLoading(() => false)
    }
  }

  const handleSubmit = () => {
    login()
  }

  return (
    <>
      {/* <Text>Logged In: {pb.authStore.isValid.toString()}</Text> */}
      <Box h='$32' w='$72' style={{ height: 'auto' }}>
        <FormControl
          p='$4'
          borderWidth='$1'
          borderRadius='$lg'
          borderColor='$borderLight300'
          sx={{
            _dark: {
              borderWidth: '$1',
              borderRadius: '$lg',
              borderColor: '$borderDark800'
            }
          }}
        >
          <VStack space='xl'>
            <Heading lineHeight='$md'>Login</Heading>
            <VStack space='xs'>
              <Text lineHeight='$xs'>Email</Text>
              <FormControl isInvalid={false}>
                <Input>
                  <InputField
                    type='text'
                    onChangeText={text => setEmail(text)}
                  />
                </Input>
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>Invalid email.</FormControlErrorText>
                </FormControlError>
              </FormControl>
            </VStack>
            <VStack space='xs'>
              <Text lineHeight='$xs'>Password</Text>
              <FormControl isInvalid={false}>
                <Input textAlign='center'>
                  <InputField
                    type={showPassword ? 'text' : 'password'}
                    onChangeText={text => setPassword(text)}
                  />
                  <InputSlot
                    pr='$3'
                    onPress={() => setShowPassword(showState => !showState)}
                  >
                    <InputIcon
                      as={showPassword ? EyeIcon : EyeOffIcon}
                      color='$darkBlue500'
                    />
                  </InputSlot>
                </Input>
                <FormControlError>
                  <FormControlErrorIcon as={AlertCircleIcon} />
                  <FormControlErrorText>
                    Must meet password requirments.
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </VStack>
            <Button ml='auto'>
              <ButtonText color='$white' onPress={handleSubmit}>
                Sign In
              </ButtonText>
            </Button>
          </VStack>
        </FormControl>
      </Box>
    </>
  )
}

export default AuthSignIn
