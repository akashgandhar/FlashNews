import React from 'react';
import { View, Text,StyleSheet, TextInput } from 'react-native';


const SearchBar = (props) => {

  return (
    <View style={styles.container}>
        <TextInput
            value={props.searchText}
            placeholder='Search'
            style={styles.input}
            onChangeText={(text)=>props.setSearchText(text)}
            onSubmitEditing={props.onSubmit}
        />
    </View>
  );

  }
  
const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    input: {
        backgroundColor: '#fff',
        padding: 18,
        borderRadius: 10,
        borderColor: '#f3b61f',
        borderWidth:2
    }
  });


export default SearchBar;

// export SearchBar;

