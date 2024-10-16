import { StyleSheet, Text, View } from 'react-native'
import Flatlist from './components/Flatlist'
import Modals from './components/Modals'
import ScrollViews from './components/ScrollViews'
import ScrollableEmojiList from './components/ScrollableEmojiList'


const App = () => {
  return (
      <>
      {/* <Flatlist /> */}
      {/* <Modals /> */}
      {/* <ScrollViews/> */}
      <View style={{ flex: 1 }}>
      <ScrollableEmojiList />
    </View>
      </>
  )
}

export default App

const styles = StyleSheet.create({})