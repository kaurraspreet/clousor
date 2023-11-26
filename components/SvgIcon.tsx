import React from 'react'

type Props = { className: string }
export const Facebook = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      // className='fill-gray-400 inline hover:fill-white w-7 h-7'
      className={className}
      viewBox='0 0 24 24'
    >
      <path
        fill-rule='evenodd'
        d='M19 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h7v-7h-2v-3h2V8.5A3.5 3.5 0 0 1 15.5 5H18v3h-2a1 1 0 0 0-1 1v2h3v3h-3v7h4a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2z'
        clip-rule='evenodd'
      />
    </svg>
  )
}

export const LinkedIn = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      // className='fill-gray-400 inline hover:fill-white w-7 h-7 ml-2'
      className={className}
      viewBox='0 0 24 24'
    >
      <path
        fill-rule='evenodd'
        d='M21 5a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5zm-2.5 8.2v5.3h-2.79v-4.93a1.4 1.4 0 0 0-1.4-1.4c-.77 0-1.39.63-1.39 1.4v4.93h-2.79v-8.37h2.79v1.11c.48-.78 1.47-1.3 2.32-1.3 1.8 0 3.26 1.46 3.26 3.26zM6.88 8.56a1.686 1.686 0 0 0 0-3.37 1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68zm1.39 1.57v8.37H5.5v-8.37h2.77z'
        clip-rule='evenodd'
      />
    </svg>
  )
}

export const Instagram = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      // className='fill-gray-400 inline hover:fill-white w-7 h-7 ml-2'
      className={className}
      viewBox='0 0 24 24'
    >
      <path d='M12 9.3a2.7 2.7 0 1 0 0 5.4 2.7 2.7 0 0 0 0-5.4Zm0-1.8a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm5.85-.225a1.125 1.125 0 1 1-2.25 0 1.125 1.125 0 0 1 2.25 0ZM12 4.8c-2.227 0-2.59.006-3.626.052-.706.034-1.18.128-1.618.299a2.59 2.59 0 0 0-.972.633 2.601 2.601 0 0 0-.634.972c-.17.44-.265.913-.298 1.618C4.805 9.367 4.8 9.714 4.8 12c0 2.227.006 2.59.052 3.626.034.705.128 1.18.298 1.617.153.392.333.674.632.972.303.303.585.484.972.633.445.172.918.267 1.62.3.993.047 1.34.052 3.626.052 2.227 0 2.59-.006 3.626-.052.704-.034 1.178-.128 1.617-.298.39-.152.674-.333.972-.632.304-.303.485-.585.634-.972.171-.444.266-.918.299-1.62.047-.993.052-1.34.052-3.626 0-2.227-.006-2.59-.052-3.626-.034-.704-.128-1.18-.299-1.618a2.619 2.619 0 0 0-.633-.972 2.595 2.595 0 0 0-.972-.634c-.44-.17-.914-.265-1.618-.298-.993-.047-1.34-.052-3.626-.052ZM12 3c2.445 0 2.75.009 3.71.054.958.045 1.61.195 2.185.419A4.388 4.388 0 0 1 19.49 4.51c.457.45.812.994 1.038 1.595.222.573.373 1.227.418 2.185.042.96.054 1.265.054 3.71 0 2.445-.009 2.75-.054 3.71-.045.958-.196 1.61-.419 2.185a4.395 4.395 0 0 1-1.037 1.595 4.44 4.44 0 0 1-1.595 1.038c-.573.222-1.227.373-2.185.418-.96.042-1.265.054-3.71.054-2.445 0-2.75-.009-3.71-.054-.958-.045-1.61-.196-2.185-.419A4.402 4.402 0 0 1 4.51 19.49a4.414 4.414 0 0 1-1.037-1.595c-.224-.573-.374-1.227-.419-2.185C3.012 14.75 3 14.445 3 12c0-2.445.009-2.75.054-3.71s.195-1.61.419-2.185A4.392 4.392 0 0 1 4.51 4.51c.45-.458.994-.812 1.595-1.037.574-.224 1.226-.374 2.185-.419C9.25 3.012 9.555 3 12 3Z' />
    </svg>
  )
}

export const Twitter = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      // className='fill-gray-400 inline hover:fill-white w-7 h-7 ml-2'
      className={className}
      viewBox='0 0 24 24'
    >
      <path d='M22.92 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.83 4.5 17.72 4 16.46 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98-3.56-.18-6.73-1.89-8.84-4.48-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.9 20.29 6.16 21 8.58 21c7.88 0 12.21-6.54 12.21-12.21 0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z' />
    </svg>
  )
}

