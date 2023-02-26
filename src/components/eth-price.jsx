import { View, Text, Image } from 'react-native'
import { ASSETS, COLORS, FONTS, SHADOWS, SIZES } from '../constants'

export const EthPrice = ({ price }) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Image
        source={ASSETS.eth}
        resizeMode="contain"
        style={{ width: 20, height: 20, marginRight: 2 }}
      />
      <Text
        style={{
          fontFamily: FONTS.medium,
          fontSize: SIZES.font,
          color: COLORS.primary,
        }}
      >
        {price}
      </Text>
    </View>
  )
}
