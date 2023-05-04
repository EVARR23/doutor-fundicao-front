import React from "react";
import {Image, View} from 'react-native';
import styles from '../styles/styleLogo';

export default function Logo(){
  return(
  
  <View style={styles.logo}>
 
 <Image style={styles.imageLogo} source={ require ('../assets/logo.png')}/>
  
  </View>
  )
}