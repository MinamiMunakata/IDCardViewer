import * as React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { Images, Colors, Metrics } from './App/Themes'
// same name -> use { NAME }
// 'default' can be different name. No need to wrap {}
import IDCard from './App/Components/IDCard'

export default class App extends React.Component<{}, {}> {
  constructor(props: {}) {
    super(props)
  }

  showCard = () => {
    console.log('Later networking!')
  }

  render() {
    return (
      <View style={styles.container}>
        <IDCard />
        <Button title="Show me your ID card!" onPress={this.showCard} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
