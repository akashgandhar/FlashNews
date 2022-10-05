import React, { useState , useEffect} from 'react';
import { View, StyleSheet, FlatList, SafeAreaView } from 'react-native';
import SearchBar from './components/SearchBar';
import axios from 'axios';
import Article from './components/Article';



function SearchScreen (){

    const [searchText,setSearchText] = useState("");
    const [articles,setArticles] = useState([]);

    const searchArticles = () => {
        axios.get('https://newsapi.org/v2/everything?pageSize=100&apiKey=e7bce6c2d8ab49788bc777f76eebf8ab',{
            params:{
                q: searchText
            }
        })
            .then(function (response) {
                // handle success
                setArticles(response.data.articles);
            })
            .catch(function (error) {
                // handle error
            })
            .then(function () {
                // always executed
            });

            // Optionally the request above could also be done as
            axios.get('/user', {
                params: {
                ID: 12345
                }
            })
            .then(function (response) {
            })
            .catch(function (error) {
            })
            .then(function () {
                // always executed
            });  
    }

    const [refreshing,setrefreshing] = useState(false);

    const _handleRefresh = () => {
        setrefreshing(true),() => {useEffect( () =>{getNews();})};
        setrefreshing(false);
    };
     
 
    return (
            <SafeAreaView style={styles.container}>
                <SearchBar searchText={searchText} setSearchText={setSearchText} onSubmit={searchArticles}/>
            <FlatList
                refreshing={refreshing}
                onRefresh={_handleRefresh}
                data={articles}
                renderItem = {({item}) =>
                <Article 
                    urlToImage = {item.urlToImage}
                    title = {item.title}
                    description = {item.description}
                    author = {item.author}
                    publishedAt = {item.publishedAt}
                    sourceName = {item.source.name}
                    url = {item.url}
            />}
            keyExtractor = {(item)=> item.title}
            />
            </SafeAreaView>
    )
    }

const styles = StyleSheet.create({
    container: {
        margin: 10
    },
    input: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        color: '#000'
    }
  })

export default SearchScreen;

