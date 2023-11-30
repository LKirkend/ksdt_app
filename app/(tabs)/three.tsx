/* This is the schedule implemented with webview
* This requires you to download the webview package  
*/

/*imports */
import { WebView } from 'react-native-webview';

/** 
 *  @return WebView element linked to Spinitron schedule */
export default function Schedule (){
return ( 
    <WebView
    source={{ uri: 'https://spinitron.com/KSDT/calendar' }}
  />
);
}




