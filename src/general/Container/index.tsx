import styles from 'LigaDataTask/assets/styles'
import React from 'react'
import {View} from 'react-native'

export default function Container ({
  children,
  style = {},
  ...rest
}: {
  children?: JSX.Element

  style?: object
}) {
  return (
    <View
      style={[
        styles.General.fullScreen,
        styles.General.largePadding,
        styles.General.lightYellowBackground,
        styles.General.paddingBottom,
        styles.General.justifyContentCenter,
      ]}
      {...rest}>
      {children}
    </View>
  )
}
