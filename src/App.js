import React, {useState} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native'

const App = () => {
  const [number, setNumber] = useState(0)

  function handleNumber() {
    const newNumber = Math.floor(Math.random() * 100)

    setNumber(newNumber)
  }
  return (
    <SafeAreaView style={style.container}>
      <View>
        <Text style={style.numero}>{number}</Text>
        <TouchableOpacity onPress={handleNumber}>
          <Text style={style.text}>Gerar Número</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  )
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#f0f0f0',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 25,
    color: 'white',
    backgroundColor: '#FA4B0C',
    width: 200,
    height: 40,
    textAlign: 'center',
    borderRadius: 5,
  },
  numero: {
    fontSize: 50,
    color: '#333',
    textAlign: 'center',
    marginBottom: 30,
  },
})
export default App