export const ChevronIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      viewBox='0 0 5 6'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M0.128 5.868L3.032 3.108L0.128 0.36H1.508L4.412 3.108L1.508 5.868H0.128Z' />
    </svg>
  )
}

export const SoftChevronIcocn = ({ className }: Props) => {
  return (
    <svg
      className={`text-gray-500 flex-non ${className}`}
      viewBox='0 0 20 20'
      fill='currentColor'
      aria-hidden='true'
    >
      <path
        fill-rule='evenodd'
        d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
        clip-rule='evenodd'
      />
    </svg>
  )
}

export const MenuIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      aria-hidden='true'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
      />
    </svg>
  )
}

export const CloseIcon = ({ className }: Props) => {
  return (
    <svg
      className={className}
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      aria-hidden='true'
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M6 18L18 6M6 6l12 12'
      />
    </svg>
  )
}
export const Quote = ({ className }: Props) => {
  return (
    <svg
    xmlns='http://www.w3.org/2000/svg'
    fill='currentColor'
    className={`block text-gray-400 mb-4 ${className}`}
    viewBox='0 0 975.036 975.036'
  >
    <path d='M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z'></path>
  </svg>
    )}
export const Female = ({ className }: Props) => {
  return (
    <svg
      height='200px'
      width='200px'
      className={className}
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 511.991 511.991'
      fill='#000000'
    >
      <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          fill='#A0D468'
          d='M438.905,386.353l-1.844-0.531c-26.468-7.109-35.405-13.938-47.187-18.422 c-41.812-15.922-52.688-27.391-55.468-32.812c-0.094-0.203-0.156-0.406-0.25-0.609l-0.344-48.546l-77.804-1.125l-77.795,1.125 l-0.344,48.546c-0.094,0.203-0.172,0.406-0.266,0.609c-2.781,5.422-13.656,16.891-55.468,32.812 c-11.781,4.484-20.734,11.312-47.203,18.422l-1.812,0.531c-24.094,7.969-40.312,30.312-40.312,55.529v70.109h223.199h223.176 v-70.109C479.186,416.665,462.998,394.322,438.905,386.353z'
        ></path>{' '}
        <path
          fill='#EAC6BB'
          d='M393.562,191.028c0,89.373-85.218,171.622-137.553,171.622c-52.358,0-137.56-82.249-137.56-171.622 c0-89.374,61.593-148.342,137.56-148.342C331.97,42.686,393.562,101.654,393.562,191.028z'
        ></path>{' '}
        <path
          fill='#ED5564'
          d='M417,117.092c-7.969-28.734-21.312-54.187-38.594-73.624c-19-21.343-42.28-34.765-67.374-38.812 C291.939,1.562,274.002,0,257.76,0c-66.343,0-86.842,25.546-88.967,28.453l-1.859,2.562l-5.406,100.889l13.141-2.203 c15.671-2.641,30.578-3.984,44.281-3.984c42.78,0,75.835,12.953,98.303,38.483c44.624,50.765,34.249,135.639,34.124,136.482 l-3.562,27.312l21.031-17.78c25.906-21.906,43.812-52.905,51.75-89.624C427.686,187.716,426.405,150.951,417,117.092z'
        ></path>{' '}
        <path
          fill='#DA4453'
          d='M174.355,22.297c-0.891,0.391-22.375,9.906-43.921,30.046c-28.968,27.094-44.281,60.64-44.281,96.983 c0,88.811,31.375,138.31,32.703,140.373l19.343,29.874l0.281-35.593c0.484-62.655,14.531-102.467,26.234-124.826 c12.219-23.374,21.906-30.765,22.641-31.327L174.355,22.297z'
        ></path>{' '}
      </g>
    </svg>
  )
}

