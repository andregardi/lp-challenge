import {useEffect} from 'react';
import getProperties from './services/getProperties';

async function load() {
  const a = await getProperties();
  console.log(a)
 
}

function App() {
  useEffect( ()=>{
    load()
  },[])
  return (
    <div className="App">
     
    </div>
  );
}

export default App;
