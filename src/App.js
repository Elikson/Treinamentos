import React from 'react'

function App() {

  React.useEffect(() => {
    window.location.href = "https://www.udemy.com/user/elikson-bastos-tavares"
  }, [])

  return (
    <div>App</div>
  )
}

export default App