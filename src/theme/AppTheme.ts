import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  background: {
    backgroundColor: '#f7f7f7',
    flex: 1,
  },
  container: {
    padding: 14,
    flex: 1,
  },
  magicSquareContainer: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
  },
  cell: {
    // flex: 1,
    // flexBasis: 340 / 3,
    // height: 340 / 3,
    borderColor: '#000',
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
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
    width: '90%',
    alignSelf: 'center',
    backgroundColor: 'transparent',
    justifyContent: 'center',

    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  row: {
    flexDirection: 'row',
  },
  keyboardRow: {
    flexDirection: 'row',
    marginBottom: 4,
  },
  keyboard: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  keyboarbutton: {
    height: 80,
    borderRadius: 10,
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
