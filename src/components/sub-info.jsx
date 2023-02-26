import { View } from 'react-native'
import { SIZES } from '../constants'
import { EndDate } from './end-date'
import { People } from './people'

export const SubInfo = () => {
  return (
    <View
      style={{
        width: '100%',
        paddingHorizontal: SIZES.font,
        marginTop: -SIZES.extraLarge,
        flexDirection: 'row',
        justifyContent: 'space-between',
      }}
    >
      <People />
      <EndDate />
    </View>
  )
}
