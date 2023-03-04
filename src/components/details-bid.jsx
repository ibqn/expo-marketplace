import { View, Text, Image } from 'react-native'
import { COLORS, FONTS, SIZES } from '../constants'
import { EthPrice } from './eth-price'

export const DetailsBid = ({ bid }) => {
  const { image, name, price, date } = bid

  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.base * 2,
      }}
    >
      <View style={{ flexDirection: 'row', alignItems: 'center' }}>
        <Image
          source={image}
          resizeMode="contain"
          style={{ width: 48, height: 48 }}
        />
        <View style={{ marginLeft: SIZES.small }}>
          <Text
            style={{
              fontFamily: FONTS.semiBold,
              fontSize: SIZES.small,
              color: COLORS.primary,
            }}
          >
            Bid Placed by {name}
          </Text>
          <Text
            style={{
              fontFamily: FONTS.regular,
              fontSize: SIZES.small - 2,
              color: COLORS.secondary,
              marginTop: 3,
            }}
          >
            {date}
          </Text>
        </View>
      </View>

      <EthPrice price={price} />
    </View>
  )
}
