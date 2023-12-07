import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableWithoutFeedback,
  ActivityIndicator,
  RefreshControl,
  TouchableOpacity,
} from 'react-native';
import React, {useState, useCallback} from 'react';
import {Edit, LampCharge, SearchNormal} from 'iconsax-react-native';
import {ItemPost, ItemSmall, ListHorizontal} from '../../components';
import {useNavigation, useFocusEffect} from '@react-navigation/native';
import {fontType, colors} from '../../themes';
import ListDaily from '../../components/ListDaily';
import axios from 'axios';

const Post = () => {

  const navigation = useNavigation();
  const [loading, setLoading] = useState(true);
  const [blogData, setBlogData] = useState([]);
  const [refreshing, setRefreshing] = useState(false);
  const getDataBlog = async () => {
    try {
      const response = await axios.get(
        'https://656deec3bcc5618d3c24415f.mockapi.io/Post',
      );
      setBlogData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getDataBlog();
      setRefreshing(false);
    }, 1500);
  }, []);

  useFocusEffect(
    useCallback(() => {
      getDataBlog();
    }, []),
  );
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback
        onPress={() => navigation.navigate('SearchPage')}>
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
      </TouchableWithoutFeedback>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{gap: -5, paddingVertical: 10}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              paddingVertical: 10,
            }}>
            <Text style={styles.text}>Post Workout</Text>
            <LampCharge color={colors.yellow()} variant="Bulk" size={25} />
          </View>
        </View>
        <View style={{gap: 15}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              gap: 10,
              paddingVertical: -15,
            }}>
            {loading ? (
              <ActivityIndicator size={'large'} color={colors.blue()} />
            ) : (
              blogData.map((item, index) => (
                <ItemSmall item={item} key={index} />
              ))
            )}
          </View>
        </View>
      </ScrollView>
      <TouchableOpacity
        style={styles.floatingButton}
        onPress={() => navigation.navigate('AddBlog')}>
        <Edit color={colors.white()} variant="Linear" size={20} />
      </TouchableOpacity>
    </View>
  );
};
export default Post;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  text: {
    fontSize: 20, // Ukuran teks
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
    marginRight: 5,
  },
  floatingButton: {
    backgroundColor: colors.blue(),
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
