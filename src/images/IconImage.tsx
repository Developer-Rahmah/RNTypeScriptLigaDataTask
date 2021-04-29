import Styles from 'LigaDataTask/assets/styles'
import React from 'react'
import {Image, ImageSourcePropType} from 'react-native'
import Colors from 'LigaDataTask/assets/styles/Colors'
export default function IconImage ({
  source,
  color = Colors.darkGray,
  mediumIcon = false,
}: {
  source?: ImageSourcePropType
  color?: string
  mediumIcon?: boolean
}) {
  return (
    <Image
      source={source}
      style={[
        mediumIcon
          ? Styles.ImageStyles.mediumIcon
          : Styles.ImageStyles.iconImage,
        {tintColor: color},
      ]}
    />
  )
}
