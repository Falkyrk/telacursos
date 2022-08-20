
import React, { Component } from 'react';
import { Image,FlatList, StyleSheet, Text, View } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function Fotografia(){
    return(
        
        <View style={{height:"100%", backgroundColor:"white"}}>
        {/* titulo */}
        <View style={{backgroundColor:"white"}}>
        <Text
        style={{
        
         
        
        fontSize:28,
        textAlign:"center",
        backgroundColor:"black",
        color:"white",
        padding:50,
        
        
        }}
        >Fotografia</Text>
        </View>

        {/* conteudo */}
        <View style={{
        

        }}>

        <FlatList

        style={{
        
        padding:30,
        borderRadius: 10,
        margin:10
           

        }}
          data={[
            {key: '1 - Fotografia para gastronomia'},
            {key: '2 - Iluminação fotográfica com flash'},
            {key: '3 - Manipulação de imagens'},
          ]}
          renderItem={({item}) => <Text style={{
            padding: 10,
            fontSize: 18,
            height: 44,

          }}
          >{item.key}</Text>}
        />
        

        

        </View>


        </View>
    )
}