import * as React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { Images, Colors, Metrics } from './App/Themes'

export default class App extends React.Component<{}, {}> {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            style={{
              height: Metrics.images.large,
              width: Metrics.images.large,
            }}
            source={Images.jedi1}
          />
        </View>
        <Text>Jedi</Text>
        <Text>Male</Text>
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
  card: {
    padding: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth * 0.9,
    borderWidth: Metrics.borderWidth,
    borderRadius: Metrics.buttonRadius,
  },
})