export const Male = ({ className }: Props) => {
  return (
    <svg
      height='200px'
      width='200px'
      version='1.1'
      id='Layer_1'
      xmlns='http://www.w3.org/2000/svg'
      className={className}
      viewBox='0 0 511.995 511.995'
      fill='#000000'
    >
      <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          fill='#5D9CEC'
          d='M460.209,386.357l-1.812-0.531c-26.468-7.094-35.436-13.922-47.217-18.406 c-41.781-15.938-52.656-27.406-55.438-32.828c-0.109-0.203-0.188-0.406-0.281-0.609l-0.344-48.546l-99.123-1.125l-99.131,1.125 l-0.344,48.546c-0.086,0.203-0.164,0.406-0.266,0.609c-2.781,5.422-13.656,16.891-55.452,32.828 c-11.781,4.484-20.734,11.312-47.211,18.406l-1.812,0.531c-24.093,7.969-40.304,30.312-40.304,55.529v70.109h244.52h244.527v-70.109 C500.521,416.669,484.303,394.326,460.209,386.357z'
        ></path>{' '}
        <path
          fill='#EAC6BB'
          d='M393.555,191.485c0,89.374-85.218,171.623-137.561,171.623c-52.351,0-137.553-82.249-137.553-171.623 S180.026,43.159,255.994,43.159S393.555,102.111,393.555,191.485z'
        ></path>{' '}
        <path
          fill='#965353'
          d='M341.086,28.409c-23.39-21.187-104.654-51.624-180.021,0 c-59.436,40.718-53.437,143.373-53.437,143.373s77.991,19.703,167.334-31.328c57.749-33,77.873,0.562,88.217,29.781 c10.062,28.437,30.375,21.25,30.375,21.25S415.93,96.173,341.086,28.409z'
        ></path>{' '}
        <path
          fill='#7F4242'
          d='M315.274,126.83c8.156-0.25,15.016,1.547,20.812,4.75c11.093-40.25,32.937-51.077,42.468-53.937 c-3.109-6.25-6.719-12.516-10.906-18.719C352.055,65.065,327.399,81.752,315.274,126.83z'
        ></path>{' '}
      </g>
    </svg>
  )
}

export const Services = ({ className }: Props) => {
  return (
    <svg
      className={className}
      viewBox='0 0 48 48'
      version='1'
      xmlns='http://www.w3.org/2000/svg'
      enable-background='new 0 0 48 48'
      fill='#000000'
    >
      <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          fill='#ffffff'
          d='M25.6,34.4c0.1-0.4,0.1-0.9,0.1-1.4s0-0.9-0.1-1.4l2.8-2c0.3-0.2,0.4-0.6,0.2-0.9l-2.7-4.6 c-0.2-0.3-0.5-0.4-0.8-0.3L22,25.3c-0.7-0.6-1.5-1-2.4-1.4l-0.3-3.4c0-0.3-0.3-0.6-0.6-0.6h-5.3c-0.3,0-0.6,0.3-0.6,0.6L12.4,24 c-0.9,0.3-1.6,0.8-2.4,1.4l-3.1-1.4c-0.3-0.1-0.7,0-0.8,0.3l-2.7,4.6c-0.2,0.3-0.1,0.7,0.2,0.9l2.8,2c-0.1,0.4-0.1,0.9-0.1,1.4 s0,0.9,0.1,1.4l-2.8,2c-0.3,0.2-0.4,0.6-0.2,0.9l2.7,4.6c0.2,0.3,0.5,0.4,0.8,0.3l3.1-1.4c0.7,0.6,1.5,1,2.4,1.4l0.3,3.4 c0,0.3,0.3,0.6,0.6,0.6h5.3c0.3,0,0.6-0.3,0.6-0.6l0.3-3.4c0.9-0.3,1.6-0.8,2.4-1.4l3.1,1.4c0.3,0.1,0.7,0,0.8-0.3l2.7-4.6 c0.2-0.3,0.1-0.7-0.2-0.9L25.6,34.4z M16,38c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C21,35.8,18.8,38,16,38z'
        ></path>{' '}
        <path
          fill='#467CE9'
          d='M41.9,15.3C42,14.8,42,14.4,42,14s0-0.8-0.1-1.3l2.5-1.8c0.3-0.2,0.3-0.5,0.2-0.8l-2.5-4.3 c-0.2-0.3-0.5-0.4-0.8-0.2l-2.9,1.3c-0.7-0.5-1.4-0.9-2.2-1.3l-0.3-3.1C36,2.2,35.8,2,35.5,2h-4.9c-0.3,0-0.6,0.2-0.6,0.5l-0.3,3.1 c-0.8,0.3-1.5,0.7-2.2,1.3l-2.9-1.3c-0.3-0.1-0.6,0-0.8,0.2l-2.5,4.3c-0.2,0.3-0.1,0.6,0.2,0.8l2.5,1.8C24,13.2,24,13.6,24,14 s0,0.8,0.1,1.3l-2.5,1.8c-0.3,0.2-0.3,0.5-0.2,0.8l2.5,4.3c0.2,0.3,0.5,0.4,0.8,0.2l2.9-1.3c0.7,0.5,1.4,0.9,2.2,1.3l0.3,3.1 c0,0.3,0.3,0.5,0.6,0.5h4.9c0.3,0,0.6-0.2,0.6-0.5l0.3-3.1c0.8-0.3,1.5-0.7,2.2-1.3l2.9,1.3c0.3,0.1,0.6,0,0.8-0.2l2.5-4.3 c0.2-0.3,0.1-0.6-0.2-0.8L41.9,15.3z M33,19c-2.8,0-5-2.2-5-5c0-2.8,2.2-5,5-5c2.8,0,5,2.2,5,5C38,16.8,35.8,19,33,19z'
        ></path>{' '}
      </g>
    </svg>
  )
}

