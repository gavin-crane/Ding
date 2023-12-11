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
  ButtonIconText
} from '@gluestack-ui/themed'

// Password must contain the following:
// At least one lowercase alphabet i.e. [a-z]
// At least one uppercase alphabet i.e. [A-Z]
// At least one Numeric digit i.e. [0-9]
// At least one special character i.e. [‘@’, ‘$’, ‘.’, ‘#’, ‘!’, ‘%’, ‘*’, ‘?’, ‘&’, ‘^’]
// Also, the total length must be in the range [8-15]

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const passwordRegex =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/

export const AuthSignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [password2, setPassword2] = useState('')
  const [username, setUsername] = useState('')
  const [editingPass, setEditingPass] = useState(false)

  const [validEmail, setValidEmail] = useState(false)
  const [validPassword, setValidPassword] = useState(false)
  const [passwordsMatch, setPasswordsMatch] = useState(false)

  const [hitSubmit, setHitSubmit] = useState(false)

  const [showPassword, setShowPassword] = useState(false)

  const handleSubmit = () => {
    setHitSubmit(true)
    setValidEmail(emailRegex.test(email))
    setValidPassword(passwordRegex.test(password))
    if (
      emailRegex.test(email) &&
      passwordRegex.test(password) &&
      passwordsMatch
    ) {
      login()
    }
  }

  useEffect(() => {
    console.log('Auth mounted')

    return () => {
      console.log('Auth unmounted')
    }
  }, [])

  useEffect(() => {
    // dont show password error message when editing password
    if (password.length > 0) setEditingPass(true)
    else setEditingPass(false)
  }, [password])

  useEffect(() => {
    // check if passwords match while the user edits them
    if (password === password2) setPasswordsMatch(true)
    else setPasswordsMatch(false)
  }, [password, password2])

  const login = async () => {
    const authData = await pb
      .collection('users')
      .authWithPassword(email, password)
    console.log(authData)
  }
  return (
    <>
      <Text>Logged In: {pb.authStore.isValid.toString()}</Text>
      <Box h='$32' w='$72'>
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
            <Heading lineHeight='$md'>Create an Account</Heading>
            <VStack space='xs'>
              <Text lineHeight='$xs'>Username</Text>
              <FormControl isInvalid={hitSubmit && !validEmail}>
                <Input>
                  <InputField
                    type='text'
                    onChangeText={text => setUsername(text)}
                  />
                </Input>
              </FormControl>
            </VStack>
            <VStack space='xs'>
              <Text lineHeight='$xs'>Email</Text>
              <FormControl isInvalid={hitSubmit && !validEmail}>
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
              <FormControl
                isInvalid={hitSubmit && !validPassword && !editingPass}
              >
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
            <VStack space='xs'>
              <Text lineHeight='$xs'>Confirm Password</Text>
              <FormControl isInvalid={hitSubmit && !passwordsMatch}>
                <Input textAlign='center'>
                  <InputField
                    type={showPassword ? 'text' : 'password'}
                    onChangeText={text => setPassword2(text)}
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
                    Passwords must match
                  </FormControlErrorText>
                </FormControlError>
              </FormControl>
            </VStack>
            <Button ml='auto'>
              <ButtonText color='$white' onPress={handleSubmit}>
                Sign Up
              </ButtonText>
            </Button>
          </VStack>
        </FormControl>
      </Box>
    </>
  )
}
export default AuthSignUp
