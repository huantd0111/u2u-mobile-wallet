import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
  TouchableOpacity,
  Image,
  Text,
} from 'react-native';

import {useStyles} from './styles';
import TextInput from '../../component/TextInput';
import React, {useCallback, useEffect, useState} from 'react';
import Tab from '../../component/Tab';
import FeaturedNews from './FeaturedNews';
import LatestNews from './LatestNews';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DiscoverStackParamList} from '../../stack/DiscoverStack';
import {useGlobalStore} from '../../state/global';
import {useFocusEffect} from '@react-navigation/native';
import {useDebounce} from '../../hook/useDebounce';
import Icon from '../../component/Icon';
import {useTranslation} from 'react-i18next';
import {color} from '../../theme/color';
import {useNavigation} from '@react-navigation/native';

type Props = NativeStackScreenProps<DiscoverStackParamList, 'Home'>;

export interface Article {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  thumbnail: string;
  content: string;
}

type SearchResult = {
  // id: number;
  title: string;
};

const DiscoverScreen = ({route}: Props) => {
  const styles = useStyles();
  const {setRouteName} = useGlobalStore();
  const [currentCategory, setCurrentCategory] = useState<string | undefined>();
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState<Article[]>([]);
  const navigation = useNavigation<any>();

  const [searchQuery, setSearchQuery] = useState<string>('');
  const [results, setResults] = useState<Article[]>([]);
  const [searching, setSearching] = useState(false);

  const {t} = useTranslation();

  const [tab, setTab] = useState('featured');
  const debouncedSearchQuery = useDebounce(searchQuery, 300);

  const tabs = [
    {label: t('Featured'), value: 'featured'},
    {label: t('Latest'), value: 'latest'},
  ];

  const handleViewCategory = (category: string) => {
    setTab('latest');
    setCurrentCategory(category);
  };

  const handleChangeTab = (t: string) => {
    setTab(t);
    setCurrentCategory(undefined);
  };

  useEffect(() => {
    if (route.params?.defaultTab) {
      setTab(route.params.defaultTab);
    }
  }, [route.params]);

  const handleSearch = () => {
    // Perform the search logic based on the searchQuery
    const filteredResults = news.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );
    setResults(filteredResults);
  };

  useEffect(() => {
    if (debouncedSearchQuery) {
      setSearching(true);
      handleSearch();
    } else {
      setSearching(false);
      setResults([]);
    }
  }, [debouncedSearchQuery]);

  useFocusEffect(
    useCallback(() => {
      setRouteName(route.name);
    }, [route]),
  );

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch(
          'https://raw.githubusercontent.com/unicornultrafoundation/static-news/main/news.json',
          {
            method: 'GET',
            redirect: 'follow',
          },
        );
        const data = await res.json();
        setNews(data);
      } catch (e) {
        console.log(e);
        setNews([]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <ActivityIndicator />
        </View>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          containerStyle={{height: 48}}
          placeholder={t('Search articles')}
          placeholderTextColor={'#363636'}
          onChangeText={text => {
            setSearchQuery(text);
          }}
          value={searchQuery}
          postIcon={() => {
            return (
              <TouchableOpacity
                onPress={() => {
                  setSearchQuery('');
                }}>
                <Icon name="close" width={24} height={24} />
              </TouchableOpacity>
            );
          }}
        />
      </View>
      {searching ? (
        // Display search results
        <ScrollView style={{paddingTop: 20, paddingLeft: 16, paddingRight: 16}}>
          <View style={{gap: 12}}>
            {results.map(item => {
              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => handleViewArticle(item.id)}>
                  <View
                    style={{
                      flexDirection: 'row',
                      gap: 12,
                      height: 80,
                      alignItems: 'stretch',
                      marginBottom: 8,
                    }}>
                    <Image
                      source={{uri: item.thumbnail}}
                      style={styles.articleThumbnail}
                    />

                    <View style={{flex: 1, justifyContent: 'space-between'}}>
                      <Text
                        numberOfLines={3}
                        ellipsizeMode="tail"
                        style={[styles.title, {lineHeight: 22}]}>
                        {item.title}
                      </Text>

                      <View
                        style={{
                          flexDirection: 'row',
                          gap: 4,
                          alignItems: 'center',
                        }}>
                        <Text style={styles.caption}>{item.category}</Text>
                        <View
                          style={{
                            width: 4,
                            height: 4,
                            backgroundColor: color.primary[500],
                            borderRadius: 2,
                          }}
                        />
                        <Text style={styles.caption}>{item.date}</Text>
                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              );
            })}
          </View>
        </ScrollView>
      ) : (
        <ScrollView
          contentContainerStyle={{
            padding: 16,
            paddingBottom: 120,
            paddingTop: 0,
          }}
          nestedScrollEnabled>
          {/* <TextInput
          containerStyle={{ height: 40 }}
          value={queryString}
          onChangeText={text => setQueryString(text)}
        /> */}

          <Tab
            tabs={tabs}
            selectedTab={tab}
            onChange={handleChangeTab}
            tabStyle={{
              borderColor: 'transparent',
              alignItems: 'flex-start',
              justifyContent: 'flex-start',
              paddingLeft: 0,
              paddingRight: 12,
            }}
            containerStyle={{
              borderColor: 'transparent',
              marginTop: 8,
            }}
          />
          {tab === 'featured' && (
            <FeaturedNews news={news} onViewCategory={handleViewCategory} />
          )}
          {tab === 'latest' && (
            <LatestNews news={news} initialTab={currentCategory} />
          )}
        </ScrollView>
      )}
    </SafeAreaView>
  );

  const handleViewArticle = (id: number) => {
    navigation.navigate('NewsDetails', {id});
  };
};

export default DiscoverScreen;
