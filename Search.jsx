//search js 
import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faMagnifyingGlass, faTimesCircle, faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const SearchComponent = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  return (
    <View style={styles.navbar}>
      <View style={styles.searchContainer}>
        <FontAwesomeIcon icon={faMagnifyingGlass} size={20} style={styles.icon} />
        <TextInput
          style={styles.searchInput}
          placeholder="What do you want to rent?"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
            <Pressable onPress={handleClearSearch}>
              <FontAwesomeIcon icon={faTimesCircle} size={20} style={styles.clearIcon} />
            </Pressable>
          )}
        
        </View>
        <FontAwesomeIcon icon={faShoppingCart} size={30} style={styles.cartIcon} /> 
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      backgroundColor: '#transparent',
      paddingVertical: 10,
  },
  searchContainer: {
    width: 300,
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#eee',
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingVertical: 5,
    margin: 10,
    marginLeft: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,
  },
  icon: {
    marginRight: 10,
    color: '#aaa',
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
  },
  clearIcon: {
    marginLeft: 10,
    color: '#aaa',
  },
  cartIcon: {
    color: '#000',
  },
});

export default SearchComponent;
