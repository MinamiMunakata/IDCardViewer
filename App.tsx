import * as React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
} from 'react-native'
import { Images, Colors, Metrics } from './App/Themes' // Look for index.ts file and import everything.
// same name -> use { NAME }
// 'default' can be different name. No need to wrap {}
import IDCard from './App/Components/IDCard'
import { IPerson } from './App/Types/Person'

interface IState {
  person: IPerson
  buttonText: string
  loading: boolean
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
    loading: false,
  }

  constructor(props: {}) {
    super(props)
  }

  showCard = () => {
    // console.log('Later networking!')
    // // update state =>rerender!
    // this.setState({ buttonText: 'Hello' })
    // this.setState({
    //   person: {
    //     ...this.state.person,
    //   },
    //   buttonText: 'ID Card!',
    // })

    // Work Async...

    this.getPerson()
  }

  async getPerson() {
    try {
      this.setState({ loading: true })
      const randomNumber = Math.floor(Math.random() * 88) + 1 // 1 ~ 88
      const response = await fetch(
        `https://swapi.co/api/people/${randomNumber}`
      )
      const responseJson = await response.json()
      // let newPerson = responseJson
      // newPerson.hairColor = response.hair_color
      // newPerson.hairColor = response.eye_color
      // newPerson.hairColor = response.skin_color
      const newPerson: IPerson = {
        name: responseJson.name,
        gender: responseJson.gender,
        birthYear: responseJson.birth_year,
        height: responseJson.height,
        weight: responseJson.mass,
        hairColor: responseJson.hair_color,
        eyeColor: responseJson.eye_color,
        skinColor: responseJson.skin_color,
      }
      this.setState({ loading: false, person: newPerson })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    if (this.state.loading) {
      return (
        <SafeAreaView style={styles.container}>
          <ActivityIndicator />
        </SafeAreaView>
      )
    }
    return (
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <IDCard {...this.state.person} />
          <IDCard {...this.state.person} />
          <IDCard {...this.state.person} />
          <Button title={this.state.buttonText} onPress={this.showCard} />
        </ScrollView>
      </SafeAreaView>
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
