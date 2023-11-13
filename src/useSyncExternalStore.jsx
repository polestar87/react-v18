import React, {Fragment, useSyncExternalStore} from "react";

function subscribe(callback){
  window.addEventListener('online', callback)
  window.addEventListener('offline', callback)

  return () => {
    window.removeEventListener('online', callback)
    window.removeEventListener('offline', callback)
  }
}

function App() {
  const isOnline = useSyncExternalStore(subscribe, () => window.navigator.onLine)
  return <Fragment>
    {isOnline.toString()}
  </Fragment>
}

export default App;
