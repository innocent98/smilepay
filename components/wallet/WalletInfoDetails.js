import {View, Text, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import {styles} from '../../constants/utils/styles';
import {COLORS, SIZES} from '../../constants';
import WalletInfoHistory from './WalletInfoHistory';

const WalletInfoDetails = ({refRBSheetForm}) => {
  return (
    <View
      style={[
        styles.accountNoCon,
        {alignItems: 'stretch', backgroundColor: 'transparent'},
      ]}>
      <View
        style={[
          styles.exchangeHistory,
          {marginTop: 20, alignItems: 'flex-start'},
        ]}>
        <Text
          style={[styles.mediumTxt, {fontSize: SIZES.font, textAlign: 'left'}]}>
          Total available balance
        </Text>

        <Text style={[styles.smallTxt, {textAlign: 'right'}]}>$13,878</Text>
      </View>

      <View
        style={[
          styles.exchangeHistory,
          {marginTop: 0, alignItems: 'flex-start'},
        ]}>
        <Text
          style={[styles.mediumTxt, {fontSize: SIZES.font, textAlign: 'left'}]}>
          Wallet type
        </Text>

        <Text style={[styles.smallTxt, {textAlign: 'right'}]}>
          Dollar wallet
        </Text>
      </View>

      <View
        style={[
          styles.exchangeHistory,
          {marginTop: 0, alignItems: 'flex-start'},
        ]}>
        <Text
          style={[styles.mediumTxt, {fontSize: SIZES.font, textAlign: 'left'}]}>
          Currency
        </Text>

        <Text style={[styles.smallTxt, {textAlign: 'right'}]}>
          United States Dollars (USD)
        </Text>
      </View>

      <View style={[styles.horizontalLine, {marginVertical: 30}]}>
        <Image
          source={require('../../assets/dash.png')}
          style={{
            flex: 1,
            resizeMode: 'repeat',
            height: '100%',
            width: '100%',
          }}
        />
      </View>

      <View
        style={[
          styles.exchangeHistory,
          {marginTop: 20, alignItems: 'flex-start'},
        ]}>
        <Text
          style={[styles.mediumTxt, {fontSize: SIZES.font, textAlign: 'left'}]}>
          Bank name 1
        </Text>

        <Text style={[styles.smallTxt, {textAlign: 'right'}]}>Citi bank</Text>
      </View>

      <View
        style={[
          styles.exchangeHistory,
          {marginTop: 0, alignItems: 'flex-start'},
        ]}>
        <Text
          style={[styles.mediumTxt, {fontSize: SIZES.font, textAlign: 'left'}]}>
          Account no.
        </Text>

        <Text style={[styles.smallTxt, {textAlign: 'right'}]}>0023467189</Text>
      </View>

      <View
        style={[
          styles.exchangeHistory,
          {marginTop: 0, alignItems: 'flex-start'},
        ]}>
        <Text
          style={[styles.mediumTxt, {fontSize: SIZES.font, textAlign: 'left'}]}>
          Available balance
        </Text>

        <Text style={[styles.smallTxt, {textAlign: 'right'}]}>$3,878</Text>
      </View>

      <View style={[styles.horizontalLine, {marginVertical: 30}]}>
        <Image
          source={require('../../assets/dash.png')}
          style={{
            flex: 1,
            resizeMode: 'repeat',
            height: '100%',
            width: '100%',
          }}
        />
      </View>

      <View
        style={[
          styles.exchangeHistory,
          {marginTop: 20, alignItems: 'flex-start'},
        ]}>
        <Text
          style={[styles.mediumTxt, {fontSize: SIZES.font, textAlign: 'left'}]}>
          Bank name 2
        </Text>

        <Text style={[styles.smallTxt, {textAlign: 'right'}]}>Delta bank</Text>
      </View>

      <View
        style={[
          styles.exchangeHistory,
          {marginTop: 0, alignItems: 'flex-start'},
        ]}>
        <Text
          style={[styles.mediumTxt, {fontSize: SIZES.font, textAlign: 'left'}]}>
          Account no.
        </Text>

        <Text style={[styles.smallTxt, {textAlign: 'right'}]}>0023467189</Text>
      </View>

      <View
        style={[
          styles.exchangeHistory,
          {marginTop: 0, alignItems: 'flex-start'},
        ]}>
        <Text
          style={[styles.mediumTxt, {fontSize: SIZES.font, textAlign: 'left'}]}>
          Available balance
        </Text>

        <Text style={[styles.smallTxt, {textAlign: 'right'}]}>$3,878</Text>
      </View>

      <View style={[styles.horizontalLine, {marginVertical: 30}]}>
        <Image
          source={require('../../assets/dash.png')}
          style={{
            flex: 1,
            resizeMode: 'repeat',
            height: '100%',
            width: '100%',
          }}
        />
      </View>

      <TouchableHighlight
        style={styles.button}
        onPress={() => {
          refRBSheetForm.current.open();
        }}>
        <Text style={styles.buttonTxt}>Withdraw</Text>
      </TouchableHighlight>

      <View style={[styles.horizontalLine, {marginVertical: 30}]}>
        <Image
          source={require('../../assets/dash.png')}
          style={{
            flex: 1,
            resizeMode: 'repeat',
            height: '100%',
            width: '100%',
          }}
        />
      </View>

      <View style={styles.exchangeHistory}>
        <View>
          <Text style={[styles.mediumTxt, {textAlign: 'left'}]}>
            Recent wallet history
          </Text>
        </View>

        <Text
          style={[
            styles.link,
            {borderBottomWidth: 1, borderBottomColor: COLORS.light.link},
          ]}
          //   onPress={() => refRBSheet.current.open()}
        >
          See all
        </Text>
      </View>

      <WalletInfoHistory />
    </View>
  );
};

export default WalletInfoDetails;
