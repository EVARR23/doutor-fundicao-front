import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import Carousel from '../componentes/carouselCharacterization/carousel1';
import Logo from '../componentes/logo';
import Border from '../componentes/border';
import styles from '../styles/styleCharacterization';
import Navbar from '../componentes/navbar';
import { getCharacterization } from '../api/getCharacterization';

const Characterization = ({ route, navigation}) => {
  const { id } = route.params;
  const [characterization, setCharacterization] = useState([]);

  useEffect(() => {
    const fetchCharacterization = async () => {
      const subClassificationsData = await getCharacterization();
      setCharacterization(subClassificationsData);
    };
    fetchCharacterization();
  }, [id]);

  return (
    <View style={styles.screen}>
      <Logo />
      <Border />
      <Carousel/>
      <Text>{id}</Text>
      <ScrollView style={styles.scrollView} Vertical={true} showsVerticalScrollIndicator={false}>
        {characterization.map((item) => {
          if (item.idSubclassificacao === id) {
            return (
              <TouchableOpacity 
                key={item.id} 
                onPress={() => navigation.navigate('DescriptionCharacterization', { id : item.id })}
                style={styles.Buttons}
              >
                <Text style={styles.textCodigo}>{item.codigo}  - </Text>
                <Text style={styles.textTipo}>{item.tipo}</Text>
              </TouchableOpacity>
            )
          }
        })}
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default Characterization;

