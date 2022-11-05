import React, { useEffect, useRef, useState } from 'react';
import { Block } from './Block';
import './index.css';

function App() {
  const [fromCurrency,setFromCurrency] = useState('AMD')
  const [fromPrice,setFromPrice] = useState(0)
  const [toPrice,setToPrice] = useState(1)
  const [toCurrency,setToCurrency] = useState('USD')
  const ratesRef = useRef({})
  useEffect(()=>{
    fetch('https://cdn.cur.su/api/latest.json')
    .then(res => res.json())
    .then((data) => {
      console.log(data)
     ratesRef.current = data.rates
      onChangeToPrice(1)
    })
  },[])

  const onChangeFromPrice = (value)=>{
    const price = value /  ratesRef.current[fromCurrency];
    const result = price *  ratesRef.current[toCurrency];
    setToPrice(result.toFixed(2))
    setFromPrice(value)
  }
  const onChangeToPrice = (value)=>{
    const result = ( ratesRef.current[fromCurrency] /  ratesRef.current[toCurrency]) * value;
    setFromPrice(result.toFixed(2))
    setToPrice(value)
  }

  useEffect(()=>{
    onChangeFromPrice(fromPrice)
  },[fromCurrency])

  useEffect(()=>{
    onChangeToPrice(toPrice)
  },[toCurrency])

  return (
    <div className="App">
      <Block 
      value={fromPrice} 
      currency={fromCurrency} 
      onChangeCurrency={setFromCurrency}
      onChangeValue={onChangeFromPrice}/>

      <Block 
      value={toPrice} 
      currency={toCurrency} 
      onChangeCurrency={setToCurrency}
      onChangeValue={onChangeToPrice}/>
    </div>
  );
}

export default App;

