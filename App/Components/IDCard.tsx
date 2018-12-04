import * as React from 'react'
import { StyleSheet, Text, View, Image, Button } from 'react-native'
import { Images, Colors, Metrics } from '../Themes'
import { IPerson } from '../../App'

export default class IDCard extends React.Component<IPerson, {}> {
  constructor(props: IPerson) {
    super(props)
  }

  render() {
    return (
      <View style={styles.card}>
        <View style={styles.mainInfoView}>
          <Image style={styles.picture} source={Images.jedi1} />
          <View style={styles.mainInfo}>
            <Text style={{ fontWeight: 'bold' }}>{this.props.name}</Text>
            <Text style={{ fontWeight: '500' }}>{this.props.gender}</Text>
          </View>
        </View>
        <View style={styles.rowItem}>
          <Text style={{ fontWeight: 'bold' }}>Birth Year</Text>
          <Text style={{ fontWeight: 'bold' }}>Height</Text>
          <Text style={{ fontWeight: 'bold' }}>Weight</Text>
        </View>
        <View style={[styles.rowItem, { marginTop: 0 }]}>
          <Text>{this.props.birthYear}</Text>
          <Text>{this.props.height}</Text>
          <Text>{this.props.weight}</Text>
        </View>
        <View style={styles.rowItem}>
          <Text style={{ fontWeight: 'bold' }}>Hair Color</Text>
          <Text style={{ fontWeight: 'bold' }}>Eye Color</Text>
          <Text style={{ fontWeight: 'bold' }}>Skin Color</Text>
        </View>
        <View style={[styles.rowItem, { marginTop: 0 }]}>
          <Text>{this.props.hairColor}</Text>
          <Text>{this.props.eyeColor}</Text>
          <Text>{this.props.skinColor}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    padding: Metrics.doubleBaseMargin,
    width: Metrics.screenWidth * 0.9,
    borderWidth: Metrics.borderWidth,
    borderRadius: Metrics.buttonRadius,
  },
  mainInfoView: {
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  picture: {
    height: Metrics.images.large,
    width: Metrics.images.large,
    borderRadius: Metrics.images.large * 0.5,
  },
  mainInfo: {
    flexDirection: 'column',
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
  rowItem: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: Metrics.marginVertical,
    marginLeft: Metrics.marginHorizontal,
    marginRight: Metrics.marginHorizontal,
  },
  colItem: {
    flexDirection: 'column',
  },
})
