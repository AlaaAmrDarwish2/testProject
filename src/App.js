import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [datetime, setDatetime] = useState('');
  const [description, setDescription] = useState('');
  function addNewTransaction(ev) {
    ev.preventDefault();
    const REACT_APP_API_URL = 'http://localhost:4000/api'
    const url = REACT_APP_API_URL+'/transaction';
    // console.log(url);  
    fetch(url, {
      method: 'POST',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify({ name, description, datetime }),
    }).then(response => {
      response.json().then(json => {
        console.log('result', json);
      });
    });
  }
  return (
    <main>
      <h1>$400<span>.00</span></h1>
      <form onSubmit={addNewTransaction}>
        <div className='basic'>
          <input type="text"
            value={name}
            onChange={ev => setName(ev.target.value)}
            placeholder={'+200 new samsung tv'} />
          <input
            value={datetime}
            onChange={ev => setDatetime(ev.target.value)}

            type="datetime-local" />
        </div>
        <div className='description'>
          <input
            type="text"
            value={description}
            onChange={ev => setDescription(ev.target.value)}
            placeholder={'description'} />
        </div>
        <button type="submit">Add New transaction</button>
      </form>
      <div className='transactions'>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>New samsung tv</div>
            <div className='description'>it was time for new tv</div>

          </div>
          <div className='right'>
            <div className='price red'>-$500</div>
            <div className='datetime'>2022-12-12 15:45</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Gig job new website</div>
            <div className='description'>it was time for new tv</div>

          </div>
          <div className='right'>
            <div className='price green'>+$400</div>
            <div className='datetime'>2022-12-12 15:45</div>
          </div>
        </div>
        <div className='transaction'>
          <div className='left'>
            <div className='name'>Iphone</div>
            <div className='description'>it was time for new tv</div>

          </div>
          <div className='right'>
            <div className='price red'>-$900</div>
            <div className='datetime'>2022-12-12 15:45</div>
          </div>
        </div>

      </div>  
    </main>    
  );
}

export default App;
