/* This is the schedule */

/*imports */
import { StyleSheet } from 'react-native';
import { Text, View } from '../../components/Themed';
import { WebView } from 'react-native-webview';

export default function Schedule (){
return ( 
    <WebView
    source={{ uri: 'https://spinitron.com/KSDT/calendar' }}
  />
);
}