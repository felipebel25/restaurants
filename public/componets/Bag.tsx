import React from 'react'

interface BagProps {
  props?: any
}

const Bag = (props: BagProps) => {
  return (
    <svg {...props} width="69" height="69" viewBox="0 0 69 69" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_341_14411)">
        <path {...props} d="M59.1445 12.5302H49.8176V9.443C49.8176 4.34905 45.6205 0.181274 40.4907 0.181274H28.0548C22.925 0.181274 18.7279 4.34905 18.7279 9.443V12.5302H9.40101C4.27121 12.5302 0.0740967 16.698 0.0740967 21.792V58.8389C0.0740967 63.9329 4.27121 68.1006 9.40101 68.1006H59.1445C64.2743 68.1006 68.4715 63.9329 68.4715 58.8389V21.792C68.4715 16.698 64.2743 12.5302 59.1445 12.5302ZM24.9459 9.443C24.9459 7.74502 26.3449 6.35576 28.0548 6.35576H40.4907C42.2006 6.35576 43.5997 7.74502 43.5997 9.443V12.5302H24.9459V9.443Z" fill="#BCC3C7" />
      </g>
      <defs>
        <clipPath id="clip0_341_14411">
          <rect width="68.3974" height="67.9194" fill="white" transform="translate(0.0740967 0.181274)" />
        </clipPath>
      </defs>
    </svg>


  )
}

export default Bag
