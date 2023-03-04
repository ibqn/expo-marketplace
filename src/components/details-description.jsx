import { useState } from 'react'
import { View, Text } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { EthPrice } from './eth-price'
import { NFTTitle } from './nft-title'

export const DetailsDescription = ({ data }) => {
  const { name, creator, price, description } = data

  const [text, setText] = useState(description.slice(0, 100))
  const [readMore, setReadMore] = useState(false)

  const handleReadMore = () => {
    setText(readMore ? description.slice(0, 100) : description)
    setReadMore(!readMore)
  }

  return (
    <>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <NFTTitle
          title={name}
          subTitle={creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />

        <EthPrice price={price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        <Text
          style={{
            fontSize: SIZES.font,
            fontFamily: FONTS.semiBold,
            color: COLORS.primary,
          }}
        >
          Description
        </Text>

        <View style={{ marginTop: SIZES.base }}>
          <Text
            style={{
              fontSize: SIZES.small,
              fontFamily: FONTS.regular,
              color: COLORS.secondary,
              lineHeight: SIZES.large,
            }}
          >
            {text}
            {!readMore && '...'}
            <Text
              style={{
                fontSize: SIZES.small,
                fontFamily: FONTS.semiBold,
                color: COLORS.secondary,
              }}
              onPress={handleReadMore}
            >
              {' '}
              {readMore ? 'Show Less' : 'Read More'}
            </Text>
          </Text>
        </View>
      </View>
    </>
  )
}
