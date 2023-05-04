import { StyleSheet, useWindowDimensions } from 'react-native';



const styles = StyleSheet.create ({

carousel1: {
    backgroundColor:'#FFFFF',
    height:'17%',
    position:"absolute",
    top:"15.5%",
    right:"0%",
    left:"1%",
    bottom:"0%"
},
flatList: {
    backgroundColor:'#FFFFF',
    left:"0%",
    height:"100%",
    position:"absolute",
    top:"0%",
    right:"0%",
    left:"0%",
    bottom:"0%"
},
viewImages:{
    height:"100%",
    left:"50%",
    right:"0%",
    top:"0%"
},imagesCarousel1: {
    // backgroundColor:'#FFFFFF',
   width:270,
   left:"0%",
   height:"100%",
   top:"0%"
 },
 imagesCarousel2: {
    // backgroundColor:'#FFFFFF',
   width:270,
   left:"20%",
   height:"100%",
   top:"0%"
 },
 imagesCarousel3: {
    // backgroundColor:'#FFFFFF',
   width:270,
   left:"40%",
   height:"100%",
   top:"0%"
 }


})

export default styles;