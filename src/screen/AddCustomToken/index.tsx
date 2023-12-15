import React, { useCallback, useEffect, useState } from 'react'
import { Image, Keyboard, KeyboardAvoidingView, ScrollView, TouchableOpacity, View } from 'react-native';
import Text from '../../component/Text';
import { usePreferenceStore } from '../../state/preferences';
import { darkTheme, lightTheme } from '../../theme/color';
import { useTranslation } from 'react-i18next';
import theme from '../../theme';
import TextInput from '../../component/TextInput';
import Button from '../../component/Button';
import { Network, isAddress } from 'ethers';
import { useDebounce } from '../../hook/useDebounce';
import { useNetwork } from '../../hook/useNetwork';
import { fetchURC20MetaFromContract } from '../../service/token';
import { useLocalStore } from '../../state/local';
import { SafeAreaView, useSafeArea } from 'react-native-safe-area-context';
import { useFocusEffect, useRoute } from '@react-navigation/native';
import { useGlobalStore } from '../../state/global';
import { styles } from './styles';
import Icon from '../../component/Icon';
import { useNavigation } from '@react-navigation/native';
import { Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import { useNetworkStore } from '../../state/network';


const AddCustomToken = () => {
  const { darkMode } = usePreferenceStore()
  const preferenceTheme = darkMode ? darkTheme : lightTheme

  const { rpc } = useNetwork()
  const { t } = useTranslation()
  const { addCustomToken } = useLocalStore()
  const networkStore = useNetworkStore()

  const [address, setAddress] = useState('')
  const debouncedAddress = useDebounce(address, 300);
  const [name, setName] = useState('')
  const [symbol, setSymbol] = useState('')
  const [decimals, setDecimals] = useState('')

  const route = useRoute()
  const { setRouteName } = useGlobalStore()
  const navigation = useNavigation()
  const insets = useSafeArea();

  useFocusEffect(
    useCallback(() => {
      setRouteName(route.name)
    }, [route])
  )

  useEffect(() => {
    (async () => {
      if (!isAddress(debouncedAddress) || !rpc) return
      const rs = await fetchURC20MetaFromContract(debouncedAddress, rpc)
      setName(rs.name)
      setSymbol(rs.symbol)
      setDecimals(rs.decimals.toString())
    })()
  }, [debouncedAddress, rpc])

  const handleImport = () => {
    try {
      if (!isAddress(address) || !rpc) {
        throw new Error(t("Invalid Contract Address or Network"));
      }

      if (!name.trim() || !symbol.trim()) {
        throw new Error(t("Name cannot be empty"));
      }

      if (!symbol.trim()) {
        throw new Error(t("Symbol cannot be empty"));
      }

      const parsedDecimals = Number(decimals);
      if (
        isNaN(parsedDecimals) ||
        parsedDecimals <= 0 ||
        parsedDecimals > 32 ||
        !Number.isInteger(parsedDecimals)
      ) {
        throw new Error(t("Invalid decimals value"));
      }

      var result = addCustomToken({
        name,
        decimals: parsedDecimals,
        symbol,
        address,
      });
      if(result){
        // back to home screen
        Toast.show({
          type: 'customSuccess',
          text1: t('Success'),
          text2: t('Add Cusstom token success!'),
          position: 'bottom',
        });
        navigation.goBack();
      }else{
        // show toast error
        Toast.show({
          type: 'customError',
          text1: t('Error during add cusstom token:'),
          text2: t('Wrong information or token already exists in the list'),
          position: 'bottom', 
        });
      }

    } catch (error: any) {
      Toast.show({
        type: 'customError',
        text1: t('Error during add cusstom token:'),
        text2: `${error.message}`,
        //position: 'bottom', // Set the position to 'bottom'
      });
    }
  };

  const iconPath = '../.' + (networkStore.iconURL ?? './asset/icon/u2u_main.png');


  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <View style={{ flex: 1, backgroundColor: preferenceTheme.background.background }}>
        <SafeAreaView style={{ marginBottom: -16 }}>
          <View style={styles.headerContainer}>
            <TouchableOpacity onPress={navigation.goBack}>
              <Icon name="arrow-left" width={24} height={24} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row' }}>
              <Text style={styles.headerTokenSymbolText}>{t('addCustomToken')}</Text>
            </View>
            <View />
          </View>
        </SafeAreaView>
        <ScrollView style={{ paddingHorizontal: 16 }}>

          <View style={{ width: '100%', gap: 8, marginBottom: 16 }}>
            <Text>{t('network')}</Text>
            <View
              style={{
                paddingHorizontal: 14,
                borderRadius: 12,
                borderWidth: 1,
                minWidth: 52,
                minHeight: 48,
                alignItems: 'center',
                flexDirection: 'row',
                backgroundColor: preferenceTheme.background.surface,
                borderColor: preferenceTheme.background.surface,
                width: "100%",
              }}>
              <Image source={require('../../asset/icon/u2u_main.png')} style={{ width: 28, height: 28, paddingVertical: 4 }} />
              <Text style={{ paddingLeft: 16 }}>{networkStore.name}</Text>
            </View>
          </View>
          <View style={{ width: '100%', gap: 8, marginBottom: 16 }}>
            <Text>{t('address')}</Text>
            <TextInput
              value={address}
              onChangeText={setAddress}
            />
          </View>
          <View style={{ width: '100%', gap: 8, marginBottom: 16 }}>
            <Text>{t('tokenName')}</Text>
            <TextInput value={name} onChangeText={setName} />
          </View>
          <View style={{ width: '100%', gap: 8, marginBottom: 16 }}>
            <Text>{t('symbol')}</Text>
            <TextInput value={symbol} onChangeText={setSymbol} />
          </View>
          <View style={{ width: '100%', gap: 8, marginBottom: 52 }}>
            <Text>{t('decimals')}</Text>
            <TextInput value={decimals} onChangeText={setDecimals} />
          </View>
        </ScrollView>

        <Button style={{ borderRadius: 60, marginBottom: insets.bottom, marginStart: 16, marginEnd: 16 }}
          onPress={handleImport}>
          {t('continue')}
        </Button>
      </View>
    </KeyboardAvoidingView>

  )
}

export default AddCustomToken;

