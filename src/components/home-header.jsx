import { useState } from 'react'
import { Image, Text, TextInput, View, TouchableOpacity } from 'react-native'
import { ASSETS, COLORS, FONTS, SIZES } from '../constants'

export const HomeHeader = ({ handleSearch }) => {
  const [search, setSearch] = useState('')

  const handleChangeText = (value) => {
    setSearch(value)
    handleSearch(value)
  }

  return (
    <View
      style={{
        backgroundColor: COLORS.primary,
        padding: SIZES.font,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Image
          source={ASSETS.logo}
          resizeMode="contain"
          style={{ width: 90, height: 25 }}
        />
        <View style={{ width: 45, height: 45 }}>
          <Image
            source={ASSETS.person04}
            resizeMode="contain"
            style={{ width: '100%', height: '100%' }}
          />
          <Image
            style={{
              position: 'absolute',
              width: 18,
              height: 18,
              bottom: -3,
              right: 0,
            }}
            resizeMode="contain"
            source={ASSETS.badge}
          />
        </View>
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: SIZES.small,
            color: COLORS.white,
          }}
        >
          Hello, Karina 👋
        </Text>
        <Text
          style={{
            fontFamily: FONTS.bold,
            fontSize: SIZES.large,
            color: COLORS.white,
            marginTop: SIZES.base / 2,
          }}
        >
          Let's find a masterpiece
        </Text>

        <View style={{ marginTop: SIZES.font }}>
          <View
            style={{
              flexDirection: 'row',
              width: '100%',
              borderRadius: SIZES.font,
              alignItems: 'center',
              paddingHorizontal: SIZES.font,
              paddingVertical: SIZES.small - 2,
              backgroundColor: COLORS.gray,
            }}
          >
            <Image
              source={ASSETS.search}
              resizeMode="contain"
              style={{ width: 20, height: 20, marginRight: SIZES.base }}
            />
            <TextInput
              placeholder="Search NFTs"
              style={{ flex: 1 }}
              value={search}
              onChangeText={handleChangeText}
            />
            {search && (
              <TouchableOpacity onPress={() => handleChangeText('')}>
                <Image
                  source={ASSETS.clear}
                  resizeMode="cover"
                  style={{ width: 25, height: 20, marginLeft: SIZES.base }}
                />
              </TouchableOpacity>
            )}
          </View>
        </View>
      </View>
    </View>
  )
}
