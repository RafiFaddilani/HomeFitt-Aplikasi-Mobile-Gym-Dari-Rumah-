import {StyleSheet, Text, View, TouchableOpacity, Animated, ActivityIndicator} from 'react-native';
import React, {useState, useRef, useEffect} from 'react';
import {ArrowLeft, More, HuobiToken, Clock, Weight} from 'iconsax-react-native';
import {useNavigation} from '@react-navigation/native';
import {BlogList} from '../../../data';
import FastImage from 'react-native-fast-image';
import { fontType, colors } from '../../themes';
import ActionSheet from 'react-native-actions-sheet';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import axios from 'axios';


const BlogDetail = ({route}) => {
  const {blogId} = route.params;
  const [setIconStates] = useState({
    liked: {variant: 'Linear', color: colors.grey(0.6)},
  });
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const actionSheetRef = useRef(null);
  const openActionSheet = () => {
    actionSheetRef.current?.show();
  };
  const closeActionSheet = () => {
    actionSheetRef.current?.hide();
  };
  useEffect(() => {
    const subscriber = firestore()
      .collection('blog')
      .doc(blogId)
      .onSnapshot(documentSnapshot => {
        const blogData = documentSnapshot.data();
        if (blogData) {
          console.log('Blog data: ', blogData);
          setSelectedBlog(blogData);
        } else {
          console.log(`Blog with ID ${blogId} not found.`);
        }
      });
    setLoading(false);
    return () => subscriber();
  }, [blogId]);
  const navigateEdit = () => {
    closeActionSheet();
    navigation.navigate('EditBlog', {blogId});
  };
  const handleDelete = async () => {
    setLoading(true);
    try {
      await firestore()
        .collection('blog')
        .doc(blogId)
        .delete()
        .then(() => {
          console.log('Blog deleted!');
        });
      if (selectedBlog?.image) {
        const imageRef = storage().refFromURL(selectedBlog?.image);
        await imageRef.delete();
      }
      console.log('Blog deleted!');
      closeActionSheet();
      setSelectedBlog(null);
      setLoading(false)
      navigation.navigate('Post');
    } catch (error) {
      console.error(error);
    }
  };

  const navigation = useNavigation();
  const scrollY = useRef(new Animated.Value(0)).current;
  const diffClampY = Animated.diffClamp(scrollY, 0, 52);
  const headerY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, -52],
  });
  const bottomBarY = diffClampY.interpolate({
    inputRange: [0, 52],
    outputRange: [0, 52],
  });
  const toggleIcon = iconName => {
    setIconStates(prevStates => ({
      ...prevStates,
      [iconName]: {
        variant: prevStates[iconName].variant === 'Linear' ? 'Bold' : 'Linear',
        color:
          prevStates[iconName].variant === 'Linear'
            ? colors.blue()
            : colors.grey(0.6),
      },
    }));
  };
  return (
    <View style={styles.container}>
      <Animated.View
        style={[styles.header, {transform: [{translateY: headerY}]}]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <ArrowLeft color={colors.black(0.6)} variant="Linear" size={24} />
        </TouchableOpacity>
        <View style={{flexDirection: 'row', justifyContent: 'center', gap: 20}}>
          <TouchableOpacity onPress={openActionSheet}>
          <More
            color={colors.black(0.6)}
            variant="Linear"
            style={{transform: [{rotate: '90deg'}]}}
          />
          </TouchableOpacity>
        </View>
      </Animated.View>
      <Animated.ScrollView
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        contentContainerStyle={{
          paddingHorizontal: 24,
          paddingTop: 62,
          paddingBottom: 54,
        }}>
        <FastImage
          style={styles.image}
          source={{
            uri: selectedBlog?.image,
            headers: {Authorization: 'someAuthToken'},
            priority: FastImage.priority.high,
          }}
          resizeMode={FastImage.resizeMode.cover}></FastImage>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 15,
          }}></View>
        <Text style={styles.title}>{selectedBlog?.title}</Text>
        <Text style={styles.category}>{selectedBlog?.category}</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            gap: 55,
            marginTop: 15,
          }}>
          <View style={styles.itemContainer}>
            <View style={[styles.iconBackground, {backgroundColor: '#ffc9bd'}]}>
              <HuobiToken color="#fc0703" variant="Bulk" size={24} />
            </View>
            <Text style={styles.info}> KKAL</Text>
            <Text style={styles.info}>{selectedBlog?.kkal}</Text>
          </View>
          <View style={styles.itemContainer}>
            <View style={[styles.iconBackground, {backgroundColor: '#ffeccc'}]}>
              <Clock color="#FFA500" variant="Linear" size={24} />
            </View>
            <Text style={styles.info}> Duration</Text>
            <Text style={styles.info}>{selectedBlog?.duration}</Text>
          </View>
          <View style={styles.itemContainer}>
            <View style={[styles.iconBackground, {backgroundColor: '#ddffd6'}]}>
              <Weight color="#23c700" variant="Bulk" size={24} />
            </View>
            <Text style={styles.info}> Exercise</Text>
            <Text style={styles.info}>{selectedBlog?.exercise}</Text>
          </View>
        </View>
        <Text style={styles.content}>{selectedBlog?.content}</Text>
        <TouchableOpacity style={styles.buttonContainer}>
          <Text style={styles.buttonText}>Start Now</Text>
        </TouchableOpacity>
      </Animated.ScrollView>
      <ActionSheet
        ref={actionSheetRef}
        containerStyle={{
          borderTopLeftRadius: 25,
          borderTopRightRadius: 25,
        }}
        indicatorStyle={{
          width: 100,
        }}
        gestureEnabled={true}
        defaultOverlayOpacity={0.3}>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={navigateEdit}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Edit
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={handleDelete}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: colors.black(),
              fontSize: 18,
            }}>
            Delete
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            paddingVertical: 15,
          }}
          onPress={closeActionSheet}>
          <Text
            style={{
              fontFamily: fontType['Pjs-Medium'],
              color: 'red',
              fontSize: 18,
            }}>
            Cancel
          </Text>
        </TouchableOpacity>
      </ActionSheet>
    </View>
  );
};
export default BlogDetail;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white(),
  },
  itemContainer: {
    alignItems: 'center',
    gap: 5,
  },
  iconBackground: {
    backgroundColor: '#dcdcdc', // Warna abu-abu
    padding: 10, // Sesuaikan sesuai kebutuhan
    borderRadius: 10, // Sesuaikan sesuai kebutuhan
    alignItems: 'center',
  },
  header: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    paddingTop: 8,
    paddingBottom: 4,
    position: 'absolute',
    zIndex: 1000,
    top: 0,
    right: 0,
    left: 0,
    backgroundColor: colors.white(),
  },
  buttonContainer: {
    backgroundColor: '#3fb1f2', // Warna latar belakang tombol
    padding: 10,
    borderRadius: 15,
    marginTop: 45,
  },
  buttonText: {
    color: '#fff', // Warna teks tombol
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    height: 200,
    width: 'auto',
    borderRadius: 15,
  },
  info: {
    color: colors.black(0.6),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 11,
  },
  category: {
    color: colors.blue(),
    fontFamily: fontType['Pjs-SemiBold'],
    fontSize: 12,
  },
  date: {
    color: colors.grey(0.6),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 10,
  },
  title: {
    fontSize: 16,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
    marginTop: 10,
  },
  content: {
    color: colors.grey(),
    fontFamily: fontType['Pjs-Medium'],
    fontSize: 12,
    lineHeight: 20,
    marginTop: 15,
  },
});