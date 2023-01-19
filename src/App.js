import React from 'react'

function App() {

  React.useEffect(() => {
    window.location.replace("https://www.udemy.com/user/elikson-bastos-tavares/")
  }, [])


  return (
    <div>Funcionando</div>
  )
}

export default App