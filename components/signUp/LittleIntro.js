import {View, Text, SafeAreaView, Image, ScrollView} from 'react-native';
import React from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {RectButton} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';

const LittleIntro = ({route}) => {
  const navigation = useNavigation();
  const {inputs} = route?.params;

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <ScrollView>
        <View style={styles.container}>
          <View style={styles.containerWrapper}>
            <View style={[styles.horizontalLine, {marginBottom: 0}]}>
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

            <Text style={styles.bigTxt}>
              We’re almost done with your signup, just stay with us a little
              longer :)
            </Text>

            <RectButton
              style={styles.button}
              onPress={() => navigation.navigate('OtherDetails', {inputs})}>
              <Text style={styles.buttonTxt}>Let’s continue</Text>
            </RectButton>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LittleIntro;
