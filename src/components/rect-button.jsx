import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const RectButton = ({ handlePress, style }) => {
  return (
    <TouchableOpacity
      style={{
        backgroundColor: COLORS.primary,
        borderRadius: SIZES.extraLarge,
        padding: SIZES.small,
        ...style,
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          color: COLORS.white,
          fontFamily: FONTS.semiBold,
          fontSize: style.fontSize,
          textAlign: 'center',
        }}
      >
        Place a bid
      </Text>
    </TouchableOpacity>
  )
}
