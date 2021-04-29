import React from 'react'
import {Text} from 'react-native'
import Styles from 'LigaDataTask/assets/styles'
import Colors from 'LigaDataTask/assets/styles/Colors'
export default function Summary ({
  description,
  color = Colors.BLACK,
  numberOfLines = 3,
  onPress = null,
  textDecorationLine,
}: {
  description?: string
  color?: string
  numberOfLines?: number
  onPress?: () => void
  textDecorationLine?: string
}) {
  return (
    <Text
      onPress={() => onPress}
      style={[
        Styles.Elements.summary,
        {
          color: color,
          textDecorationLine: textDecorationLine ? 'underline' : 'none',
        },
      ]}
      numberOfLines={numberOfLines}>
      {description}
    </Text>
  )
}
