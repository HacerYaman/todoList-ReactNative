import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Task from './components/Task';

export default function App() {
  return (
    <View style={styles.container}>
      
      {/* Todays Task*/}

      <View style={styles.tasksWrapper}>

         <Text style={styles.sectionTitle}>
          Today's Tasks
         </Text>

        <View style={styles.items} >
          {/* this is where the taks will go*/}
          <Task text={"task1"}/>
          <Task/>
          <Task/>
        </View>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
    
  },
    tasksWrapper: {
      paddingTop:80,
      paddingHorizontal:20,

    },
    sectionTitle: {
      fontSize:24,
      fontWeight:"bold",
    },
    items: {},
});
