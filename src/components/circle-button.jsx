import { View, Text, TouchableOpacity, Image } from 'react-native'
import { COLORS, SHADOWS, SIZES } from '../constants'

export const CircleButton = ({ imgUrl, handlePress, ...otherStyles }) => {
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
        ...otherStyles,
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
