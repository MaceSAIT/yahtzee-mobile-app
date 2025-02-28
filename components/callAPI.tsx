import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import axios from 'axios';

const API_URL = 'https://jsonplaceholder.typicode.com/posts/1';

const callAPI = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
        const response = await axios.get(API_URL);
        setData(response.data);
        } catch (error) {
        console.error('Error fetching data:', error);
        }
    };

    return (
        <View style={styles.whiteBox}>
            <Text style={styles.textButtons}>ID: {data.id}</Text>
            <Text style={styles.textButtons}>UserID: {data.userId}</Text>
            <Text style={styles.textButtons}>Title: {data.title}</Text>
            <Text style={styles.textButtons}>Body: {data.body}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    whiteBox: {
        backgroundColor: '#FFFFFF',
        borderWidth: 0,
        borderRadius: 20,
        width: 350,
        height: 'auto',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 20,
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    textButtons: {
        fontWeight: 'regular',
        fontSize: 20,
        color: 'black',
        textAlign: 'left',
        marginTop: 6,
    },
});

export default callAPI;