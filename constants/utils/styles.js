import {Dimensions, StyleSheet} from 'react-native';
import ScreenSizes from './ScreenSizes';
import {COLORS, SIZES} from '../theme';

const {width, height} = ScreenSizes;
const itemWidth = Dimensions.get('window').width;
const itemHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  safeArea: {flex: 1, backgroundColor: COLORS.light.background},
  tabImg: {height: 20, width: 20},

  containerWrapper: {
    marginTop: 30,
    height: itemHeight * 0.95,
    justifyContent: 'space-between',
  },
  container: {
    width: width,
    height: height,
    paddingHorizontal: SIZES.large,
    backgroundColor: COLORS.light.background,
  },

  bigTxt: {
    textAlign: 'center',
    color: COLORS.light.primary,
    fontFamily: 'Inter-Bold',
    fontSize: SIZES.button,
    marginBottom: SIZES.xxxl,
  },
  mediumTxt: {
    textAlign: 'center',
    color: COLORS.light.primary,
    fontFamily: 'Inter-Bold',
    fontSize: SIZES.extraLarge,
  },
  horizontalLine: {
    width: '100%',
    height: 1,
    marginVertical: SIZES.button,
  },
  smallTxt: {
    textAlign: 'center',
    color: COLORS.light.gray,
    marginBottom: SIZES.xxxl,
    fontSize: SIZES.medium,
  },

  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: width,
  },
  inputCont: {justifyContent: 'flex-end'},
  input: {
    backgroundColor: COLORS.light.secondary,
    borderRadius: SIZES.small,
    padding: SIZES.medium,
    color: COLORS.light.gray,
    fontFamily: 'Inter-Medium',
    marginBottom: SIZES.xxxl,
  },

  button: {
    backgroundColor: COLORS.light.primary,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
  },
  buttonTxt: {textAlign: 'center', color: COLORS.light.white},
  link: {color: COLORS.light.link, textAlign: 'center', fontSize: SIZES.medium},
  passwordCon: {position: 'relative'},
  passwordIcon: {position: 'absolute', right: 20, top: 15},
  footer: {position: 'relative', bottom: 0},
  logo: {alignItems: 'center', marginBottom: 20},

  ExchangeTop: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  exchangeIcon: {
    borderColor: COLORS.dark.textSoft,
    borderRadius: 50,
    borderWidth: 1,
    height: 50,
    width: 50,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 0,
    position: 'absolute',
    right: 0,
    top: 52,
    backgroundColor: COLORS.light.background,
    zIndex: 1,
  },

  accountNoCon: {
    backgroundColor: COLORS.dark.textSoft,
    padding: 8,
    borderRadius: 8,
    alignItems: 'center',
  },

  exchangeHistory: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
  },

  badge: {
    height: 40,
    width: 45,
    backgroundColor: COLORS.light.backgroundSoft,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },

  inputError: {
    color: COLORS.light.red,
    fontFamily: 'Inter-Regular',
    textAlign: 'center',
    fontSize: SIZES.medium,
    marginTop: 5,
  },

  tabButton: {flexDirection: 'row', gap: 10},
  button2: {
    backgroundColor: COLORS.dark.textSoft,
    padding: SIZES.medium,
    borderRadius: SIZES.small,
  },
  buttonTxt2: {textAlign: 'center', color: COLORS.light.primary},
});
