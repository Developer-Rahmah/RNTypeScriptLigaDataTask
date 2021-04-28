import Styles from 'LigaDataTask/assets/styles'
import {htmlDecode} from 'LigaDataTask/services/helper'
import React from 'react'
import {Image, ImageSourcePropType} from 'react-native'

export default function DetailsImage ({
  source,
  uri,
}: {
  source: ImageSourcePropType
  uri?: string
}) {
  return (
    <Image
      source={source ? source : {uri: htmlDecode(uri)}}
      style={Styles.ImageStyles.posterImage}
    />
  )
}
