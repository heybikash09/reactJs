import React from 'react'

function InputBox() {
  return (
    <div className='flex justify-center mt-[10rem]'>
        <div className=' w-[40%] h-[150px] bg-green-400 rounded-2xl flex'>
          <div>
            <label htmlFor="from"></label><br />
            <input className=' bg-gray-400 absolute ml-7 mt-28 rounded-lg h-[30px]' type="number" name="" id="from" />
          </div>
          <div></div>
        </div>
    </div>
  )
}

export default InputBox
