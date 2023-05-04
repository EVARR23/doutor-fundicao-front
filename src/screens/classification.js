import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import Carousel1 from '../componentes/carousel1/carousel1';
import Logo from '../componentes/logo';
import Border from '../componentes/border';
import styles from '../styles/styleClassification';
import Navbar from '../componentes/navbar';
import getAllClassifications from '../api/getAllClassification';

export default function Classification({ navigation }) {

  const [subClassifications, setSubClassifications] = useState([]);

useEffect(() => {
    const fetchSubClassifications = async () => {
      const classification = await getAllClassifications();
      // Espera todas as Promises serem resolvidas e extrai os dados
      const data = await   Promise.all(classification);
      setSubClassifications(data.flat());
    };
    fetchSubClassifications();
  }, []);

  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    getAllClassifications()
      .then(data => {
        setButtons(data.map((item) => (
          <TouchableOpacity 
            key={item.id}
            onPress={() => navigation.navigate('SubClassification',  { id: item.id })}
            style={styles.Buttons}
          >
            {/* <Text style={styles.textCodigo}>{item.id}</Text> */}
            <Text style={styles.textCodigo}>{item.name}</Text>
          </TouchableOpacity>
        )));
      })
      .catch(error => console.error(error));
  }, []);


  return (
    <View style={styles.screen}>
      <Logo />
      <Border />
      <Carousel1 />
      <ScrollView style={styles.scrollView} Vertical={true} showsVerticalScrollIndicator={false}>
        {buttons}
      </ScrollView>
      <Navbar />
    </View>
  );
}

