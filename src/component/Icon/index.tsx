import React from 'react';
// import HomeInactive from '../../asset/icon/home.png'
import { DimensionValue, Image, ImageStyle, View } from 'react-native';
import { Svg, Path, Rect, Stop, LinearGradient, Defs } from 'react-native-svg'

const DiscoverInactive = require('../../asset/icon/discover.png')
const DiscoverActive = require('../../asset/icon/discover-active.png')
const EcosystemInactive = require('../../asset/icon/ecosystem.png')
const EcosystemActive = require('../../asset/icon/ecosystem-active.png')
const BrowserInactive = require('../../asset/icon/browser.png')
const BrowserActive = require('../../asset/icon/browser-active.png')
const StakingInactive = require('../../asset/icon/staking.png')
const StakingActive = require('../../asset/icon/staking-active.png')
const WalletInactive = require('../../asset/icon/wallet.png')
const WalletActive = require('../../asset/icon/wallet-active.png')

const Icon = ({name, width, height, style}: {
  name: string;
  width?: DimensionValue;
  height?: DimensionValue;
  style?: ImageStyle
}) => {
  const w = width || 24
  const h = height || 24

  const renderIcon = () => {
    switch (name) {
      case 'discover':
        return (
          <Image
            source={DiscoverInactive}
            style={[
              style,
              {
                width: w,
                height: h
              }
            ]}
          />
        )
      case 'discover-active':
        return (
          <Image
            source={DiscoverActive}
            style={[
              style,
              {
                width: w,
                height: h
              }
            ]}
          />
        )
      case 'ecosystem': 
        return (
          <Image
            source={EcosystemInactive}
            style={[
              style,
              {
                width: w,
                height: h
              }
            ]}
          />
        )
      case 'ecosystem-active':
        return (
          <Image
            source={EcosystemActive}
            style={[
              style,
              {
                width: w,
                height: h
              }
            ]}
          />
        )
      case 'browser': 
        return (
          <Image
            source={BrowserInactive}
            style={[
              style,
              {
                width: w,
                height: h
              }
            ]}
          />
        )
      case 'browser-active':
        return (
          <Image
            source={BrowserActive}
            style={[
              style,
              {
                width: w,
                height: h
              }
            ]}
          />
        )
      case 'staking': 
        return (
          <Image
            source={StakingInactive}
            style={[
              style,
              {
                width: w,
                height: h
              }
            ]}
          />
        )
      case 'staking-active': 
        return (
          <Image
            source={StakingActive}
            style={[
              style,
              {
                width: w,
                height: h
              }
            ]}
          />
        )
      case 'wallet': 
        return (
          <Image
            source={WalletInactive}
            style={[
              style,
              {
                width: w,
                height: h
              }
            ]}
          />
        )
      case 'wallet-active':
        return (
          <Image
            source={WalletActive}
            style={[
              style,
              {
                width: w,
                height: h
              }
            ]}
          />
        )
      case 'arrow-left':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg
              width="100%"
              height="100%"
              viewBox={`0 0 24 24`}
              fill="none"
            >
              <Path
                d="M21.9887 12.1703L22 11.9827C22 11.2204 21.4463 10.5914 20.7307 10.4991L20.5486 10.4875L7.01376 10.4887L10.9001 6.46994C11.3215 5.95889 11.3611 5.21531 10.9965 4.6596L10.875 4.49894C10.3848 3.9336 9.57289 3.84268 8.98108 4.25695L8.82554 4.38248L2.48302 10.8035C1.88993 11.3523 1.84281 12.2795 2.34284 12.8883L8.82516 19.614C9.42036 20.1686 10.3381 20.1198 10.875 19.505C11.3671 18.9414 11.3684 18.0979 10.9068 17.5341L7.08794 13.4792L20.5486 13.4779C21.2885 13.4779 21.8991 12.9075 21.9887 12.1703Z"
                fill="#D8D8D8"
              />
            </Svg>
          </View>
        )
      case 'chevron-down':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg width="100%" height="100%" viewBox={`0 0 8 8`} fill="none">
              <Path d="M6.33341 2.83325L4.00008 5.16659L1.66675 2.83325" stroke="#8D8D8D" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
        )
      case 'copy':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg 
              width="100%"
              height="100%"
              viewBox={`0 0 16 16`}
              fill="none"
            >
              <Path
                d="M6 6V4.13346C6 3.38673 6 3.01308 6.14532 2.72786C6.27316 2.47698 6.47698 2.27316 6.72786 2.14532C7.01308 2 7.38673 2 8.13346 2H11.8668C12.6135 2 12.9867 2 13.2719 2.14532C13.5228 2.27316 13.727 2.47698 13.8548 2.72786C14.0001 3.01308 14.0001 3.38645 14.0001 4.13319V7.86654C14.0001 8.61327 14.0001 8.98664 13.8548 9.27186C13.727 9.52274 13.5226 9.72699 13.2717 9.85482C12.9868 10 12.614 10 11.8687 10H10M6 6H4.13346C3.38673 6 3.01308 6 2.72786 6.14532C2.47698 6.27316 2.27316 6.47698 2.14532 6.72786C2 7.01308 2 7.38673 2 8.13346V11.8668C2 12.6135 2 12.9867 2.14532 13.2719C2.27316 13.5228 2.47698 13.727 2.72786 13.8548C3.0128 14 3.386 14 4.13127 14H7.86903C8.61431 14 8.98698 14 9.27192 13.8548C9.5228 13.727 9.72699 13.5226 9.85482 13.2717C10 12.9868 10 12.614 10 11.8687V10M6 6H7.8668C8.61353 6 8.98671 6 9.27192 6.14532C9.5228 6.27316 9.72699 6.47698 9.85482 6.72786C10 7.0128 10 7.386 10 8.1313L10 10"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </View>
        )
      case 'notification':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
              <Path fillRule="evenodd" clipRule="evenodd" d="M3.50083 13.7871V13.5681C3.53295 12.9202 3.7406 12.2925 4.10236 11.7496C4.7045 11.0975 5.1167 10.2983 5.29571 9.43598C5.29571 8.7695 5.29571 8.0935 5.35393 7.42703C5.65469 4.21842 8.82728 2 11.9611 2H12.0387C15.1725 2 18.345 4.21842 18.6555 7.42703C18.7137 8.0935 18.6555 8.7695 18.704 9.43598C18.8854 10.3003 19.2972 11.1019 19.8974 11.7591C20.2618 12.2972 20.4698 12.9227 20.4989 13.5681V13.7776C20.5206 14.648 20.2208 15.4968 19.6548 16.1674C18.907 16.9515 17.8921 17.4393 16.8024 17.5384C13.607 17.8812 10.383 17.8812 7.18762 17.5384C6.09914 17.435 5.08576 16.9479 4.33521 16.1674C3.778 15.4963 3.48224 14.6526 3.50083 13.7871Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M9.55493 20.8518C10.0542 21.4785 10.7874 21.884 11.5922 21.9788C12.3971 22.0735 13.2072 21.8495 13.8433 21.3564C14.0389 21.2106 14.2149 21.041 14.3672 20.8518" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
        )
      case 'u2u':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg width="100%" height="100%" viewBox={`0 0 28 28`} fill="none">
              <Rect width="28" height="28" rx="14" fill="url(#paint0_linear_428_24012)"/>
              <Path d="M13.3058 22.7009C11.1883 21.4792 9.12887 20.291 7.02132 19.0751C7.51261 18.9042 7.59027 18.5659 7.58855 18.1431C7.57724 15.3724 7.57975 12.6018 7.58648 9.83123C7.58743 9.43124 7.5278 9.08964 7 8.93491C7.96273 8.37967 8.8522 7.86676 9.82262 7.30711C9.82262 7.63626 9.82262 7.86788 9.82262 8.0995C9.82495 11.4147 9.82495 14.7344 9.82495 18.0472C9.82132 18.553 9.95439 18.8164 10.408 19.07C10.7744 19.2749 10.8294 19.2938 11.1097 19.4511C11.1097 19.2236 11.1112 19.0851 11.1097 18.9242C11.1097 14.9654 11.1174 11.0626 11.1097 7.02961C11.1087 6.69441 11.185 6.48992 11.4932 6.33035C12.0907 6.02107 12.6651 5.66703 13.3058 5.29883V22.7009Z" fill="#181818"/>
              <Path fillRule="evenodd" clipRule="evenodd" d="M20.9786 19.0751L14.6941 22.7009V5.29883C14.8849 5.40848 15.0699 5.51688 15.2513 5.62322C15.679 5.87393 16.0872 6.11318 16.5068 6.33035C16.8149 6.48992 16.8912 6.69441 16.8903 7.02961C16.8851 9.71894 16.8868 12.3504 16.8886 14.9792C16.8894 16.2925 16.8903 17.6053 16.8903 18.9242C16.8893 19.0266 16.8896 19.12 16.8899 19.233C16.8901 19.2975 16.8903 19.3685 16.8903 19.4511C17.0233 19.3765 17.1055 19.333 17.1944 19.286C17.2929 19.234 17.3994 19.1776 17.592 19.07C18.0455 18.8164 18.1786 18.553 18.175 18.0472V18.0432C18.175 14.7316 18.175 11.4134 18.1773 8.0995V7.30711L20.9999 8.93491C20.4721 9.08964 20.4125 9.43124 20.4135 9.83123C20.4202 12.6018 20.4227 15.3724 20.4114 18.1431C20.4097 18.5659 20.4873 18.9042 20.9786 19.0751ZM16.0375 7.02532L15.7909 6.5252L15.5445 7.02532L14.9932 7.10549L15.3921 7.49478L15.2979 8.04441L15.7909 7.78488L16.284 8.04441L16.1899 7.49478L16.5888 7.10549L16.0375 7.02532Z" fill="#181818"/>
              <Defs>
              <LinearGradient id="paint0_linear_428_24012" x1="21.875" y1="5.25" x2="-2.00793e-06" y2="28" gradientUnits="userSpaceOnUse">
                <Stop stopColor="#33CC99"/>
                <Stop offset="1" stopColor="#714CF9"/>
              </LinearGradient>
              </Defs>
            </Svg>
          </View>
        )
      case 'scan':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
              <Path d="M22.6315 13.0144H1.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M20.7501 8.7779V6.82514C20.7501 4.996 19.2541 3.5 17.425 3.5H15.7812" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M3.38159 8.7779V6.82095C3.38159 4.98867 4.86607 3.50314 6.69835 3.50105L8.37873 3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M20.7501 13.0144V17.5454C20.7501 19.3735 19.2541 20.8705 17.425 20.8705H15.7812" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M3.38159 13.0144V17.5495C3.38159 19.3818 4.86607 20.8674 6.69835 20.8695L8.37873 20.8705" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
        )
      case 'eye':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg width="100%" height="100%" viewBox="0 0 16 16" fill="none">
              <Path d="M1.93958 8.78109C1.71187 8.28568 1.71187 7.71416 1.93958 7.21875C2.99365 4.92554 5.31098 3.33325 8.0002 3.33325C10.6894 3.33325 13.0067 4.92554 14.0608 7.21875C14.2885 7.71416 14.2885 8.28568 14.0608 8.78109C13.0067 11.0743 10.6894 12.6666 8.0002 12.6666C5.31098 12.6666 2.99365 11.0743 1.93958 8.78109Z" stroke="#8D8D8D" strokeWidth="1.5"/>
              <Path d="M10.0002 7.99992C10.0002 9.10449 9.10477 9.99992 8.0002 9.99992C6.89563 9.99992 6.0002 9.10449 6.0002 7.99992C6.0002 6.89535 6.89563 5.99992 8.0002 5.99992C9.10477 5.99992 10.0002 6.89535 10.0002 7.99992Z" stroke="#8D8D8D" strokeWidth="1.5"/>
            </Svg>
          </View>
        )
      case 'arrow-up':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
              <Path d="M12.2256 4.25L12.2256 19.25" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M6.20124 10.2998L12.2252 4.2498L18.2502 10.2998" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
        )
      case 'arrow-down':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg width="100%" height="100%" viewBox="0 0 24 24" fill="none">
              <Path d="M12.2744 19.75V4.75" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M18.2988 13.7002L12.2748 19.7502L6.24976 13.7002" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
        )
      case 'swap':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
              <Path d="M17.3395 20.1642V6.54639" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M21.4173 16.0681L17.3395 20.1648L13.2617 16.0681" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M7.41127 3.83276V17.4505" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M3.3335 7.92894L7.41127 3.83228L11.4891 7.92894" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
        )
      case 'paper':
        return (
          <View style={[{width: width, height: height, aspectRatio: 1}, style]}>
            <Svg width="100%" height="100%" viewBox="0 0 25 24" fill="none">
              <Path fillRule="evenodd" clipRule="evenodd" d="M15.2368 2.76196H8.58376C6.52476 2.76196 4.74976 4.43096 4.74976 6.49096V17.204C4.74976 19.38 6.40876 21.115 8.58376 21.115H16.5728C18.6328 21.115 20.3018 19.265 20.3018 17.204V8.03796L15.2368 2.76196Z" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M14.9741 2.75024V5.65924C14.9741 7.07924 16.1231 8.23124 17.5421 8.23424C18.8591 8.23724 20.2061 8.23824 20.2971 8.23224" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M14.784 15.5579H9.38696" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <Path d="M12.7425 10.6057H9.38647" stroke="#272727" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </View>
        )
      default:
        return null
    }
  }

  return renderIcon()
};

export default Icon;