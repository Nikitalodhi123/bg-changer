import { useState } from 'react';


function app(){
  const [color, setcClor] = useState("olive")

return(
<div className="w-full h-screen duration-200"
  style={{ backgroundColor: color }}>
<div className='fixed flex flex-wrap
justify-center bottom-12 insert-x-0 px-2'>
<div className='flex flex-wrap justify-center
gap-3 shadow-lg bg-white px-3 py-2
rounded-3xl'>
<button className='bg-red-500 text-white px-4 py-2 rounded-full'
  onClick={() => setcClor("red")}>Red</button>
  <button className='bg-green-600 text-white px-4 py-2 rounded-full'
  onClick={() => setcClor("green")}>green</button>
  <button className='bg-blue-700 text-white px-4 py-2 rounded-full'
  onClick={() => setcClor("blue")}>blue</button>
  




</div>



  </div>



</div>















)
}
export default app;