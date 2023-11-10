/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import RTNCenteredText from 'rtn-centered-text/js/RTNCenteredTextNativeComponent';

const App: () => JSX.Element = () => {
  return (
    <RTNCenteredText text="Hello World!" style={{width: '100%', height: 30}} />
  );
};
export default App;
