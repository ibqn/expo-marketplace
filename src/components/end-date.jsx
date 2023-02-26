import { View, Text } from 'react-native'
import { COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const EndDate = () => {
  const endDate = ['12h 30m', '45m', '1d 18h', '16h 7m'][
    Math.floor(Math.random() * 4)
  ]

  return (
    <View
      style={{
        paddingHorizontal: SIZES.font,
        paddingVertical: SIZES.base,
        backgroundColor: COLORS.white,
        justifyContent: 'center',
        borderRadius: SIZES.small,
        alignItems: 'center',
        elevation: 1,
        ...SHADOWS.light,
        maxWidth: '50%',
      }}
    >
      <Text
        style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.primary,
        }}
      >
        Ending in
      </Text>
      <Text
        style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.medium,
          color: COLORS.primary,
        }}
      >
        {endDate}
      </Text>
    </View>
  )
}
