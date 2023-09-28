import React from 'react'
import { TouchableOpacity, View } from 'react-native';
import { styles } from './styles';
import Text from '../../component/Text';
import Icon from '../../component/Icon';
import { usePreferenceStore } from '../../state/preferences';
import { darkTheme, lightTheme } from '../../theme/color';

const BalanceCard = () => {
  const {darkMode} = usePreferenceStore()
  const preferenceTheme = darkMode ? darkTheme : lightTheme

  return (
    <View style={styles.balanceCardContainer}>
      <TouchableOpacity style={styles.balanceCardVisibleButton}>
        <Text style={styles.balanceText}>
          Total balance
        </Text>
        <Icon name="eye" width={16} height={16} />
      </TouchableOpacity>
      <Text style={styles.balanceNumberInFiatText}>$0</Text>
      <Text style={[styles.balanceNumberInU2U, {color: preferenceTheme.text.secondary}]}>0 U2U</Text>
      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 32}}>
          <TouchableOpacity style={styles.balanceActionButton}>
            <Icon name="arrow-up" width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.balanceActionButtonText}>Send</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 32}}>
          <TouchableOpacity style={styles.balanceActionButton}>
            <Icon name="arrow-down" width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.balanceActionButtonText}>Receive</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center', marginRight: 32}}>
          <TouchableOpacity style={styles.balanceActionButton}>
            <Icon name="swap" width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.balanceActionButtonText}>Swap</Text>
        </View>
        <View style={{alignItems: 'center', justifyContent: 'center'}}>
          <TouchableOpacity style={[styles.balanceActionButton, {marginRight: 0}]}>
            <Icon name="paper" width={24} height={24} />
          </TouchableOpacity>
          <Text style={styles.balanceActionButtonText}>History</Text>
        </View>
      </View>
    </View>
  )
};

export default BalanceCard;
