import React, {Fragment, forwardRef, useEffect, useImperativeHandle, useRef, useState} from "react";

const UseInfo = forwardRef ((props, ref) => {
  const inputRef = useRef(null);

  // 父组件调用子组件DOM时，能够对DOM节点上的返回内容中转做一层限制
  useImperativeHandle(ref, () => {
    return {
      blur(){
        // inputRef.current.blur()
      },
      focaus(){
        // inputRef.current.focaus()
        console.log(inputRef);
        inputRef.current.focaus()
      },
      value: inputRef.current.value
    }
  })
  const [value, setValue ] = useState('deLl');
  return <input ref={inputRef} value={value} onChange={(e) => {setValue(e.target.value)}}></input>
})


function App() {
  const parentRef = useRef(null);

  useEffect(()=>{
    // parentRef.current.focaus();
  console.log( parentRef.current.value);
  }, [])
  return <Fragment>
    <UseInfo ref={parentRef} />
  </Fragment>
}

export default App;
