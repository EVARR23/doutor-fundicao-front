import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import Carousel1 from '../componentes/carousel1/carousel1';
import Logo from '../componentes/logo';
import Border from '../componentes/border';
import styles from '../styles/styleSubClassification';
import Navbar from '../componentes/navbar';
import { getSubClassifications } from '../api/getSubClassification';

const SubClassification = ({ route, navigation}) => {
  const { id } = route.params;
  const [subClassifications, setSubClassifications] = useState([]);

  useEffect(() => {
    const fetchSubClassifications = async () => {
      const subClassificationsData = await getSubClassifications();
      setSubClassifications(subClassificationsData);
    };
    fetchSubClassifications();
  }, [id]);

  return (
    <View style={styles.screen}>
      <Logo />
      <Border />
      <Carousel1 />
      <Text>{id}</Text>
      <ScrollView style={styles.scrollView} Vertical={true} showsVerticalScrollIndicator={false}>
        {subClassifications.map((item) => {
          if (item.idClassificacao === id) {
            return (
              <TouchableOpacity 
                key={item.id} 
                onPress={() => navigation.navigate('Characterization', { id : item.id })}
                style={styles.Buttons}
              >
                <Text style={styles.textCodigo}>{item.descricao}</Text>
              </TouchableOpacity>
            )
          }
        })}
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default SubClassification;

