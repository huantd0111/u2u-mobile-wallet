import React, { useCallback, useRef, useMemo } from 'react'
import {
  BottomSheetModal,
} from '@gorhom/bottom-sheet';
import styles from './styles';
import { View, TouchableOpacity } from 'react-native';
import Text from '../Text';
import { darkTheme, lightTheme } from '../../theme/color';
import { usePreferenceStore } from '../../state/preferences';
import theme from '../../theme';
import Button from '../Button';
import { useTranslation } from 'react-i18next';
import { SUPPORTED_CHAINS } from '../../config/chain';
import Icon from '../Icon';
import { useNetwork } from '../../hook/useNetwork';
import Separator from '../Separator';

const SelectNetworkModal = ({trigger}: {
  trigger: () => JSX.Element,
}) => {
  const {darkMode} = usePreferenceStore()
  const preferenceTheme = darkMode ? darkTheme : lightTheme

  const { t } = useTranslation<string>()

  const { chainId, switchNetwork } = useNetwork()

  // ref
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // variables
  const snapPoints = useMemo(() => ['25%', '50%'], []);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleClose = useCallback(() => {
    bottomSheetModalRef.current?.close();
  }, []);
  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log('handleSheetChanges', index);
  // }, []);

  return (
    <>
      <TouchableOpacity
        onPress={handlePresentModalPress}
      >
        {trigger()}
      </TouchableOpacity>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={1}
        snapPoints={snapPoints}
        // onChange={handleSheetChanges}
        handleStyle={{
          backgroundColor: preferenceTheme.background.background,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16
        }}
        handleIndicatorStyle={{
          backgroundColor: '#F6F6F6'
        }}
        backdropComponent={({ style }) => {
          return (
            <View
              style={[
                style,
                {
                  backgroundColor: '#181818',
                  opacity: 0.9,
                }
              ]}
            />
          )
        }}
      >
        <View style={[
          styles.contentContainer,
          {
            backgroundColor: preferenceTheme.background.background
          }
        ]}>
          <Text style={[
            theme.typography.headline.medium,
            {
              color: preferenceTheme.text.title,
              // marginBottom: 28
            }
          ]}>
            {t('selectNetwork')}
          </Text>
          <Separator style={{width: '100%'}} />
          {SUPPORTED_CHAINS.map((item) => {
            const selected = chainId === item.chainID
            return (
              <TouchableOpacity
                key={`network-${item.chainID}`}
                style={{
                  flexDirection: 'row',
                  width: "100%",
                  alignItems: 'center',
                  justifyContent: selected ? "space-between" : "flex-start",
                  paddingVertical: 8
                }}
                onPress={() => {
                  switchNetwork(item.chainID)
                  handleClose()
                }}
              >
                <Text
                  style={[
                    theme.typography.label.bold,
                    {
                      color: preferenceTheme.text.title
                    }
                  ]}
                >
                  {item.name}
                </Text>
                {selected && (
                  <Icon name="success" width={24} height={24} />
                )}
              </TouchableOpacity>
            )
          })}
          {/* <View
            style={{width: '100%', flex: 1, justifyContent: 'flex-end'}}
          >
            <Button
              fullWidth
              style={{
                borderRadius: 60
              }}
              onPress={handleClose}
            >
              {t('continue')}
            </Button>
          </View> */}
        </View>
      </BottomSheetModal>
    </>
  )
};

export default SelectNetworkModal;
