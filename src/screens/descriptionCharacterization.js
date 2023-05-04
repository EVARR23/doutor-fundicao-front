import React, { useState, useEffect } from 'react';
import { View, Image, TouchableOpacity, ScrollView, Text } from 'react-native';
import Logo from '../componentes/logo';
import Border from '../componentes/border';
import Navbar from '../componentes/navbar';
import styles from '../styles/styleDescription';
import Image1 from '../componentes/imageDescriptionCharacterization';

import { getCharacterization } from '../api/getCharacterization';

const DescriptionCharacterization = ({ route, navigation}) => {
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
      <Image1/>
      <ScrollView style={styles.scrollView} Vertical={true} showsVerticalScrollIndicator={false}>
        {characterization.map((item) => {
          if (item.id === id) {
            return (
              <View
                key={item.id} 
                style={styles.view}
              >
                <Text style={styles.textTitle}>Caracterização:</Text>
                <Text style={styles.textName}>{item.name}</Text>
                <Text style={styles.textTitle2}>Como se forma:</Text>
                <Text style={styles.textTitle3}>Possíveis Soluções:</Text>
              </View>
            )
          }
        })}
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default DescriptionCharacterization;

