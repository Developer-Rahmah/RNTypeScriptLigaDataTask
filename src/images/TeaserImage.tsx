import React from 'react'
import {Image, ImageSourcePropType} from 'react-native'
import Styles from 'LigaDataTask/assets/styles'
import Teams from 'LigaDataTask/assets/icons/teams.png'

const TeaserImage = ({
  source,
  smallImg = false,
  color = null,
  style = {},
}: {
  source?: ImageSourcePropType
  smallImg?: boolean
  color?: string
  style?: object
}) => {
  return (
    <Image
      source={source ? source : Teams}
      style={[
        smallImg
          ? Styles.ImageStyles.smallTeaserImage
          : Styles.ImageStyles.teaserImage,
        style,
      ]}
    />
  )
}

export default TeaserImage
