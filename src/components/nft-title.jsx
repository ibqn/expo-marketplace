import { View, Text } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'

export const NFTTitle = ({
  title,
  subTitle,
  titleSize = SIZES.large,
  subTitleSize = SIZES.small,
}) => {
  return (
    <View>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: titleSize,
          color: COLORS.primary,
        }}
      >
        {title}
      </Text>

      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: subTitleSize,
          color: COLORS.primary,
        }}
      >
        {subTitle}
      </Text>
    </View>
  )
}
