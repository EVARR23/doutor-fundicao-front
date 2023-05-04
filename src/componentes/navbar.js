import React from "react";
import {Image, View} from 'react-native';
import styles from "../styles/styleNavbar";
import LinearGradient from 'react-native-linear-gradient';


export default function Navbar(){
  return(
  <View style={styles.Navbar}>
  <LinearGradient style={styles.gradient}
        colors={['gray', 'lightgray', '#fff']}
        
      />
  </View>
  )
}