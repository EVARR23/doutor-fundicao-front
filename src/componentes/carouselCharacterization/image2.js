import React from "react";
import {Image, View} from 'react-native';
import styles from '../../styles/styleCarousel1';

export default function Image2(){
  return(
  
  <View style= {styles.viewImages}>
  <Image style= {styles.imagesCarousel2}source={ require ('../../assets/imageponsor2.png')}/>
  </View>
  )
}