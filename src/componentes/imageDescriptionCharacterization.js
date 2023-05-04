import React from "react";
import {Image, View} from 'react-native';
import styles from "../styles/styleDescription";

export default function Image1(){
  return(
  
  <View >
  <Image style= {styles.image1} source={ require ('../assets/characterization1.png')}/>
  </View>
  )
}
