import { View, Text, Image, StatusBar } from 'react-native'
import { ASSETS } from '../constants'
import { CircleButton } from './circle-button'

export const DetailsHeader = ({ data, navigation }) => {
  const { image } = data
  return (
    <View style={{ width: '100%', height: 373 }}>
      <Image
        source={image}
        resizeMode="cover"
        style={{ width: '100%', height: '100%' }}
      />

      <CircleButton
        imgUrl={ASSETS.left}
        handlePress={() => navigation.goBack()}
        style={{ left: 15, top: StatusBar.currentHeight + 10 }}
      />

      <CircleButton
        imgUrl={ASSETS.heart}
        style={{ right: 15, top: StatusBar.currentHeight + 10 }}
      />
    </View>
  )
}
