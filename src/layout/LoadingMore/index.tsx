import React from 'react'
import {View} from 'react-native'
import Loader from 'LigaDataTask/src/general/Loader'

const LoadingMore = ({loading}: {loading: boolean}) => {
  return <View>{loading ? <Loader /> : null}</View>
}

export default LoadingMore
