import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,FlatList,Image } from 'react-native';
import AppLoading from 'expo-app-loading';
import {useFonts, Abel_400Regular,Mirza_400Regular,Nunito_400Regular,Goldman_400Regular,
  Goldman_700Bold, Jost_900Black,
} from '@expo-google-fonts/dev';


export default function App() {

  let [fontsLoaded] = useFonts({
    Abel_400Regular,
    Mirza_400Regular,
    Nunito_400Regular,
    Goldman_400Regular,
    Goldman_700Bold,
    Jost_900Black,

  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {

  return (
    <View style={estilo.container}>
       <StatusBar style="auto" />
      <Text style={estilo.titulo1}>Rede Social - Encontros no Senac</Text>
      <Text style={estilo.titulo2}>  Você tem um projeto Integrador?  </Text>
      <Text style={estilo.titulo3}> Então...Vamos encontrar os alunos aqui?! ;)</Text>
      <FlatList  
      data={pessoas}
      renderItem={({item})=>
      
      <View>
         <Text style={estilo.faixa}></Text>

         <View  style={estilo.container2}>

          <Image style={estilo.img} source={item.img}/>

          <Text style={estilo.titulo5}>{item.nome}</Text>
          
        </View>
        
       
          <Text style={estilo.titulo4}>Curso: {item.curso}</Text>

          <Text style={estilo.titulo4}>Periodo: {item.periodo}</Text>

          <Text style={estilo.titulo4}>Turma: {item.turma}</Text>

          <Text style={estilo.titulo4}>Especialidades: {item.gosto}</Text>

          <Text style={estilo.titulo4}>Bio: {item.bio}</Text>
          
          
      </View>  
      }
      />
    </View>

  );
}
}

const estilo = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fca311',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
   
    flexDirection: 'row',
    marginRight: 200,
    
    
  },
  faixa: {
    backgroundColor: 'black'
  },
  img: {
    width: 100,
    height: 100,
    borderRadius:150,
    marginTop: 10,
    marginLeft: 10
  },
  titulo1:{
    marginTop: 40,
    marginVertical:10,
    fontSize: 20,
    fontFamily: 'Goldman_700Bold',

  },
  titulo2:{
    marginVertical:10,
    backgroundColor: 'white',
    borderRadius: 5,
    fontSize: 20,
    fontFamily:'Goldman_400Regular'
  },
  titulo3:{
    fontFamily:'Goldman_700Bold',
    fontSize: 15,
    marginRight: 30,
    marginLeft: 10,
  },
  titulo4:{
    fontFamily:'Jost_900Black',
    fontSize: 15,
    marginRight: 120,
    marginLeft: 10,
  },
  titulo5:{
    fontFamily:'Goldman_700Bold',
    fontSize: 25,
    color: 'white',
    marginRight: 30,
    marginLeft: 50,
    marginTop: 30,
    alignItems: 'center',
  },
});

const pessoas = [
  {
    uid:159,
    nome:'Neymar Junior',
    curso: 'Técnico de Informática',
    periodo: 'Manhã',
    turma: 'TI10',
    gosto:'Hardware,Front-end,Redes,PHP', 
    bio:'Curta a vida de um gento bem leve, gosto de ficar com meus amigos no final de semana e compartilhar informações é o meu forte. Sou paciênte.',
    img:require('./assets/fotoperfil/neymar.jpg')
  },
  {
    uid:420,
    nome:'Robertinho',
    curso:'Técnico de informática',
    periodo:'Manhã',
    turma:'TI10m',
    gosto:'Hardware, Redes',
    bio:'Mais novo membro da conferência mundial de pods no banheiro',
    img:require('./assets/fotoperfil/roberto.jpg')
  },
  {
    uid:69,
    nome:'Rock Lee Vascaíno',
    curso:'Ninja',
    periodo:'manhã',
    turma:'TI12',
    gosto:'sofrer',
    bio:'Mesmo sem genjutsu ou ninjutsu, eu serei o maior ninja desse mundo',
    img:require('./assets/fotoperfil/bruno.jpg')
  },
  {
    uid:10,
    nome:'Messi Careca',
    curso: 'Técnico de informática',
    periodo: 'Manhã',
    turma: 'TI10',
    gosto: 'Hardware, Back-End, Redes, C#',
    bio: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry Lorem Ipsum is simply dummy.',
    img:require('./assets/fotoperfil/messi.jpg')
  },
  {
    uid:850,
    nome:'Bolsolula',
    curso:'Técnico de Informática',
    periodo:'manhã',
    turma:'TI10m',
    gosto:'Php, Css, Design Gráfico, Games',
    bio:'Gosto de Jogar, gosto de mexer na internet, sou professor de informática, e gosto de tocar instrumentos como teclado, violão, guitarra e bateria',
    img:require('./assets/fotoperfil/bolsolula.jpg')
  },
{
    uid:171,
    nome: 'Jair Messias',
    curso: 'Enfeitador de Bolos',
    periodo: 'Manhã',
    turma: 'EB10',
    gosto: 'Bolo, Chantilly e Fuzil',
    bio: 'Presidente do Brasil, apaixonado por confeitaria. Adoro uma mulher que saiba fazer um bolinho do bom e um mousse cremoso! Geralmente me chamam de diabo, corrupto, maníaco e genocida. Mas eu acho que são apelidos carinhosos do meu povo :)',
    img:require('./assets/fotoperfil/bosonaro.png')
}
];


