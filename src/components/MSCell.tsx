import React from 'react';
import {
  StyleProp,
  Text,
  TextStyle,
  TouchableWithoutFeedback,
  View,
  ViewStyle,
} from 'react-native';
import { styles } from '../theme/AppTheme';
import { DataCell } from '../types';

interface MSCellProps {
  value: string;
  position: string;
  viewStyle?: any;
  textStyle?: any;
  size?: number;
  action: (data: DataCell) => void;
}

export const MSCell = ({
  value = '',
  textStyle = {},
  position,
  size = 100,
  action,
}: MSCellProps) => {
  return (
    <TouchableWithoutFeedback onPress={() => action({ position, value })}>
      <View style={{ ...styles.cell, width: size, height: size }}>
        <Text style={{ ...textStyle, ...styles.cellText }}>{value}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
};
