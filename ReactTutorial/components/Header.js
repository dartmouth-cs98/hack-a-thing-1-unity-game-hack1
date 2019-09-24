import React from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'

const Header = (props) => (
  <View >
    <View >
      <Text>{props.title.toUpperCase()}</Text>
    </View>
    <View >
      <Text>{props.subtitle}</Text>
      </View>
  </View>
)

Header.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
}

export default Header