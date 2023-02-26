import { View } from 'react-native'
import { ASSETS } from '../constants'
import { PersonImage } from './person-image'

export const People = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
      }}
    >
      {[ASSETS.person01, ASSETS.person02, ASSETS.person03, ASSETS.person04]
        .sort(() => 0.5 - Math.random())
        .slice(0, 1 + Math.floor(Math.random() * 3))
        .map((imageUrl, index) => {
          return (
            <PersonImage key={index} imageUrl={imageUrl} shift={index !== 0} />
          )
        })}
    </View>
  )
}
