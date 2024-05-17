/* eslint-disable prettier/prettier */
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'

export default function App() {

  const [randomBackground,setRandomBackgroung]=useState('#ffffff');

  const generateBackground=()=>{

    const hexRange='0123456789ABCDEF';

    let color ='#'

    for (let i=0;i<6;i++){
      color += hexRange[Math.floor(Math.random() * 16)]
    }

    setRandomBackgroung(color)
  }

  return (
    <>
    <StatusBar backgroundColor={randomBackground}/>
    <View style={[styles.container,{backgroundColor:randomBackground}]}>
      <View style={styles.actionBtn}>
        <TouchableOpacity
        onPress={generateBackground}
        >
          <Text style={styles.actionBtnText}>Press Me</Text>
        </TouchableOpacity>
      </View>
    </View>
    </>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:'center'
  },
  actionBtn:{
    backgroundColor:"blue",
    borderRadius:6,
    padding:14,
  },
  actionBtnText:{
    fontSize:16,
    color:"#FFFFFF",
    textTransform:'uppercase'

  },
  
})