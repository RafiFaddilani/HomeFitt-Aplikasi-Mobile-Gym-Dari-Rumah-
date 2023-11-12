import { StyleSheet, Text, View, FlatList, TouchableOpacity, ImageBackground } from 'react-native';
import React, { useState } from 'react';
import { Receipt21 } from 'iconsax-react-native';
import { fontType, colors } from '../themes';
const ListHorizontal = ({ item }) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  return (
    <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
      <ImageBackground
        style={itemHorizontal.cardImage}
        resizeMode="cover"
        imageStyle={{ borderRadius: 10 }}
        source={{
          uri: item.image,
        }}>
        <View style={itemHorizontal.cardContent}>
          <View style={itemHorizontal.cardInfo}>
            <Text style={itemHorizontal.cardTitle}>
              {item.title}
            </Text>
            <Text style={itemHorizontal.cardText}>{item.description}</Text>
          </View>
          <View style={{position:'absolute', right: 0, top: 10}}>
            <TouchableOpacity onPress={() => toggleBookmark(item.id)}>
              <Receipt21 color='white' size={20} variant={bookmark.includes(item.id) ? 'Bold' : 'Linear'} />
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
export default ListHorizontal;
const itemHorizontal = StyleSheet.create({
  cardItem: {
    width: 265,
  },
  cardImageHeader: {
    width: '117%',
    height: 130,
    borderRadius: 11,
  },
  cardImage: {
    width: '108%',
    height: 130,
    borderRadius: 10,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'space-between',
    height: '100%',
    gap: 50,
    // maxWidth: '60%',
  },
  cardTitle: {
    fontFamily: fontType['Pjs-Bold'],
    fontSize: 20,
    color: colors.white(),
  },
  cardHeader: {
    fontFamily: fontType['Pjs-Bold'],
    marginLeft: 10,
    marginTop: 10,
    fontSize: 22,
    color: colors.white(),
  },
  cardText: {
    fontSize: 14,
    color: colors.white(),
    fontFamily: fontType['Pjs-Medium'],
  },
  cardIcon: {
    backgroundColor: colors.white(0.33),
    padding: 5,
    borderColor: colors.white(),
    borderWidth: 0.5,
    borderRadius: 5,
  },
});