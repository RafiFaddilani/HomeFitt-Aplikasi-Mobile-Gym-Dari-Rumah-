import { StyleSheet, Text, View, ScrollView, Image } from 'react-native';
import React from 'react';
import { Flash, LampCharge, SearchNormal } from 'iconsax-react-native';
import { BeginnerrList, DailyList, } from '../../../data';
import { ListHorizontal } from '../../components';
import { fontType, colors } from '../../themes';
import ListDaily from '../../components/ListDaily';

const Bookmark = () => {
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
        <SearchNormal color={colors.black()} variant="Linear" size={25} />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ gap: -5, paddingVertical: 10 }}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: 10 }}>
  <Text style={styles.text}>For you</Text>
  <LampCharge color={colors.yellow()} variant="Bulk" size={25} />
</View>
          <ListDaily data={DailyList} />
        </View>
        <View style={{gap: 15}}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10, paddingVertical: -15 }}>
          <Text style={styles.text}>Fast workout</Text>
          <Flash color={colors.yellow()} variant="Bold" size={25} />
        </View>
          {BeginnerrList.map((item, index) => (
            <ListHorizontal item={item} key={index} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
export default Bookmark;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  text: {
    fontSize: 20,           // Ukuran teks
    marginLeft: 23,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  header: {
    paddingHorizontal: 24,
    gap: 30,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4,
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
    letterSpacing: -0.3,
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 30,
    height: 35,
    marginRight: 5
  },
});
