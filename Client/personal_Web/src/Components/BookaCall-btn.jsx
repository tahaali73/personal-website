import React from 'react'

function BookaCall_btn({btn_name, width = '160px', height = '59px' }) {
  return (
    <div>
      <button className='bg-[#5700FF] flex justify-center rounded-md items-center gap-[5px] pt-{16px}, pb-{16px}, pl-{18px}, pr-{18px}' style={{ width: width, height: height }}>
        <div className='h-[24px] w-[24px]'><img src="src\assets\phoneIcon.png" alt="phoneIcon" /></div>
        <div className='font-manrope font-medium text-md text-white'>{btn_name}</div>
      </button>
    </div>
  )
}

export default BookaCall_btn
