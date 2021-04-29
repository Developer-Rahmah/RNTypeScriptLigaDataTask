import React from 'react'
import {Text} from 'react-native'
import Styles from 'LigaDataTask/assets/styles'
import {tahomaFont, tahomaFontBold} from 'LigaDataTask/assets/styles/Fonts'

export default function Title ({
  title,
  color = Styles.Colors.BLACK,
  numberOfLines = 1,
  style = {},
  bold = false,
}: {
  title?: string
  color?: string
  numberOfLines?: number
  style?: object
  bold?: boolean
}) {
  return (
    <Text
      style={[
        Styles.Elements.title,
        {color, fontFamily: bold ? tahomaFontBold : tahomaFont},
        style,
      ]}
      numberOfLines={numberOfLines}>
      {title}
    </Text>
  )
}
