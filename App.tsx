import * as React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { Images, Colors, Metrics } from './App/Themes'
// same name -> use { NAME }
// 'default' can be different name. No need to wrap {}
import IDCard from './App/Components/IDCard'

interface IPerson {
  name: string
  gender: string
  birthYear: string
  height: string
  weight: string
  hairColor: string
  eyeColor: string
  skinColor: string
}

interface IState {
  person: IPerson
  buttonText: string
}

export default class App extends React.Component<{}, IState> {
  state = {
    person: {
      name: 'Unknown',
      gender: 'Unknown',
      birthYear: 'N/A',
      height: 'N/A',
      weight: 'N/A',
      hairColor: 'N/A',
      eyeColor: 'N/A',
      skinColor: 'N/A',
    },
    buttonText: 'Show me your ID Card!',
  }

  constructor(props: {}) {
    super(props)
  }

  showCard = () => {
    console.log('Later networking!')
    // update state =>rerender!
    this.setState({ buttonText: 'Hello' })
    // this.setState({
    //   person: {
    //     ...this.state.person,
    //   },
    //   buttonText: 'ID Card!',
    // })
  }

  render() {
    return (
      <View style={styles.container}>
        <IDCard {...this.state.person} />
        <Button title={this.state.buttonText} onPress={this.showCard} />
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
