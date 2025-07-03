import Screen1 from './views/Screen1.jsx';
import Screen2 from './views/Screen2.jsx';

function App(){
  return(
    <div className='flex flex-col relative overflow-x-hidden'>
      <Screen1 />
      <Screen2 />
    </div>
  )
}

export default App