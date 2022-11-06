import React from 'react';
import './index.css';

export default function Singlecolor({rgb, weight, index, hexColor}){

    const [alert, setAlert] = React.useState(false);
    const bcg = rgb.join(',')
    const hexValue = `#${hexColor}`

    const styles = {
        backgroundColor : `rgb(${bcg})`
    }

    React.useEffect(() =>{
        const timer = setTimeout(() => {
            setAlert(false)
        }, 3000)
        return () => clearTimeout(timer)

    },[alert])
    function clipboard(){
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
    }
  return (
    <article className={`colors ${index > 10 && 'color-light'}`}
    style={styles} onClick={clipboard} >
     <p> {weight}%</p>
     <p> {hexValue}</p>
     {alert && <p className='clipboard'> Copied to Clipboard </p>}
    </article>
  )
}