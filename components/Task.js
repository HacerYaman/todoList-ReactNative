import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import symbolicateStackTrace from 'react-native/Libraries/Core/Devtools/symbolicateStackTrace'

const Task = (props) => {
  return (
    <View style={styles.item}>

       <View style={styles.itemLeft}>
         <TouchableOpacity style={styles.square}>
         </TouchableOpacity>
         <Text style={styles.itemText}>{props.text}</Text>

        </View> 
        <View style={styles.circular}w>

        </View>
    </View>
  )
}

export default Task;

const styles = StyleSheet.create({
    item:{
        backgroundColor:"#FFF",
        padding:15,
        borderRadius:10,
    },
    itemLeft:{},
    square:{
        width:24,
        height:24,
        backgroundColor: "#55BCF6",
        opacity:0.4
    },
    itemText:{},
    circular:{},
});