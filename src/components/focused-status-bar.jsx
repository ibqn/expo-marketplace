import { StatusBar } from 'react-native'
import { useIsFocused } from '@react-navigation/native'

export const FocuesdStatusBar = (props) => {
  const isFocused = useIsFocused()

  return isFocused ? <StatusBar animated={true} {...props} /> : null
}
