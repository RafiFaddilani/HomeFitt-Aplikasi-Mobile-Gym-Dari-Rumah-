import { Image, ScrollView, StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';
import { ShieldTick, Logout, Profile2User, Like1 } from 'iconsax-react-native';
import React from 'react';
import FastImage from 'react-native-fast-image';
import { ProfileData } from '../../../data';
import { fontType, colors } from '../../themes';
import { Setting2, Edit } from "iconsax-react-native";
import { useNavigation } from "@react-navigation/native";

const formatNumber = number => {
  if (number >= 1000000000) {
    return (number / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
  }
  if (number >= 1000000) {
    return (number / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
  }
  if (number >= 1000) {
    return (number / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
  }
  return number.toString();
};

const Profile = () => {
  const navigation = useNavigation();
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
       
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 10,
          // paddingVertical: 20,
        }}>
        <ImageBackground
          resizeMode='cover'
          source={{
            uri: 'https://img.freepik.com/free-photo/low-angle-man-training-gym_23-2149517298.jpg?w=740&t=st=1697365388~exp=1697365988~hmac=af723ae396d31fb46e243c4ab84cd769de59dababd7a620e2455bb3f475ccad4',
          }}
          style={{ height: 200, }}>

        </ImageBackground>
        <View style={{ flex: 1, marginTop: -50, backgroundColor: 'white', borderRadius: 25 }}>

          <View style={{ gap: 15, alignItems: 'center', marginHorizontal: 24 }}>
            <View style={{alignItems: 'center', justifyContent: 'center', marginBottom: 40}}>
              <FastImage
                style={profile.pic}
                source={{
                  uri: ProfileData.profilePict,
                  headers: { Authorization: 'someAuthToken' },
                  priority: FastImage.priority.high,
                }}
                resizeMode={FastImage.resizeMode.cover}
              />
            </View>
            <View style={{ gap: 5, alignItems: 'center' }}>
              <Text style={profile.name}>{ProfileData.name}</Text>
            </View>
            <TouchableOpacity style={profile.buttonEdit}onPress={() => navigation.navigate("AddBlog")}>
              <Text style={profile.buttonText}>Edit Profile</Text>
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 30 }}>
              <View style={{ flex: 1, alignItems: 'center', gap: 5, backgroundColor: '#63b9ff', padding: 10, borderRadius: 10 }}>
                <Text style={profile.sum}>{ProfileData.Latihan}</Text>
                <Text style={profile.tag}>Latihan</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', gap: 5, backgroundColor: '#63b9ff', padding: 10, borderRadius: 10 }}>
                <Text style={profile.sum}>
                  {formatNumber(ProfileData.Kalori)}
                </Text>
                <Text style={profile.tag}>KKAL</Text>
              </View>
              <View style={{ flex: 1, alignItems: 'center', gap: 5, backgroundColor: '#63b9ff', padding: 10, borderRadius: 10 }}>
                <Text style={profile.sum}>
                  {formatNumber(ProfileData.menit)}
                </Text>
                <Text style={profile.tag}>Menit</Text>
              </View>
            </View>
          </View>
        </View>
        <View
          style={{
            alignItems: 'flex-start',
            gap: 20,
            flexDirection: 'column',
            backgroundColor: '#f2f2f2',
            borderRadius: 10,
            padding: 10,
            marginHorizontal: 24,
            marginBottom: 20
          }}>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
              <Profile2User color={'#30a2ff'} variant={'Bulk'} size={25} />
              <Text style={profile.setting}>Gender</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
              <Like1 color={'#30a2ff'} variant={'Bulk'} size={25} />
              <Text style={profile.setting}>Beri kami nilai</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
              <ShieldTick color={'#30a2ff'} variant={'Bulk'} size={25} />
              <Text style={profile.setting}>Privacy Policy</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 20, alignItems: 'center' }}>
              <Logout color={'#30a2ff'} variant={'Bulk'} size={25} />
              <Text style={profile.setting}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      {/* <TouchableOpacity
      style={styles.floatingButton}
      onPress={() => navigation.navigate("AddBlog")}>
      <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity> */}
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
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
    justifyContent: 'flex-start',
  },
  logo: {
    width: 30,
    height: 35,
    marginRight: 5
  },
  title: {
    fontSize: 20,
    fontFamily: fontType['Pjs-ExtraBold'],
    color: colors.black(),
  },
  floatingButton: {
    backgroundColor: '#63b9ff',
    padding: 15,
    position: 'absolute',
    bottom: 24,
    right: 24,
    borderRadius: 10,
    shadowColor: colors.blue(),
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
});
const profile = StyleSheet.create({
  pic: { width: 100, height: 100, borderRadius: 50, position: 'absolute', zIndex: 2, },
  name: {
    color: colors.black(),
    fontSize: 20,
    fontFamily: fontType['Pjs-Bold'],
    textTransform: 'capitalize'
  },
  setting: {
    color: colors.black(),
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    textTransform: 'capitalize'
  },
  sum: {
    fontSize: 16,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.white(),
  },
  tag: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Regular'],
    color: colors.white,
  },
  buttonEdit: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    backgroundColor: colors.grey(0.1),
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 14,
    fontFamily: fontType['Pjs-SemiBold'],
    color: colors.black(),
  },
});