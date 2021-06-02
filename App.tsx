import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';

import {CuadroMagicoScreen} from './src/screens/CuadroMagicoScreen';
import {styles} from './src/theme/AppTheme';

const App = () => {
  return (
    <SafeAreaView style={styles.background}>
      <StatusBar barStyle="dark-content" backgroundColor="#f7f7f7" />
      <CuadroMagicoScreen />
    </SafeAreaView>
  );
};

export default App;
