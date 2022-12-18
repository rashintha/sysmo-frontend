import React from 'react'
import { AtSymbolIcon, FingerPrintIcon } from '@heroicons/react/24/solid'
import './Login.css'

const Login = () => {
  return (
    <div className='h-full'>
      <svg className='fixed top-0 login-background-design' width="1346" height="1080" viewBox="0 0 1346 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M105.761 -112.5C122.312 -141.167 163.688 -141.167 180.239 -112.5L463.429 378C479.98 406.667 459.292 442.5 426.19 442.5H-140.19C-173.292 442.5 -193.98 406.667 -177.429 378L105.761 -112.5Z" fill="#D68484" fill-opacity="0.5" />
        <path d="M225.169 360.739C253.835 344.188 289.668 364.877 289.668 397.978L289.668 964.359C289.668 997.46 253.835 1018.15 225.168 1001.6L-265.332 718.408C-293.998 701.857 -293.998 660.48 -265.332 643.929L225.169 360.739Z" fill="#8A668F" fill-opacity="0.5" />
        <path d="M130.002 636.587C116.762 606.248 141.328 572.954 174.222 576.657L737.048 640.009C769.942 643.712 786.492 681.634 766.839 708.27L430.561 1164.02C410.908 1190.65 369.791 1186.02 356.55 1155.68L130.002 636.587Z" fill="#296448" fill-opacity="0.5" />
        <path d="M126.497 302.414C104.57 277.616 117.711 238.382 150.15 231.792L705.193 119.038C737.632 112.448 765.04 143.445 754.528 174.833L574.654 711.892C564.141 743.28 523.593 751.517 501.667 726.719L126.497 302.414Z" fill="#426D77" fill-opacity="0.5" />
        <path d="M584.426 592.217C585.139 559.123 621.409 539.211 649.713 556.374L1134.01 850.053C1162.31 867.217 1161.42 908.584 1132.4 924.514L635.923 1197.08C606.907 1213.01 571.527 1191.56 572.239 1158.47L584.426 592.217Z" fill="#DF720D" fill-opacity="0.5" />
      </svg>


      <div className='flex flex-row h-full'>
        <div className='basis-4/6 flex items-center justify-center h-full'>
          <div className='sysmo-text text-neutral-800'>Sysmo</div>
        </div>
        <div className='basis-2/6 flex flex-col items-center justify-center h-full'>
          <div className='text-neutral-800'>Login below to get started.</div>

          <div className='mt-6 bg-white py-2 px-2 w-7/12 flex flex-row'>
            <div className='border-r-[1px] mr-2 pr-2'>
              <AtSymbolIcon className='w-6 text-neutral-800'></AtSymbolIcon>
            </div>
            <input className='outline-none w-full' type='email' placeholder='Email Address'></input>
          </div>

          <div className='mt-2 bg-white py-2 px-2 w-7/12 flex flex-row'>
            <div className='border-r-[1px] mr-2 pr-2'>
              <FingerPrintIcon className='w-6 text-neutral-800'></FingerPrintIcon>
            </div>
            <input className='outline-none w-full' type='password' placeholder='Password'></input>
          </div>

          <div className='mt-4 w-7/12'>
            <button className='bg-slate-500 hover:bg-slate-600 py-2 px-2 w-full text-white'>LOGIN</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login