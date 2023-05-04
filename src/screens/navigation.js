import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Classification from './classification';
import SubClassification from './subClassification';
import Characterization from './characterization';
import DescriptionCharacterization from './descriptionCharacterization';

const Stack = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen options={{ headerShown: false }} name="Classification" component={Classification} />
        <Stack.Screen options={{ headerShown: false }} name="SubClassification" component={SubClassification} />
        <Stack.Screen options={{ headerShown: false }} name="Characterization" component={Characterization} />
        <Stack.Screen options={{ headerShown: false }} name="DescriptionCharacterization" component={DescriptionCharacterization} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


/*import React, { useState } from 'react';
import { View } from 'react-native';
import Classification from './classification';
import SubClassification from './subClassification';
import styles from '../styles/styleClassification';

const Navigation = () => {
  const [currentScreen, setCurrentScreen] = useState('Classification');

  const renderScreen = (screen) => {
    switch (screen) {
      case 'Classification':
        return <Classification style={styles.screen} navigation={{ push: setCurrentScreen }} />;
      case 'SubClassification':
        return <SubClassification style={styles.screen} navigation={{ push: setCurrentScreen, goBack: () => setCurrentScreen('Classification') }} />;
      default:
        return null;
    }
  };

  return <View style={styles.screen}>{renderScreen(currentScreen)}</View>;
};

export default Navigation;
*/



