
import './App.css';
import Child from './Child';

function App() {
  // const data='Saniya';
  function getData(data){
    console.log(data);
  }
  return (
    <div>
      {/* <Child data={data}/> */}
      <Child getData={getData}/>
      <axiosdemo/>
    </div>
  );
}

export default App;
