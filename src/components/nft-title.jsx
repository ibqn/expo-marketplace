import { View, Text } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const NFTTitle = ({ title, subTitle }) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.large,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  )
}
