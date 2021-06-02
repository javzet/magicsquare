import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  container: {
    padding: 14,
    flex: 1,
  },
  cell: {
    // flex: 1,
    // flexBasis: 340 / 3,
    // height: 340 / 3,
    alignItems: 'center',
    justifyContent: 'center',
    width: 340 / 3,
    height: 340 / 3,
  },
  cellText: {
    // textAlign: 'center',
    // lineHeight: 340 / 3,
    fontSize: 40,
    fontWeight: '700',
  },
  VerticalBorderMiddle: {
    borderRightWidth: 4,
    borderLeftWidth: 4,
    borderRightColor: '#000',
    borderLeftColor: '#000',
  },
  HorizontalBorderMiddle: {
    borderTopWidth: 4,
    borderBottomWidth: 4,
    borderColor: '#000',
  },
  magic_square: {
    // width: 340,
    alignSelf: 'center',
    backgroundColor: 'transparent',

    borderColor: '#000',
    borderWidth: 4,
  },
  row: {
    flexDirection: 'row',
  },
  keyboardRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  keyboard: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboarbutton: {
    width: 80,
    height: 80,
    backgroundColor: '#008bf8',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 2,
  },
  keyboarbuttonText: {
    color: '#fafafa',
    fontSize: 30,
    fontWeight: '300',
  },

  emtyCell: {
    opacity: 0.4,
  },

  generatedNumber: {
    color: '#008bf8',
  },
});
