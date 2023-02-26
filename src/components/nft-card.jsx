import { Image, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import { ASSETS, COLORS, SHADOWS, SIZES } from '../constants'
import { CircleButton } from './circle-button'

export const NFTCard = ({ data }) => {
  const navigation = useNavigation()

  const { name, image } = data

  return (
    <View
      style={{
        backgroundColor: COLORS.white,
        borderRadius: SIZES.font,
        marginBottom: SIZES.extraLarge,
        margin: SIZES.base,
        ...SHADOWS.dark,
      }}
    >
      <View style={{ width: '100%', height: 250 }}>
        <Image
          source={image}
          resizeMode="cover"
          style={{
            width: '100%',
            height: '100%',
            borderTopLeftRadius: SIZES.font,
            borderTopRightRadius: SIZES.font,
          }}
        />
        <CircleButton imgUrl={ASSETS.heart} right={10} top={10} />

        <Text>{name}</Text>
      </View>
    </View>
  )
}
