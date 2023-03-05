import star from './images/icon-star.svg';
import { useState } from 'react';
import Thankyou from './Thankyou';

function App() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [items,setItems] = useState("");
  const Button=({number}) =>{
    return <button onClick={()=>{setItems(number)}} className=' btn-number bg-gray-700 h-10 w-10 rounded-full text-gray-400 py-2.5 focus: bg-gray-300 focus: text-white'>{number}</button>
  }

  return (
    <>
      { !isSubmitted && <div className="container-1 ">
        <img className= "bg-gray-700 p-3 rounded-full "src={star} alt=""/>
        <h2 className='text-white text-3xl my-6'>How did we do?</h2>
        

        <p className='text-gray-300 mb-10'>Please let us know how we did with your support request. All feedback is appreciated
        to help us improve our offering!</p>

        <ul className='grid grid-cols-5 gap-3 mb-10 '>
        <li>
          <Button number={1}/>
        </li>
        <li>
          <Button number={2}/>
        </li>
        <li>
          <Button number={3}/>
        </li>
        <li>
          <Button number={4}/>
        </li>
        <li>
          <Button number={5}/>
        </li>
        </ul>

        <div className='text-center'>
            <button onClick={()=>{setIsSubmitted(true)}}className="btn-rating w-full text-white tracking-wide rounded-full pt-3 pb-2 ">SUBMIT</button>
        </div>
      </div>}

      {isSubmitted && <Thankyou items={items}/>}
    </>
    
  );
}

export default App;
