import React, { useState, useEffect } from 'react';
import { View, ScrollView, Button } from 'react-native';
import getAllClassificacoes from '../api/getAllClassification';
import styles from '../styles/styleCarousel1';


const MyComponent = () => {
  const [data, setData] = useState([]);
  const [buttons, setButtons] = useState([]);

  useEffect(() => {
    getAllClassificacoes()
      .then(data => {
        setData(data);
        setButtons(data.map((item) => (
          <Button 
            key={item.id} 
            title={item.name} 
            onPress={() => console.log(item)} 
          />
        )));
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <View>
      <ScrollView style= {styles.carousel2} Vertical={true} showsVerticalScrollIndicator={false}>
        {buttons}
      </ScrollView>
    </View>
  );
};

export default MyComponent;
