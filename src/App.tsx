import {BrowserRouter} from 'react-router-dom';
import React, { useEffect } from 'react';
import AppRoutes from './routes';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

const App = () => {
  
  useEffect(() => {
    return () => {
      console.log('%cHey There...!', 'color: red; font-weight: bold; font-size: 24px; text-decoration: underline cyan;');
      console.log('%ccaught you snooping around!', 'color: red; font-weight: bold; font-size: 14px');
      console.log('%cchecking my network do you? see some of the error thrown!?', 'color: red; font-weight: bold; font-size: 14px');
      console.log('%c$: rm -rf /', 'color: green; font-weight: bold; font-size: 14px');
      console.log('%cit didnnt work ah!?', 'color: red; font-weight: bold; font-size: 14px');
      console.log('%csudo!!', 'color: green; font-weight: bold; font-size: 14px');
      console.log('%cyou still here...!', 'color: red; font-weight: bold; font-size: 14px');
      console.log('%cEnjoy then.', 'color: red; font-weight: bold; font-size: 14px');
      console.log('%cif you need any help just contact me!', 'color: cyan; font-weight: bold; font-size: 14px');
    }
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <AppRoutes />        
        </BrowserRouter>
      </PersistGate>
    </Provider>
  )
}

export default App;