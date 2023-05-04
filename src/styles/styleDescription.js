import { StyleSheet, useWindowDimensions } from 'react-native';



const styles = StyleSheet.create ({
    
screen: {
  backgroundColor:'white',
  position:"absolute",
  top:"0%",
  right:"0%",
  left:"0%",
  bottom:"0%"
},
 scrollView:{
  backgroundColor:"white",
  //backgroundColor:"#103B74",
  borderRadius:25,
  position:"absolute",
  top:"60%",
  bottom:'9%',
  left:"3%",
  right:"3%",
},
view:{
  backgroundColor:"white",
  borderRadius:20,
  position:"relative",
  top:"1.5%",
  marginBottom:"7%",
  height:500,
  left:"2%",
  width:'96%',
  bottom:"0%"
},
textTitle:{
  backgroundColor:"white",
  color:"black",
  fontSize:20,
  fontWeight:"bold",
  position:"absolute",
  top:"0%",
  left:"3%",
  right:"0%",
  width:"92%",
},
textTitle2:{
  backgroundColor:"white",
  color:"black",
  fontSize:20,
  fontWeight:"bold",
  position:"absolute",
  top:"35%",
  left:"3%",
  right:"0%",
  width:"92%",
},
textTitle3:{
  backgroundColor:"white",
  color:"black",
  fontSize:20,
  fontWeight:"bold",
  position:"absolute",
  top:"70%",
  left:"3%",
  right:"0%",
  width:"92%",
},
textName:{
  backgroundColor:"white",
  color:"black",
  fontSize:20,
  position:"absolute",
  top:"7%",
  left:"3%",
  right:"0%",
  width:"92%",
},
viewImages:{
  backgroundColor:"red",
  height:"1%",
  left:"0%",
  width:"10%",
  top:"6%"
},image1: {
  // backgroundColor:'#FFFFFF',
  position:"relative",
 left:"5%",
width:"90%",
 height:"68%",
 top:"7%"
}
})

export default styles;