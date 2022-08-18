import { Image, ScrollView, TouchableOpacity, Text, View } from "react-native";
import { Ionicons } from '@expo/vector-icons';
import {style} from  './Style';

export default function Home({navigation}){
    return(
        <View style={{flex:1}}>
              <View style={style.header}>
                    <Ionicons name="md-logo-reddit" size={50} color="#310075" style={{padding:10}} />
                    <Text style={{color:"black",fontSize:55}}>
                     Senac
                    </Text>
            </View>
            <View style={{flex:4}}>
                <Text style={{fontSize:20,padding:10,paddingLeft:30, paddingTop:50,fontWeight:"bold"}}>
                    Confira Nossos Cursos
                </Text> 
                <ScrollView horizontal={true} style={{padding:20}}>
                    {/* Primeiro curso Administração */}
                    <View style={{padding:10}}>
                        <Image style={{height:400, width:350, borderRadius:30}} source={{uri:("https://www.undb.edu.br/hubfs/administra%C3%A7%C3%A3o%20undb-1.jpg")}}/>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{padding:10,fontSize:18}}> Administação</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate("Administracao")} style={{
                                margin:5,
                                justifyContent:"center",
                                alignItems:"center",
                                paddingLeft:110,
                                }}>
                                    <Text style={{color:"white",fontSize:15, backgroundColor:"#599eff",borderRadius:10,height:23,width:80,textAlign:"center"}}>Saiba mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Segundo curso Informática */}
                    <View style={{padding:10}}>
                        <Image style={{height:400, width:350, borderRadius:30}} source={{uri:("https://colegiopioxii.com.br/wp-content/uploads/2018/05/informatica.jpg")}}/>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{padding:10,fontSize:18}}>Informática</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate("Produto")} style={{
                                margin:5,
                                justifyContent:"center",
                                alignItems:"center",
                                paddingLeft:130,
                                }}>
                                    <Text style={{color:"white",fontSize:15, backgroundColor:"#599eff",borderRadius:10,height:23,width:80,textAlign:"center"}}>Saiba mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Terceiro curso Fotografia */}
                    <View style={{padding:10}}>
                        <Image style={{height:400, width:350, borderRadius:30}} source={{uri:("https://guiadoestudante.abril.com.br/wp-content/uploads/sites/4/2020/05/nota-docs-fotografia.jpg")}}/>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{padding:10,fontSize:18}}>Fotografia</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate("Produto")} style={{
                                margin:5,
                                justifyContent:"center",
                                alignItems:"center",
                                paddingLeft:130,
                                }}>
                                    <Text style={{color:"white",fontSize:15, backgroundColor:"#599eff",borderRadius:10,height:23,width:80,textAlign:"center"}}>Saiba mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>

                    {/* Quarto curso Bem-Estar */}
                    <View style={{padding:10,paddingRight:40}}>
                        <Image style={{height:400, width:350, borderRadius:30}} source={{uri:("https://dinheirama.com/wp-content/uploads/2017/01/BEM-ESTAR.jpg")}}/>
                        <View style={{flexDirection:"row"}}>
                            <Text style={{padding:10,fontSize:18}}>Bem-Estar</Text>
                            <TouchableOpacity onPress={()=>navigation.navigate("Produto")} style={{
                                margin:5,
                                justifyContent:"center",
                                alignItems:"center",
                                paddingLeft:130,
                                }}>
                                    <Text style={{color:"white",fontSize:15, backgroundColor:"#599eff",borderRadius:10,height:23,width:80,textAlign:"center"}}>Saiba mais</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}