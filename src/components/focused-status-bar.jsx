import { StatusBar } from 'react-native'
import React from 'react'
import { useIsFocused } from '@react-navigation/native'

export const FocuesdStatusBar = (props) => {
  const isFocused = useIsFocused()

  return isFocused ? <StatusBar animated={true} {...props} /> : null
}