export const Email = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={className}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75'
      />
    </svg>
  )
}

export const Follow = ({ className }: Props) => {
  return (
    <svg
      viewBox='0 0 24 24'
      className={className}
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <g id='SVGRepo_bgCarrier' stroke-width='0'></g>
      <g
        id='SVGRepo_tracerCarrier'
        stroke-linecap='round'
        stroke-linejoin='round'
      ></g>
      <g id='SVGRepo_iconCarrier'>
        {' '}
        <path
          fill-rule='evenodd'
          clip-rule='evenodd'
          d='M13.803 5.33333C13.803 3.49238 15.3022 2 17.1515 2C19.0008 2 20.5 3.49238 20.5 5.33333C20.5 7.17428 19.0008 8.66667 17.1515 8.66667C16.2177 8.66667 15.3738 8.28596 14.7671 7.67347L10.1317 10.8295C10.1745 11.0425 10.197 11.2625 10.197 11.4872C10.197 11.9322 10.109 12.3576 9.94959 12.7464L15.0323 16.0858C15.6092 15.6161 16.3473 15.3333 17.1515 15.3333C19.0008 15.3333 20.5 16.8257 20.5 18.6667C20.5 20.5076 19.0008 22 17.1515 22C15.3022 22 13.803 20.5076 13.803 18.6667C13.803 18.1845 13.9062 17.7255 14.0917 17.3111L9.05007 13.9987C8.46196 14.5098 7.6916 14.8205 6.84848 14.8205C4.99917 14.8205 3.5 13.3281 3.5 11.4872C3.5 9.64623 4.99917 8.15385 6.84848 8.15385C7.9119 8.15385 8.85853 8.64725 9.47145 9.41518L13.9639 6.35642C13.8594 6.03359 13.803 5.6896 13.803 5.33333Z'
          fill='currentColor'
        ></path>{' '}
      </g>
    </svg>
  )
}

export const Phone = ({ className }: Props) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      stroke-width='1.5'
      stroke='currentColor'
      className={className}
    >
      <path
        stroke-linecap='round'
        stroke-linejoin='round'
        d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
      />
    </svg>
  )
}

