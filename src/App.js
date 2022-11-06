import React  from 'react';
import './index.css';
import Values from 'values.js'
import Singlecolor from './Singlecolor';

export default function App(){

const[color, setColor] = React.useState('');
const[error, setError] = React.useState(false);
const [list, setList] = React.useState(new Values('#f15025').all(10))


function handleChange(event) {
event.preventDefault()
try {
  let colors = new Values(color).all(10);
  setList(colors);
} catch (error) {
  setError(true);
  console.log(error);
}
}

return(
  <>
 <article>
  <h1> Color Changer </h1>
  <form onSubmit={handleChange}>
    <input
    type='text'
    placeholder='#0000FF'
    value={color}
    onChange={(event) => setColor(event.target.value)}
    className={`${error ? 'input' : null}`}
    />
    <button type='submit' className='btn btn-primary ms-5'> Submit </button>
  </form>
 </article>

 <section>
  <div className='color-section'>
  {list.map((color, index) => {
          return (
            <Singlecolor
              key={index}
              {...color}
              index={index}
              hexColor={color.hex}
            />
          )
        })}     
  </div>
 </section>
  </>
)
} 