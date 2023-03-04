import { View, Text } from 'react-native'
import { SIZES } from '../constants'
import { EthPrice } from './eth-price'
import { NFTTitle } from './nft-title'

export const DetailsDescription = ({ data }) => {
  const { name, creator, price } = data

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
        <Text>Description</Text>
      </View>
    </>
  )
}
