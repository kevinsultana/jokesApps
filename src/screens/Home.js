import React, {useEffect, useState} from 'react';
import {SafeAreaView, FlatList, RefreshControl} from 'react-native';
import Header from '../components/Header';
import CategoryItem from '../components/CategoryItem';
import styles from '../styles/styles';
import {fetchCategories, fetchJokes} from '../utils/api';
import {moveItemToTop} from '../utils/helpers';

export default function Home() {
  const [categories, setCategories] = useState([]);
  const [jokesPerCategory, setJokesPerCategory] = useState({});
  const [expandedCategories, setExpandedCategories] = useState({});
  const [loadingCategories, setLoadingCategories] = useState({});
  const [refreshing, setRefreshing] = useState(false);

  const getData = async () => {
    setRefreshing(true);
    setJokesPerCategory({});
    setExpandedCategories({});
    try {
      const data = await fetchCategories();
      setCategories(data);
    } catch (error) {
      console.error(error);
    } finally {
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const getJokes = async category => {
    setLoadingCategories(prev => ({...prev, [category]: true}));
    try {
      const jokes = await fetchJokes(category);
      setJokesPerCategory(prev => ({
        ...prev,
        [category]: [...(prev[category] || []), ...jokes],
      }));
    } catch (error) {
      if (error.message.includes('400')) {
        setJokesPerCategory(prev => ({
          ...prev,
          [category]: [{joke: 'No Jokes Available For This Category'}],
        }));
      }
    } finally {
      setLoadingCategories(prev => ({...prev, [category]: false}));
    }
  };

  const toggleCategory = async category => {
    if (!jokesPerCategory[category]) {
      await getJokes(category);
    }
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  const categoryToFirstIndex = item => {
    setCategories(prev => moveItemToTop(prev, item));
  };

  return (
    <SafeAreaView>
      <FlatList
        data={categories}
        renderItem={({item, index}) => (
          <CategoryItem
            item={item}
            index={index}
            jokes={jokesPerCategory[item] || []}
            isExpanded={expandedCategories[item]}
            toggleCategory={toggleCategory}
            categoryToFirstIndex={categoryToFirstIndex}
            getJokes={getJokes}
            isLoading={loadingCategories[item]}
          />
        )}
        keyExtractor={item => item}
        ListHeaderComponent={Header}
        showsVerticalScrollIndicator={false}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={getData} />
        }
      />
    </SafeAreaView>
  );
}
