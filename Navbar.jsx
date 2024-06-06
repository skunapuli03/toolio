import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faHome, faComment, faUser, faEllipsisH } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon icon={faHome} size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon icon={faComment} size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon icon={faUser} size={24} color="#000" />
      </TouchableOpacity>
      <TouchableOpacity style={styles.button}>
        <FontAwesomeIcon icon={faEllipsisH} size={24} color="#000" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingVertical: 10,
    borderRadius: 60,
  },
  button: {
    padding: 5,
  },
});

export default Navbar;
