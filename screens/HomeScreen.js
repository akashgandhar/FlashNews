import React, { useEffect } from 'react';
import { useState } from 'react';
import axios from 'axios';
import { StyleSheet, Text, SafeAreaView, FlatList, ScrollView } from 'react-native';
import Article from './components/Article';

function HomeScreen () {
    const [articles,setArticles] = useState([]);
    const getNews = () => {
        axios.get('https://newsapi.org/v2/top-headlines?country=in&pageSize=100&apiKey=e7bce6c2d8ab49788bc777f76eebf8ab',{
            params:{
                country: 'in'
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

    useEffect( () =>{
        getNews();
    },[]);

    return(
        <SafeAreaView style={styles.container}>
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
                />
            }
            keyExtractor = {(item)=> item.title}
            />

        </SafeAreaView>
    );
}



const styles = StyleSheet.create({
    container: {

    }
})

export default HomeScreen;

