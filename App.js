
import Skeleton from 'react-loading-skeleton';
import './App.css';
import TodoApp from './Todo';
import Spinner from './component/Spiners';
import 'react-loading-skeleton/dist/skeleton.css';

function App(){
 
  return (
    
    <div >
    <Spinner/>
    <Skeleton count={190} />
    <TodoApp/>
      
    </div>
  );
}

export default App;
