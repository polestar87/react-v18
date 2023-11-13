import React, {Fragment, useCallback, useState} from "react";

function App() {
  const [content, setContent] = useState('')

  const handleContentChange = useCallback((e) => {
    setContent(e.target.value)
  }, [])

  return <Fragment>
    <input value={content ? content : ''} onChange={handleContentChange} />
  </Fragment>
}

export default App;
