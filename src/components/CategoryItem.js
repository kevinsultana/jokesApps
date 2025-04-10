import React from 'react';
import {
  Alert,
  FlatList,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Pressable,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/styles';
import AnimatedJokeItem from '../animation/AnimatedJokeItem';

export default function CategoryItem({
  item,
  index,
  jokes,
  isExpanded,
  toggleCategory,
  categoryToFirstIndex,
  getJokes,
  isLoading,
}) {
  const showDialog = joke => {
    Alert.alert(
      joke === 'No Jokes Available For This Category'
        ? 'No Jokes Available'
        : 'Jokes Details',
      joke,
    );
  };

  return (
    <View style={styles.categoryContainer}>
      <Pressable
        onPress={() => toggleCategory(item)}
        style={!isExpanded ? styles.headerRow : styles.headerRowExpanded}>
        <Text style={styles.categoryText}>
          {index + 1}. {item}
        </Text>
        <View style={styles.actionsRow}>
          <TouchableOpacity
            onPress={() => categoryToFirstIndex(item)}
            disabled={index === 0}
            style={[styles.topButton, index === 0 && styles.disabledTopButton]}>
            <Text style={styles.topButtonText}>
              {index === 0 ? 'Top' : 'Go Top'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => toggleCategory(item)}
            style={styles.accordionBtn}>
            <Icon
              name={isExpanded ? 'chevron-up' : 'chevron-down'}
              size={10}
              color="black"
            />
          </TouchableOpacity>
        </View>
      </Pressable>

      {isExpanded && (
        <>
          <FlatList
            data={jokes}
            keyExtractor={(jokeItem, index) => jokeItem.joke + index}
            renderItem={({item, index}) => (
              <AnimatedJokeItem
                joke={item.joke}
                delay={index * 100}
                onPress={() => showDialog(item.joke)}
              />
            )}
            ListFooterComponent={
              <>
                {isLoading && (
                  <ActivityIndicator
                    size="small"
                    color="#000"
                    style={{marginVertical: 10}}
                  />
                )}
                {!isLoading && jokes.length < 6 && jokes.length > 1 && (
                  <TouchableOpacity onPress={() => getJokes(item)}>
                    <Text style={styles.moreButton}>More</Text>
                  </TouchableOpacity>
                )}
              </>
            }
          />
        </>
      )}
    </View>
  );
}
