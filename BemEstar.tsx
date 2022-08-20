
import React, { Component } from 'react';
import { Image,FlatList, StyleSheet, Text, View } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function BemEstar(){
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
        >Bem-Estar</Text>
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
            {key: '1 - Drenagem linfática manual'},
            {key: '2 - Analista de desenvolvimento e treinamento'},
            {key: '3 - Práticas meditativas'},
            {key: '4 - Shiatsu básico'},
            {key: '5 - Técnicas de depilação'},
            {key: '6 - Técnicas de manicure e pedicure'}
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