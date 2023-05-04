import React from "react";
import {Image, View} from 'react-native';
import styles from '../../styles/styleCarousel1';

export default function Image1(){
  return(
  
  <View style= {styles.viewImages}>
  <Image style= {styles.imagesCarousel1} source={ require ('../../assets/imageponsor1.png')}/>
  </View>
  )
}