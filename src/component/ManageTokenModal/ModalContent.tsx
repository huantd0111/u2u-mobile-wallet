import React, { useState } from 'react'
import { FlatList, TouchableOpacity, View } from 'react-native';
import Text from '../../component/Text';
import styles from './styles';
import theme from '../../theme';
import TextInput from '../TextInput';
import { useTranslation } from 'react-i18next';
import Separator from '../Separator';
import Icon from '../Icon';
import { useSupportedTokens } from '../../hook/useSupportedTokens';
import TokenRow from './TokenRow';
import { useLocalStore } from '../../state/local';
import { usePreference } from '../../hook/usePreference';
import { useNavigation } from '@react-navigation/native';

const ModalContent =  ({onClose}: {
  onClose: () => void
}) => {
  const {preferenceTheme} = usePreference()
  const {t} = useTranslation()
  const {supportedTokens} = useSupportedTokens()
  const {customTokenList} = useLocalStore()

  const [searchQuery, setSearchQuery] = useState('')

  const navigation = useNavigation<any>()

  const handlePressAddToken = () => {
    onClose()
    navigation.navigate('AddCustomToken')
  }

  return (
    <View style={styles.contentContainer}>
      <TextInput
        value={searchQuery}
        onChangeText={setSearchQuery}
        placeholder={t('searchTokenPlaceholder')}
        containerStyle={{width: '100%'}}
      />
      <TouchableOpacity onPress={handlePressAddToken} style={{ width: '100%' }}>
        <View style={{ width: '100%', flexDirection: 'row', paddingTop: 14, justifyContent: 'space-between'}}>
          <Text style={[theme.typography.label.medium, { color: preferenceTheme.text.title }]}>
            {t('customToken')}
          </Text>
          <Icon name="chevron-right" width={24} height={24} />
        </View>
      </TouchableOpacity>
      <Separator style={{width: '100%'}} />
      <FlatList
        data={[...supportedTokens, ...customTokenList].filter((t: Record<string, any>) => t.address.includes(searchQuery) || t.symbol.includes(searchQuery) || t.name.includes(searchQuery))}
        renderItem={({item}) => {
          return (
            <TokenRow tokenObj={item} />
          )
        }}
        style={{width: '100%'}}
      />
    </View>
  )
}

export default ModalContent;
