
import {BeginnerrList, IntermediateList} from '../../../data';
import { fontType, colors } from '../../themes';
import { ListHorizontal, ItemSmall } from '../../components';
import { Image, ImageBackground, ScrollView, StyleSheet, View, Text } from 'react-native';
import { Notification } from 'iconsax-react-native';

export default function Home() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Image
            source={require('../../assets/gambar/LogoHF.png')}
            style={styles.logo}
          />
          <Text style={styles.title}>HomeFitt</Text>
        </View>
        <Notification color={colors.black()} variant="Linear" size={24} />
      </View>
      <ListBlog />
    </View>
  );
}
const styles = StyleSheet.create({
  border: {
    backgroundColor: "#31A3F5",
    width: '40%',
    borderBottomRightRadius: 11,
    borderTopRightRadius: 11,
    padding: 8,            // Jarak antara teks dan batas border
  },
  text: {
    fontSize: 16,           // Ukuran teks
    marginLeft: 15,
    marginBottom: 5,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.white(),
  },
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 30,
    height: 35,
    marginRight: 5
  },
  title: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 5,
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  listCategory: {
    paddingVertical: 10,
  },
  listBlog: {
    paddingVertical: 10,
    gap: 10,
  },
});
const category = StyleSheet.create({
  item: {
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 25,
    alignItems: 'center',
    backgroundColor: colors.grey(0.08),
    marginHorizontal: 5
  },
  title: {
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 14,
    lineHeight: 18,
    color: colors.grey(),
  },
})
const ListBlog = () => {
  return (
    <ScrollView>
      <View style={styles.listBlog}>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          vertical
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...itemHorizontal.cardItem }}>
            <ImageBackground
              style={itemHorizontal.cardImageHeader}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://static.vecteezy.com/system/resources/previews/003/127/954/non_2x/abstract-template-blue-background-white-squares-free-vector.jpg',
              }}>
              <Text style={itemHorizontal.cardHeader}>
                Program Latihan
              </Text>
            </ImageBackground>
          </View>
          <View style={styles.border}>
            <Text style={styles.text}>Beginnerr</Text>
          </View>
          {BeginnerrList.map((item, index) => (
            <ListHorizontal item={item} key={index} />
          ))}
        </ScrollView>
        <View style={styles.border}>
          <Text style={styles.text}>Intermediate</Text>
        </View>
        {IntermediateList.map((item, index) => (
          <ListHorizontal item={item} key={index} />
        ))}
        <View style={styles.border}>
          <Text style={styles.text}>Advanced</Text>
        </View>
        {IntermediateList.map((item, index) => (
          <ListHorizontal item={item} key={index} />
        ))}
      </View>
    </ScrollView>
  );
};
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
    borderRadius: 5,
  },
  cardContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  cardInfo: {
    justifyContent: 'flex-end',
    height: '100%',
    gap: 60,
    maxWidth: '60%',
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


