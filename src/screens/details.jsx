import { View, Text, StyleSheet, SafeAreaView, FlatList } from 'react-native'
import {
  DetailsBid,
  DetailsDescription,
  DetailsHeader,
  FocusedStatusBar,
  SubInfo,
} from '../components'
import { RectButton } from '../components/rect-button'
import { SHADOWS, SIZES } from '../constants'

export const Details = ({ route, navigation }) => {
  const { data } = route.params

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar
        barStyle="dark-content"
        translucent={true}
        backgroundColor="transparent"
      />

      <View
        style={{
          width: '100%',
          position: 'absolute',
          bottom: 0,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: 'rgba(255,255,255,0.5)',
          zIndex: 1,
          paddingVertical: SIZES.font,
        }}
      >
        <RectButton
          style={{ minWidth: 170, fontSize: SIZES.large, ...SHADOWS.dark }}
        />
      </View>

      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={({ id }) => id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />

            <View style={{ padding: SIZES.font }}>
              <DetailsDescription data={data} />
            </View>
          </>
        )}
      />
    </SafeAreaView>
  )
}
