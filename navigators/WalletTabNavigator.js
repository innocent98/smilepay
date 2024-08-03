import {createStackNavigator} from '@react-navigation/stack';
import Wallet from '../screens/Wallet';
import WalletInfo from '../components/wallet/WalletInfo';

const Stack = createStackNavigator();

const WalletTab = () => {
  return (
    <Stack.Navigator
      initialRouteName="Wallets"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Wallets" component={Wallet} />
      <Stack.Screen name="WalletInfo" component={WalletInfo} />
    </Stack.Navigator>
  );
};

export default WalletTab;
