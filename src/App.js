import textFile from '../src/assets/summary_note.txt';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [state, setstate] = useState([])
  const keyword = ['total cost is', 'total of', 'total is', 'Jim paid']

  useEffect(() => {
    fetch(textFile).then((res) => {
      return res.text()
    }).then((data) => {
      const keyword1 = data.indexOf(keyword[0])
      const keyword2 = data.indexOf(keyword[1])
      const keyword3 = data.indexOf(keyword[2])
      const keyword4 = data.indexOf(keyword[3])
      const res = data.slice(keyword1 + keyword[0].length)
      const res2 = data.slice(keyword2 + keyword[1].length)
      const res3 = data.slice(keyword3 + keyword[2].length)
      const res4 = data.slice(keyword4 + keyword[3].length)
      const result = res.slice(0, 11)
      const result2 = res2.slice(0, 8)
      const result3 = res3.slice(0, 8)
      const result4 = res4.slice(0, 8)
      setstate([result, result2, result3, result4])
    })
  }, [])


  return (
    <div className="App">
      {state[0]}<br />
      {state[1]}<br />
      {state[2]}<br />
      {state[3]}<br />
    </div>
  );
}

export default App;