export const HalfCircle = () => {
  return (
    <svg
      width='100'
      height='100'
      viewBox='0 0 100 100'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M0 100C0 44.7715 0 0 0 0C55.2285 0 100 44.7715 100 100C100 100 100 100 0 100Z'
        fill='#3056D3'
      />
    </svg>
  )
}
export const DotShape1 = () => {
  return (
    <svg
      width='34'
      height='134'
      viewBox='0 0 34 134'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='31.9993'
        cy='132'
        r='1.66667'
        transform='rotate(180 31.9993 132)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 31.9993 117.333)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 31.9993 102.667)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='88'
        r='1.66667'
        transform='rotate(180 31.9993 88)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 31.9993 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='45'
        r='1.66667'
        transform='rotate(180 31.9993 45)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='16'
        r='1.66667'
        transform='rotate(180 31.9993 16)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='59'
        r='1.66667'
        transform='rotate(180 31.9993 59)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 31.9993 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 31.9993 1.66665)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='132'
        r='1.66667'
        transform='rotate(180 17.3333 132)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 17.3333 117.333)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 17.3333 102.667)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='88'
        r='1.66667'
        transform='rotate(180 17.3333 88)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 17.3333 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='45'
        r='1.66667'
        transform='rotate(180 17.3333 45)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='16'
        r='1.66667'
        transform='rotate(180 17.3333 16)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='59'
        r='1.66667'
        transform='rotate(180 17.3333 59)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 17.3333 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 17.3333 1.66665)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='132'
        r='1.66667'
        transform='rotate(180 2.66536 132)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 2.66536 117.333)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 2.66536 102.667)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='88'
        r='1.66667'
        transform='rotate(180 2.66536 88)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 2.66536 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='45'
        r='1.66667'
        transform='rotate(180 2.66536 45)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='16'
        r='1.66667'
        transform='rotate(180 2.66536 16)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='59'
        r='1.66667'
        transform='rotate(180 2.66536 59)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 2.66536 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 2.66536 1.66665)'
        fill='#13C296'
      />
    </svg>
  )
}
export const DotShape2 = () => {
  return (
    <svg
      width='107'
      height='134'
      viewBox='0 0 107 134'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
    >
      <circle
        cx='104.999'
        cy='132'
        r='1.66667'
        transform='rotate(180 104.999 132)'
        fill='#13C296'
      />
      <circle
        cx='104.999'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 104.999 117.333)'
        fill='#13C296'
      />
      <circle
        cx='104.999'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 104.999 102.667)'
        fill='#13C296'
      />
      <circle
        cx='104.999'
        cy='88'
        r='1.66667'
        transform='rotate(180 104.999 88)'
        fill='#13C296'
      />
      <circle
        cx='104.999'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 104.999 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='104.999'
        cy='45'
        r='1.66667'
        transform='rotate(180 104.999 45)'
        fill='#13C296'
      />
      <circle
        cx='104.999'
        cy='16'
        r='1.66667'
        transform='rotate(180 104.999 16)'
        fill='#13C296'
      />
      <circle
        cx='104.999'
        cy='59'
        r='1.66667'
        transform='rotate(180 104.999 59)'
        fill='#13C296'
      />
      <circle
        cx='104.999'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 104.999 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='104.999'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 104.999 1.66665)'
        fill='#13C296'
      />
      <circle
        cx='90.3333'
        cy='132'
        r='1.66667'
        transform='rotate(180 90.3333 132)'
        fill='#13C296'
      />
      <circle
        cx='90.3333'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 90.3333 117.333)'
        fill='#13C296'
      />
      <circle
        cx='90.3333'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 90.3333 102.667)'
        fill='#13C296'
      />
      <circle
        cx='90.3333'
        cy='88'
        r='1.66667'
        transform='rotate(180 90.3333 88)'
        fill='#13C296'
      />
      <circle
        cx='90.3333'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 90.3333 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='90.3333'
        cy='45'
        r='1.66667'
        transform='rotate(180 90.3333 45)'
        fill='#13C296'
      />
      <circle
        cx='90.3333'
        cy='16'
        r='1.66667'
        transform='rotate(180 90.3333 16)'
        fill='#13C296'
      />
      <circle
        cx='90.3333'
        cy='59'
        r='1.66667'
        transform='rotate(180 90.3333 59)'
        fill='#13C296'
      />
      <circle
        cx='90.3333'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 90.3333 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='90.3333'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 90.3333 1.66665)'
        fill='#13C296'
      />
      <circle
        cx='75.6654'
        cy='132'
        r='1.66667'
        transform='rotate(180 75.6654 132)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='132'
        r='1.66667'
        transform='rotate(180 31.9993 132)'
        fill='#13C296'
      />
      <circle
        cx='75.6654'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 75.6654 117.333)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 31.9993 117.333)'
        fill='#13C296'
      />
      <circle
        cx='75.6654'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 75.6654 102.667)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 31.9993 102.667)'
        fill='#13C296'
      />
      <circle
        cx='75.6654'
        cy='88'
        r='1.66667'
        transform='rotate(180 75.6654 88)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='88'
        r='1.66667'
        transform='rotate(180 31.9993 88)'
        fill='#13C296'
      />
      <circle
        cx='75.6654'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 75.6654 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 31.9993 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='75.6654'
        cy='45'
        r='1.66667'
        transform='rotate(180 75.6654 45)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='45'
        r='1.66667'
        transform='rotate(180 31.9993 45)'
        fill='#13C296'
      />
      <circle
        cx='75.6654'
        cy='16'
        r='1.66667'
        transform='rotate(180 75.6654 16)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='16'
        r='1.66667'
        transform='rotate(180 31.9993 16)'
        fill='#13C296'
      />
      <circle
        cx='75.6654'
        cy='59'
        r='1.66667'
        transform='rotate(180 75.6654 59)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='59'
        r='1.66667'
        transform='rotate(180 31.9993 59)'
        fill='#13C296'
      />
      <circle
        cx='75.6654'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 75.6654 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 31.9993 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='75.6654'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 75.6654 1.66665)'
        fill='#13C296'
      />
      <circle
        cx='31.9993'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 31.9993 1.66665)'
        fill='#13C296'
      />
      <circle
        cx='60.9993'
        cy='132'
        r='1.66667'
        transform='rotate(180 60.9993 132)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='132'
        r='1.66667'
        transform='rotate(180 17.3333 132)'
        fill='#13C296'
      />
      <circle
        cx='60.9993'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 60.9993 117.333)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 17.3333 117.333)'
        fill='#13C296'
      />
      <circle
        cx='60.9993'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 60.9993 102.667)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 17.3333 102.667)'
        fill='#13C296'
      />
      <circle
        cx='60.9993'
        cy='88'
        r='1.66667'
        transform='rotate(180 60.9993 88)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='88'
        r='1.66667'
        transform='rotate(180 17.3333 88)'
        fill='#13C296'
      />
      <circle
        cx='60.9993'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 60.9993 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 17.3333 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='60.9993'
        cy='45'
        r='1.66667'
        transform='rotate(180 60.9993 45)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='45'
        r='1.66667'
        transform='rotate(180 17.3333 45)'
        fill='#13C296'
      />
      <circle
        cx='60.9993'
        cy='16'
        r='1.66667'
        transform='rotate(180 60.9993 16)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='16'
        r='1.66667'
        transform='rotate(180 17.3333 16)'
        fill='#13C296'
      />
      <circle
        cx='60.9993'
        cy='59'
        r='1.66667'
        transform='rotate(180 60.9993 59)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='59'
        r='1.66667'
        transform='rotate(180 17.3333 59)'
        fill='#13C296'
      />
      <circle
        cx='60.9993'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 60.9993 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 17.3333 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='60.9993'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 60.9993 1.66665)'
        fill='#13C296'
      />
      <circle
        cx='17.3333'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 17.3333 1.66665)'
        fill='#13C296'
      />
      <circle
        cx='46.3333'
        cy='132'
        r='1.66667'
        transform='rotate(180 46.3333 132)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='132'
        r='1.66667'
        transform='rotate(180 2.66536 132)'
        fill='#13C296'
      />
      <circle
        cx='46.3333'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 46.3333 117.333)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='117.333'
        r='1.66667'
        transform='rotate(180 2.66536 117.333)'
        fill='#13C296'
      />
      <circle
        cx='46.3333'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 46.3333 102.667)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='102.667'
        r='1.66667'
        transform='rotate(180 2.66536 102.667)'
        fill='#13C296'
      />
      <circle
        cx='46.3333'
        cy='88'
        r='1.66667'
        transform='rotate(180 46.3333 88)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='88'
        r='1.66667'
        transform='rotate(180 2.66536 88)'
        fill='#13C296'
      />
      <circle
        cx='46.3333'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 46.3333 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='73.3333'
        r='1.66667'
        transform='rotate(180 2.66536 73.3333)'
        fill='#13C296'
      />
      <circle
        cx='46.3333'
        cy='45'
        r='1.66667'
        transform='rotate(180 46.3333 45)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='45'
        r='1.66667'
        transform='rotate(180 2.66536 45)'
        fill='#13C296'
      />
      <circle
        cx='46.3333'
        cy='16'
        r='1.66667'
        transform='rotate(180 46.3333 16)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='16'
        r='1.66667'
        transform='rotate(180 2.66536 16)'
        fill='#13C296'
      />
      <circle
        cx='46.3333'
        cy='59'
        r='1.66667'
        transform='rotate(180 46.3333 59)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='59'
        r='1.66667'
        transform='rotate(180 2.66536 59)'
        fill='#13C296'
      />
      <circle
        cx='46.3333'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 46.3333 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='30.6666'
        r='1.66667'
        transform='rotate(180 2.66536 30.6666)'
        fill='#13C296'
      />
      <circle
        cx='46.3333'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 46.3333 1.66665)'
        fill='#13C296'
      />
      <circle
        cx='2.66536'
        cy='1.66665'
        r='1.66667'
        transform='rotate(180 2.66536 1.66665)'
        fill='#13C296'
      />
    </svg>
  )
}
