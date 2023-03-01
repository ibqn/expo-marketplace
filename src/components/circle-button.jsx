import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, style }) => {
  return (
    <TouchableOpacity
      style={{
        width: 40,
        height: 40,
        backgroundColor: COLORS.white,
        position: 'absolute',
        borderRadius: SIZES.extraLarge,
        alignItems: 'center',
        justifyContent: 'center',
        ...SHADOWS.light,
        ...style,
      }}
      onPress={handlePress}
    >
      <Image
        resizeMode="contain"
        style={{ width: 24, height: 24 }}
        source={imgUrl}
      />
    </TouchableOpacity>
  )
}
