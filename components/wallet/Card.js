import {
  View,
  Text,
  Image,
  FlatList,
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {styles} from '../../constants/utils/styles';
import {COLORS, SIZES} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const data = [{id: 1}, {id: 2}];

const Card = ({refRBSheetForm, setIsNewWallet, setIsFund}) => {
  const navigation = useNavigation();

  return (
    <View
      style={[
        styles.accountNoCon,
        {
          backgroundColor: COLORS.light.primary,
          alignItems: 'flex-start',
          padding: 24,
          width: 350,
        },
      ]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate('WalletInfo')}>
        <View style={{flexDirection: 'row', alignItems: 'center', gap: 10}}>
          <Image
            source={require('../../assets/us.png')}
            style={{height: 40, width: 40}}
            resizeMode="contain"
          />

          <Text
            style={[styles.smallTxt, {marginBottom: 0, fontSize: SIZES.large}]}>
            Dollar wallet
          </Text>

          <View style={styles.badge}>
            <Text style={[styles.smallTxt, {marginBottom: 0}]}>2</Text>
          </View>
        </View>

        <Text
          style={[
            styles.mediumTxt,
            {textAlign: 'left', color: COLORS.light.gray, marginTop: 20},
          ]}>
          USD Balance
        </Text>

        <View style={[styles.exchangeHistory, {marginTop: 10, width: '100%'}]}>
          <Text
            style={[
              styles.mediumTxt,
              {textAlign: 'left', color: COLORS.light.backgroundSoft},
            ]}>
            $13,878
          </Text>

          <Text
            style={[
              styles.smallTxt,
              {
                marginBottom: 0,
                borderBottomWidth: 1,
                borderBottomColor: COLORS.light.gray,
              },
            ]}
            onPress={() => {
              refRBSheetForm.current.open();
              setIsNewWallet(false);
              setIsFund(true);
            }}>
            Fund wallet
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const Cards = ({refRBSheetForm, setIsNewWallet, setIsFund}) => {
  const renderItem = ({item}) => (
    <Card
      data={item}
      refRBSheetForm={refRBSheetForm}
      setIsFund={setIsFund}
      setIsNewWallet={setIsNewWallet}
    />
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      contentContainerStyle={{gap: 10}}
      horizontal
      pagingEnabled
      showsHorizontalScrollIndicator={false}
    />
  );
};

export default Cards;
