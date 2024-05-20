import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: winWidth * 0.9,
    height: winWidth * 0.25,
    marginVertical: winWidth * 0.01,
    flexDirection: 'row',
    alignSelf: 'center',
    borderRadius: winWidth * 0.01,
    backgroundColor: '#F1EFEF',
    justifyContent:'center',
    alignItems:'center',
    paddingHorizontal:winWidth*0.02,
    elevation:1,
    shadowColor: '#8B8787',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.3,
    shadowRadius: 3,
  },
  image: {
    width: winWidth * 0.2,
    height: winWidth * 0.2,
    borderRadius: winWidth * 0.01,

  },
  imageWrapper: {
    marginRight: winWidth * 0.03,
  },
  innerContainer: {
    width: winWidth * 0.7,
    flex: 1,
    height: winWidth * 0.2,

    justifyContent: 'space-between',
    paddingVertical: winWidth * 0.01,
  },

  title: {
    fontSize: winWidth * 0.04,
    color: '#333333',
    fontWeight: '500',
  },

  source: {
    fontSize: winWidth * 0.025,
    fontWeight: '500',
    color: '#383838',
  },
  bottomWrapper: {
    
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingRight: winWidth * 0.02,
  },
});

export default styles;
