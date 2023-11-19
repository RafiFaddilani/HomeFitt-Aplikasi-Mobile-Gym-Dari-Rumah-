import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React, { useState } from 'react';
import { fontType, colors } from '../themes';

const ItemDiscover = ({ item, variant, onPress }) => {
  return (
    <TouchableOpacity>
    <View style={itemHorizontal.listCard}>
      <View style={itemHorizontal.cardItem1}>
        <Image style={itemHorizontal.cardImage} source={{ uri: item.image }} />
      </View>
      <View style={{ gap: 5, height: 'auto' }}>
        <Text style={itemHorizontal.cardCategory}>{item.title}</Text>
        <Text style={itemHorizontal.cardTitle}>{item.description}</Text>
      </View>
    </View>
    </TouchableOpacity>
  );
};
const ListToday = ({ data }) => {
  const [bookmark, setBookmark] = useState([]);
  const toggleBookmark = itemId => {
    if (bookmark.includes(itemId)) {
      setBookmark(bookmark.filter(id => id !== itemId));
    } else {
      setBookmark([...bookmark, itemId]);
    }
  };
  const renderItem = ({ item }) => {
    variant = bookmark.includes(item.id) ? 'Bold' : 'Linear';
    return (
      <ItemDiscover
        item={item}
        variant={variant}
        onPress={() => toggleBookmark(item.id)}
      />
    );
  };
  return (
    <FlatList
      data={data}
      keyExtractor={item => item.id}
      renderItem={item => renderItem({ ...item })}
      ItemSeparatorComponent={() => <View style={{ width: 0 }} />}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
};
export default ListToday;
const itemHorizontal = StyleSheet.create({
  listCard: {
    marginLeft: 20,
    paddingVertical: 10,
  },
  cardCategory: {
    marginTop: 10,
    color: 'black',
    fontSize: 15,
    fontFamily: fontType['Pjs-Bold'],
  },
  cardTitle: {
    marginBottom: 10,
    fontSize: 12,
    fontFamily: fontType['Pjs-regular'],
    color: 'black',
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 200,
    height: 200,
    backgroundColor: '#A8DF8E',
    borderRadius: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    justifyContent: 'space-between',
    flex: 1,
  },
});
