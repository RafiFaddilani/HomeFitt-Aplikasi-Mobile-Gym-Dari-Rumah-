import React from 'react';
import { ScrollView, StyleSheet, Text, View, Image, ImageBackground } from 'react-native';
import { Notification, Receipt21, Clock, Message } from 'iconsax-react-native';
import { fontType, colors } from './src/assets/themes';
export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>HomeFitt</Text>
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
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    height: 52,
    elevation: 8,
    paddingTop: 8,
    paddingBottom: 4
  },
  title: {
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
            <View style={{ ...itemHorizontal.cardItem}}>
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
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://img.freepik.com/free-photo/man-fitness-workout-shirtless-man-doing-stretching-home_144627-25355.jpg?w=740&t=st=1697364749~exp=1697365349~hmac=78d2156c0a476babe3052d0234e6fd1988e86096b7c8ee49d73aee4eb61891d4',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Seluruh Tubuh
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://img.freepik.com/free-photo/low-angle-man-training-gym_23-2149517298.jpg?w=740&t=st=1697365388~exp=1697365988~hmac=af723ae396d31fb46e243c4ab84cd769de59dababd7a620e2455bb3f475ccad4',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Bagian Bawah
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://img.freepik.com/free-photo/shirtless-bodybuilder-posing-gym_7502-4748.jpg?w=740&t=st=1697365544~exp=1697366144~hmac=256bd3b2d54c45609e8ff756e5a81f9255952d5fabb28689470643a9b911b38f',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Latihan Tangan
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View style={styles.border}>
          <Text style={styles.text}>Intermediate</Text>
        </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          vertical
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://img.freepik.com/free-photo/man-fitness-workout-shirtless-man-doing-stretching-home_144627-25355.jpg?w=740&t=st=1697364749~exp=1697365349~hmac=78d2156c0a476babe3052d0234e6fd1988e86096b7c8ee49d73aee4eb61891d4',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Seluruh Tubuh
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://img.freepik.com/free-photo/low-angle-man-training-gym_23-2149517298.jpg?w=740&t=st=1697365388~exp=1697365988~hmac=af723ae396d31fb46e243c4ab84cd769de59dababd7a620e2455bb3f475ccad4',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Bagian Bawah
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://img.freepik.com/free-photo/shirtless-bodybuilder-posing-gym_7502-4748.jpg?w=740&t=st=1697365544~exp=1697366144~hmac=256bd3b2d54c45609e8ff756e5a81f9255952d5fabb28689470643a9b911b38f',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Latihan Tangan
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
        <View style={styles.border}>
            <Text style={styles.text}>Advanced</Text>
          </View>
        <ScrollView
          showsHorizontalScrollIndicator={false}
          vertical
          contentContainerStyle={{ gap: 15 }}>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://img.freepik.com/free-photo/man-fitness-workout-shirtless-man-doing-stretching-home_144627-25355.jpg?w=740&t=st=1697364749~exp=1697365349~hmac=78d2156c0a476babe3052d0234e6fd1988e86096b7c8ee49d73aee4eb61891d4',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Seluruh Tubuh
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://img.freepik.com/free-photo/low-angle-man-training-gym_23-2149517298.jpg?w=740&t=st=1697365388~exp=1697365988~hmac=af723ae396d31fb46e243c4ab84cd769de59dababd7a620e2455bb3f475ccad4',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Bagian Bawah
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
              </View>
            </ImageBackground>
          </View>
          <View style={{ ...itemHorizontal.cardItem, marginLeft: 24 }}>
            <ImageBackground
              style={itemHorizontal.cardImage}
              resizeMode="cover"
              imageStyle={{ borderRadius: 10 }}
              source={{
                uri: 'https://img.freepik.com/free-photo/shirtless-bodybuilder-posing-gym_7502-4748.jpg?w=740&t=st=1697365544~exp=1697366144~hmac=256bd3b2d54c45609e8ff756e5a81f9255952d5fabb28689470643a9b911b38f',
              }}>
              <View style={itemHorizontal.cardContent}>
                <View style={itemHorizontal.cardInfo}>
                  <Text style={itemHorizontal.cardTitle}>
                    Latihan Tangan
                  </Text>
                  <Text style={itemHorizontal.cardText}>Nov 10, 2023</Text>
                </View>
                <View>
                  <View style={itemHorizontal.cardIcon}>
                    <Receipt21 color={colors.white()} variant="Linear" size={15} />
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
        </ScrollView>
      </View>
    </ScrollView>
  );
};
const itemVertical = StyleSheet.create({
  listCard: {
    paddingHorizontal: 24,
    paddingVertical: 10,
    gap: 15,
  },
  cardItem: {
    backgroundColor: colors.blue(0.03),
    flexDirection: 'row',
    borderRadius: 10,
  },
  cardCategory: {
    color: colors.blue(),
    fontSize: 10,
    fontFamily: fontType['Pjs-SemiBold'],
  },
  cardTitle: {
    fontSize: 14,
    fontFamily: fontType['Pjs-Bold'],
    color: colors.black(),
  },
  cardText: {
    fontSize: 10,
    fontFamily: fontType['Pjs-Medium'],
    color: colors.blue(0.6),
  },
  cardImage: {
    width: 94,
    height: 94,
    borderRadius: 10,
    resizeMode: 'cover',
  },
  cardInfo: {
    flexDirection: 'row',
    gap: 5,
    alignItems: 'center',
  },
  cardContent: {
    gap: 10,
    justifyContent: 'space-between',
    paddingRight: 10,
    paddingLeft: 15,
    flex: 1,
    paddingVertical: 10,
  },
});
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
    fontSize: 10,
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
