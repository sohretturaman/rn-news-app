import {Dimensions, StyleSheet, Text, View} from 'react-native';
const winWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginVertical: winWidth * 0.02,
    minWidth: winWidth * 0.2,
    height: winWidth * 0.08,
    borderRadius: winWidth * 0.02,
    maxWidth: winWidth * 0.25,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: winWidth * 0.01,
  },
  text: {
    fontSize: winWidth * 0.04,
    fontWeight: '500',
  },
});

export default styles;
