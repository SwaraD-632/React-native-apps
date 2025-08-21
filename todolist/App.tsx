import React ,{useState} from 'react'
import { SafeAreaView, StyleSheet, View,TextInput,Button,FlatList,Text,} from 'react-native';

function App() {
  const [Task, setTask] = useState("");
  const [Tasks, setTasks] = useState<String[]>([]);

  const addTask = () => {
    if (Task.trim()) {
      setTasks([...Tasks, Task])
      setTask('')
    }
  };

  const deleteTask = (index: number) => {
    const updatedTasks = Tasks.filter((_, i) => i !== index)
    setTasks(updatedTasks);
    
  }
  
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.inputRow}>
        <TextInput
          style={styles.inputRow}
          placeholder='enter a task'
          value={Task}
          onChangeText={setTask}
          onSubmitEditing={addTask}
        />
        <Button title='add' onPress={addTask} />
        <FlatList
          data={Tasks}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item, index }) => (
            <View style={styles.taskRow} >
              <Text style={styles.taskText}>{item}</Text>

            <Button title='Done' onPress={()=>deleteTask(index)}/>




            </View>
            
          )}
          />
        
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, padding: 20, backgroundColor: '#f2f2f2',
  },
  inputRow: {
    flexDirection: 'row', marginBottom: 10,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    marginRight: 10,
    padding: 8,
    borderRadius: 5,
    backgroundColor: 'white',

    
  },
  taskRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    marginVertical: 4,
    backgroundColor: 'white',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  taskText: {
    fontSize: 16
  }
}
);

export default App