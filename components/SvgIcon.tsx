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
