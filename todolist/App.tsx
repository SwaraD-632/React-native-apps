import React, { useState} from 'react';
import { StyleSheet, Text, TextInput, View,Button } from 'react-native';

export default function App() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState('');

  const operation = (operation:string) => {
    const n1 = parseFloat(num1);
    const n2 = parseFloat(num2);

    if (isNaN(n1) || isNaN(n2)) {
      setResult('Please enter valid numbers')
      return;
    }

    switch (operation) {
      case '+':
        setResult((n1 + n2).toString());
        break;
      case '-':
        setResult((n1 - n2).toString());
        break;
      case '*':
        setResult((n1 * n2).toString());
        break;
      case '/':
        if (n2 == 0) {
          setResult('cannot be divided by zero')
        }
        else {
          setResult((n1 / n2).toString());
          
        }
       
        break;
    
      
    }
  }
  
  
  return (
    <View style={{ padding: 20 }}>
      <Text>Difficult Calculator</Text>
      <br />

      <TextInput
        placeholder='Enter the 1st number'
        keyboardType='numeric'
        value={num1}
        onChangeText={setNum1}
        style={{borderWidth:1,marginBottom:10,padding:5}}
      
      
      />

       <TextInput
        placeholder='Enter the 2nd number'
        keyboardType='numeric'
        value={num2}
        onChangeText={setNum2}
        style={{borderWidth:1,marginBottom:10,padding:5}}
      
      
      />
      <Button title='Add' onPress={() => operation('+')} />
      <br />
      <Button title='Subtract' onPress={() => operation('-')} />
      <br />
      <Button title='Multiply' onPress={() => operation('*')} />
      <br />
      <Button title='Divides' onPress={() => operation('/')} />
      <br />
      <Text style={{ marginTop: 20, fontSize: 18, }}>Result:{ result}</Text>
      
      
    </View>
  );
}


