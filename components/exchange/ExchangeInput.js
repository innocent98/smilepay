import {View, Text, Image, TouchableHighlight} from 'react-native';
import React from 'react';
import {styles} from '../../constants/utils/styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-paper';
import {COLORS, SIZES} from '../../constants';
import SelectDropdown from 'react-native-select-dropdown';

const ExchangeInput = ({refRBSheet}) => {
  const countries = ['Egypt', 'Canada', 'Australia', 'Ireland'];

  return (
    <View style={[styles.inputCont, {}]}>
      <View style={[styles.inputWrapper, {flexDirection: 'column'}]}>
        <View style={styles.passwordCon}>
          <TextInput
            style={[
              styles.input,
              {
                marginBottom: 10,
                padding: 0,
                borderTopLeftRadius: SIZES.small,
                borderTopRightRadius: SIZES.small,
                borderWidth: 1,
                borderColor: COLORS.dark.textSoft,
                backgroundColor: COLORS.light.white,
                paddingHorizontal: 30,
              },
            ]}
            label="Amount to exchange"
            placeholder="Enter amount to exchange"
            placeholderTextColor={COLORS.light.primary}
            inputMode="numeric"
            defaultValue="1"
            mode="flat"
            contentStyle={{color: COLORS.light.primary}}
            activeUnderlineColor={COLORS.light.primary}
            underlineColor="transparent"
            outlineColor="transparent"
          />

          <Text
            style={[
              styles.smallTxt,
              {
                position: 'absolute',
                left: 18,
                top: 27,
                color: COLORS.light.primary,
              },
            ]}>
            $
          </Text>

          <Image
            source={require('../../assets/us.png')}
            style={[styles.passwordIcon, {height: 40, width: 40, right: 50}]}
          />

          <Icon
            name="expand-more"
            size={32}
            color={COLORS.light.primary}
            style={styles.passwordIcon}
          />
        </View>

        <View style={styles.exchangeIcon}>
          <Image
            source={require('../../assets/repeat.png')}
            tintColor={COLORS.light.link}
            style={{
              transform: [{rotate: '-90deg'}],
              height: '50%',
              width: '50%',
            }}
            resizeMode="contain"
          />
        </View>

        <View style={[styles.passwordCon, {marginTop: 30}]}>
          <TextInput
            style={[
              styles.input,
              {
                marginBottom: 10,
                padding: 0,
                borderTopLeftRadius: SIZES.small,
                borderTopRightRadius: SIZES.small,
                borderWidth: 1,
                borderColor: COLORS.dark.textSoft,
                backgroundColor: COLORS.light.white,
                paddingHorizontal: 30,
              },
            ]}
            label="Equivalent value"
            placeholder="Amount to receive"
            placeholderTextColor={COLORS.light.primary}
            inputMode="numeric"
            defaultValue="0.84"
            mode="flat"
            contentStyle={{color: COLORS.light.primary}}
            activeUnderlineColor={COLORS.light.primary}
            underlineColor="transparent"
            outlineColor="transparent"
          />

          <Text
            style={[
              styles.smallTxt,
              {
                position: 'absolute',
                left: 18,
                top: 27,
                color: COLORS.light.primary,
              },
            ]}>
            £
          </Text>

          <Image
            source={require('../../assets/bri.png')}
            style={[styles.passwordIcon, {height: 40, width: 40, right: 50}]}
          />

          <Icon
            name="expand-more"
            size={32}
            color={COLORS.light.primary}
            style={styles.passwordIcon}
          />
        </View>

        <View style={styles.exchange}>
          <Text
            style={[styles.smallTxt, {textAlign: 'left', marginBottom: 10}]}>
            *Exchange rate $1 = £0.84
          </Text>
          <Text style={[styles.smallTxt, {textAlign: 'left'}]}>
            *Transaction fee = $0.3
          </Text>
        </View>

        <TouchableHighlight
          style={[styles.button, {marginTop: 50}]}
          onPress={() => refRBSheet.current.open()}>
          <Text style={styles.buttonTxt}>Exchange</Text>
        </TouchableHighlight>

        {/* <SelectDropdown
            data={countries}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              // text represented after item is selected
              // if data array is an array of objects then return selectedItem.property to render after item is selected
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              // text represented for each item in dropdown
              // if data array is an array of objects then return item.property to represent item in dropdown
              return item;
            }}
          /> */}
      </View>
    </View>
  );
};

export default ExchangeInput;
