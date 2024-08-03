import {
  View,
  Text,
  SafeAreaView,
  Image,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import React, {useEffect} from 'react';
import {styles} from '../../constants/utils/styles';
import FocusedStatusBar from '../FocusStatusBar';
import {COLORS} from '../../constants';
import {useNavigation} from '@react-navigation/native';

const Welcome = () => {
  const navigation = useNavigation();

  const timeout = setTimeout(() => {
    navigation.navigate('Login');
  }, 2000);

  useEffect(() => {
    timeout;
  }, [timeout]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <FocusedStatusBar />

      <ScrollView>
        <View style={styles.container}>
          <View style={[styles.containerWrapper, {marginTop: 20}]}>
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

            <Text style={[styles.bigTxt, {marginTop: 0}]}>Welcome :)</Text>

            <ActivityIndicator size="large" color={COLORS.light.primary} />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Welcome;
