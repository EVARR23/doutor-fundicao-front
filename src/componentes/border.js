import React from "react";
import {Image, View} from 'react-native';
import styles from '../styles/styleBorder';
import LinearGradient from 'react-native-linear-gradient';


export default function Border(){
  return(
  <View style={styles.border}>
  <LinearGradient style={styles.gradient}
        colors={['gray', 'lightgray', '#fff']}
        
      />
  </View>
  )
}