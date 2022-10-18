import {StyleSheet, Dimensions} from 'react-native';

const deviceSize = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#64b5f6',
  },
  logo: {
    height: deviceSize.height / 3,
    width: deviceSize.width,
    resizeMode: 'contain',
    marginTop: 20,
    marginBottom: 20,
  },
  logo_container: {
    flex: 1,
  },
  body_container: {
    flex: 1,
  },
});
