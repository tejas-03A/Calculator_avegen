import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-paper';

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>(''); 
  const [result, setResult] = useState<string>(''); 

  const handlePress = (value: string): void => {
    if (value === '=') {
      try {
        setResult(eval(expression).toString()); 
      } catch {
        setResult('Error'); 
      }
    } else if (value === 'Clear') {
      setExpression(''); 
      setResult('');
    } else {
      setExpression((prev) => prev + value); 
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={expression}
        placeholder="Enter calculation"
        editable={false}
        mode="outlined"
      />
      <Text style={styles.result}>{result}</Text>

      <View style={styles.buttons}>
        {['7', '8', '9', '/', '4', '5', '6', '*', '1', '2', '3', '-', 'Clear', '0', '=', '+'].map((btn) => (
          <TouchableOpacity
            key={btn}
            style={[styles.button, btn === '=' && styles.equalsButton]}
            onPress={() => handlePress(btn)}
          >
            <Text style={styles.buttonText}>{btn}</Text>
          </TouchableOpacity>
        ))}
      </View>

      
      <Text style={styles.footer}>Calc by Tejas Auti</Text>
    </View>
  );
};

export default Calculator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#f3f3f3',
  },
  input: {
    fontSize: 24,
    margininset-block-end: 20,
    backgroundColor: '#fff',
    paddingHorizontal: 10,
  },
  result: {
    fontSize: 28,
    margininset-block-end: 20,
    textAlign: 'right',
    color: '#333',
  },
  buttons: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  button: {
    inline-size: '20%',
    padding: 15,
    margin: 5,
    backgroundColor: '#ddd',
    alignItems: 'center',
    borderRadius: 5,
  },
  equalsButton: {
    backgroundColor: 'green',
  },
  buttonText: {
    fontSize: 18,
    color: '#000',
  },
  footer: {
    textAlign: 'center',
    margininset-block-start: 20,
    fontSize: 16,
    color: '#888',
  },
});
