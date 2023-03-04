import { useState } from 'react'
import { View, SafeAreaView, FlatList } from 'react-native'
import { FocusedStatusBar, HomeHeader, NFTCard } from '../components'
import { COLORS, nftData } from '../constants'

export const Home = () => {
  const [searchNFTData, setSearchNFTData] = useState(nftData)

  const handleSearch = (searchInput) => {
    const filteredNFTData = nftData.filter(
      ({ name, description }) =>
        name.toLowerCase().includes(searchInput.toLowerCase()) ||
        description.toLowerCase().includes(searchInput.toLowerCase())
    )

    setSearchNFTData(filteredNFTData)
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary} />

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={searchNFTData}
            keyExtractor={({ id }) => id}
            renderItem={({ item }) => <NFTCard data={item} />}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader handleSearch={handleSearch} />}
          />
        </View>

        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }} />
          <View style={{ flex: 1, backgroundColor: COLORS.white }} />
          <View />
        </View>
      </View>
    </SafeAreaView>
  )
}
