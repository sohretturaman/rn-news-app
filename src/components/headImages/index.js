import React, {useRef, useState} from 'react';
import {
  View,
  Dimensions,
  StyleSheet,
  Animated,
  PanResponder,
  Image,
  TouchableOpacity,
} from 'react-native';
import DummyData from '../../assets/DummyData';
import { RouterNames } from '../../config';

const {width} = Dimensions.get('window');

//console.log('data images', data);

const HeaderImages = (props) => {
  const {data,navigation} = props;
console.log('data in head images', data[0])

  const [currentIndex, setCurrentIndex] = useState(0);
  const pan = useRef(new Animated.Value(0)).current;
 

  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: () => true,
      onPanResponderMove: Animated.event([null, {dx: pan}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (e, {dx}) => {
        if (dx > 50) {
          // Swiped right
          handleSwipe(-1);
        } else if (dx < -50) {
          // Swiped left
          handleSwipe(1);
        } else {
          // Return to original position
          Animated.spring(pan, {
            toValue: 0,
            useNativeDriver: false,
          }).start();
        }
      },
    }),
  ).current;

  const handleSwipe = direction => {
    Animated.timing(pan, {
      toValue: -direction * width, // solved error on swiping opposite sides
      duration: 300,
      useNativeDriver: false,
    }).start(() => {
      setCurrentIndex(
        prevIndex =>
          (prevIndex + direction + data.length) % data.length,
      );
      pan.setValue(-10 * direction);
    });
  };

  const currentImageIndex = currentIndex % data.length;
  const nextImageIndex = (currentIndex + 1) % data.length;
  const prevImageIndex =
    (currentIndex - 1 + data.length) % data.length;

 
    const onPressImage =(itemInfo)=>{
      console.log('pressed on image')
      navigation.navigate(RouterNames.DETAIL,{item:itemInfo})
    }
  
  return (
    <View style={styles.container}>
      <View style={styles.imageStack}>
        <Image
          source={{uri: data[prevImageIndex].image}}
          style={[styles.image, styles.image2]}
        />
        <Animated.View
          style={[
            styles.imageContainer,
            {
              transform: [{translateX: pan}],
            },
          ]}
          {...panResponder.panHandlers}
           
          >
            <TouchableOpacity 
             onPress={()=> onPressImage(data[currentImageIndex])}
            >
            <Animated.Image
            source={{uri: data[currentImageIndex].image}}
            style={styles.image}
          />
            </TouchableOpacity>
        
        </Animated.View>
        <Image
          source={{uri: data[nextImageIndex].image}}
          style={[styles.image, styles.image3]}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: width * 0.5,
    width: width,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  imageStack: {
    position: 'relative',
    width: width * 0.9,
    height: width * 0.5 + 30,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
  },
  //animated
  imageContainer: {
    width: width * 0.6,
    height: width * 0.5,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    zIndex: 1,
  },
  image: {
    width: width * 0.6,
    height: width * 0.5,
    resizeMode: 'cover',
    borderRadius: 20,
  },
  image2: {
    position: 'absolute',
    left: width * 0.05,
    width: width * 0.5,
    height: width * 0.42,
  },
  image3: {
    position: 'absolute',
    right: width * 0.03,
    width: width * 0.5,
    height: width * 0.42,
  },
});

export default HeaderImages;
