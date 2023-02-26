import { Image, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ASSETS, COLORS, SHADOWS, SIZES } from '../constants'
import { CircleButton } from './circle-button'
import { SubInfo } from './sub-info'
import { NFTTitle } from './nft-title'
import { EthPrice } from './eth-price'
import { RectButton } from './rect-button'

export const NFTCard = ({ data }) => {
  const navigation = useNavigation()

  const { name, image, creator, price } = data

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
      </View>

      <SubInfo />

      <View
        style={{
          width: '100%',
          padding: SIZES.font,
        }}
      >
        <NFTTitle title={name} subTitle={creator} />

        <View
          style={{
            marginTop: SIZES.font,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <EthPrice price={price} />
          <RectButton
            style={{ minWidth: 120, fontSize: SIZES.font }}
            handlePress={() => navigation.navigate('Details', { data })}
          ></RectButton>
        </View>
      </View>
    </View>
  )
}
