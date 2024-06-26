import React, { memo } from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
} from 'react-native';


const Background = ({children}) => (
  <ImageBackground
    source={require('../../assets/background_dot2x.png')}
    resizeMode="repeat"
    style={styles.background}
  >
    <View style={styles.container} behavior="padding">
      {children}
    </View>
  </ImageBackground>
);

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
  },
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
    maxWidth: 340,
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default memo(Background);