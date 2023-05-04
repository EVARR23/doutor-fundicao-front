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
  backgroundColor:"#103B74",
  //backgroundColor:"#103B74",
  borderRadius:25,
  position:"absolute",
  top:"35%",
  bottom:'9%',
  left:"3%",
  right:"3%",
},
Buttons:{
  backgroundColor:"white",
  borderRadius:20,
  position:"relative",
  top:"1.5%",
  marginBottom:"7%",
  height:90,
  left:"2%",
  width:'96%',
  bottom:"0%"
},
viewText:{
  opacity:0.8,
  flex:1,
  alignItems:"center",
  justifyContent:"center",
  textAlign:"center",
  borderWidth:2,
  borderColor:'rgba(255, 115, 0, 0.3)',
  borderRadius:15,
  color:"black",
  fontWeight:"bold",
  position:"absolute",
  top:"11%",
  left:"1%",
  right:"0%",
  bottom:"0%",
  width:"17%",
  height:"78%",
},
textCodigo:{
  color:"black",
  fontSize:18,
  fontWeight:"bold",
  position:"absolute",
  top:"23%",
  left:"4%",
  right:"0%",
  bottom:"0%",
  width:"92%",
  height:"45%",
},
textName:{
  color:"black",
  fontSize:12,
  fontWeight:"bold",
  fontWeight:"bold",
  position:"absolute",
  top:"35%",
  left:"19%",
  right:"0%",
  bottom:"0%"
}
})

export default styles;