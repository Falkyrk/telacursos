
import React, { Component } from 'react';
import { Image,FlatList, StyleSheet, Text, View } from 'react-native';
import { withSafeAreaInsets } from 'react-native-safe-area-context';

export default function Administracao(){
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
        >Administração</Text>
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
            {key: '1 - Administração de negocios'},
            {key: '2 - Analista de Marketing em mídias sociais'},
            {key: '3 - Assistente administrativo'},
            {key: '4 - Assistente pessoal'},
            {key: '5 - Assistente de recuros humanos'},
            {key: '6 - Assistente financeiro'}
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