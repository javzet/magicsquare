import React from 'react';
import {StyleProp, Text, TextStyle, View, ViewStyle} from 'react-native';
import {styles} from '../theme/AppTheme';

interface MSCellProps {
  value?: string | number;
  viewStyle?: any;
  textStyle?: any;
}

export const MSCell = ({
  value = '',
  viewStyle = {},
  textStyle = {},
}: MSCellProps) => {
  return (
    <View style={[viewStyle, styles.cell]}>
      <Text style={{...textStyle, ...styles.cellText}}>{value}</Text>
    </View>
  );
};
