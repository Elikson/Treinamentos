import React from 'react'

function App() {

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      // 👇️ redirects to an external URL
      window.location.replace('https://www.udemy.com/user/elikson-bastos-tavares');
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div>App</div>
  )
}

export default App