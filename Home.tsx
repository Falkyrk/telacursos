import { Image, ScrollView, TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {style} from  './Style';

import React from 'react';



export default function Home({navigation}){
    return(

   
        <View style={{flex:1}}>
             

                                    {/* inserir imagem do logo */}


                                    <View style={{backgroundColor:"black", height:150, justifyContent:"center", alignItems:"center"}}>
        
        <Image style={{ width:"50%", height:"50%"}} source={{uri:("https://www.sp.senac.br/sites/cursos-eu-profissional/assets/images/logo-senac-branco.png")}}></Image>
        </View>



                                    {/* fim imagem logo */}


                                    

                                    <ScrollView horizontal={false}>                 




            <View style={{flex:4}}>
                <Text style={{fontSize:20,padding:10,paddingLeft:30, paddingTop:50,fontWeight:"bold",textAlign:"center"}}>
                    Escolha a sua área
                </Text> 

                {/* cursos */}

                <View style={{flexDirection:"row"}}>
               
                    {/*  Administração */}
                    <TouchableOpacity onPress={()=>navigation.navigate("Administracao")} style={{
                                margin:5,
                                justifyContent:"center",
                                alignItems:"center"
                                
                                }}>


                    <View style={{padding:10}}>
                        <Image style={{height:100, width:150, borderRadius:10}} source={{uri:("https://2.bp.blogspot.com/-HZOfradL9dU/U1Bx6YlFXSI/AAAAAAAA0M0/zORj--oKahs/s1600/administrac%CC%A7a%CC%83o.jpg")}}/>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{padding:10,fontSize:18,textAlign:"center"}}> Administação</Text>
                           
                                    
                            
                        </View>
                    </View>
                    </TouchableOpacity>

                    

                    {/* Bem-Estar */}
                    <TouchableOpacity onPress={()=>navigation.navigate("BemEstar")} style={{
                                margin:5,
                                justifyContent:"center",
                                alignItems:"center"
                                
                                }}>


                    <View style={{padding:10}}>
                        <Image style={{height:100, width:150, borderRadius:10}} source={{uri:("https://www.fitneass.com/wp-content/uploads/2019/06/How-To-Achieve-A-Fit-And-Healthy-Body.jpg")}}/>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{padding:10,fontSize:18,textAlign:"center"}}>Bem-Estar</Text>
                           
                                    
                            
                        </View>
                    </View>
                    </TouchableOpacity>
                
              </View>



              {/* coluna de imagem 2 */}




                <View style={{flexDirection:"row"}}>
               
                    {/* Tecnologia */}
                    <TouchableOpacity onPress={()=>navigation.navigate("Tecnologia")} style={{
                                margin:5,
                                justifyContent:"center",
                                alignItems:"center"
                                
                                }}>


                    <View style={{padding:10}}>
                        <Image style={{height:100, width:150, borderRadius:10}} source={{uri:("https://piauihoje.com/uploads/imagens/tecno-divulgacao-1654806461.jpeg")}}/>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{padding:10,fontSize:18,textAlign:"center"}}>Tecnologia</Text>
                           
                                    
                            
                        </View>
                    </View>
                    </TouchableOpacity>

                    

                    {/* Fotografia */}
                    <TouchableOpacity onPress={()=>navigation.navigate("Fotografia")} style={{
                                margin:5,
                                justifyContent:"center",
                                alignItems:"center"
                                
                                }}>


                    <View style={{padding:10}}>
                        <Image style={{height:100, width:150, borderRadius:10}} source={{uri:("https://i.redd.it/oa77nu73vv371.jpg")}}/>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{padding:10,fontSize:18,textAlign:"center"}}> Fotografia</Text>
                           
                                    
                            
                        </View>
                    </View>
                    </TouchableOpacity>

                    
                
              </View>



           </View>
           </ScrollView>
        </View>
        
    )
}