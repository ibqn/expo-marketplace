import { Image } from 'react-native'
import { SIZES } from '../constants'

export const PersonImage = ({ imageUrl, shift }) => {
  return (
    <Image
      source={imageUrl}
      resizeMode="contain"
      style={{
        width: 48,
        height: 48,
        ...(shift && { marginLeft: -SIZES.font }),
      }}
    />
  )
}
