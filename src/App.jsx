import React, {Fragment, Suspense} from "react";

const TodoList = React.lazy(() => import('./todoList'))

function App() {
  
  return <Fragment>
    <Suspense fallback={<div>loading...</div>}>
      <TodoList />
    </Suspense>
  </Fragment>
}

export default App;
