import styles from 'LigaDataTask/assets/styles'
import {Function} from 'lodash'
import React from 'react'
import {View, TouchableOpacity, GestureResponderEvent} from 'react-native'
/**
 *
 * @param {import('react-native').TouchableOpacityProps|import('react-native').ViewProps} props
 */

export default function Card ({
  children,
  clickable = true,
  radius = true,
  style = {},
  ...rest
}: {
  children?: JSX.Element
  clickable?: boolean
  radius?: boolean
  style?: object
  onPress?:()=>void
}) {
  const Component = clickable ? TouchableOpacity : (View as React.ElementType)
  return (
    <Component
      style={[styles.Layout.card, radius && styles.Layout.radius, style]}
      {...rest}>
      {children}
    </Component>
  )
}
