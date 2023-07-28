import React from 'react'

interface CalendaryProps {
  props?: any
}

const Calendary = (props: CalendaryProps) => {
  return (
    <svg {...props} width="59" height="55" viewBox="0 0 59 55" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_180_14357)">
        <path {...props} d="M51.7236 7.27949H46.8867V2.78587C46.8867 1.55013 45.7984 0.539062 44.4683 0.539062H42.0499C40.7197 0.539062 39.6314 1.55013 39.6314 2.78587V7.27949H20.284V2.78587C20.284 1.55013 19.1957 0.539062 17.8655 0.539062H15.4471C14.117 0.539062 13.0287 1.55013 13.0287 2.78587V7.27949H8.19182C4.20141 7.27949 0.936523 10.3127 0.936523 14.0199V47.722C0.936523 51.4293 4.20141 54.4625 8.19182 54.4625H51.7236C55.714 54.4625 58.9789 51.4293 58.9789 47.722V14.0199C58.9789 10.3127 55.714 7.27949 51.7236 7.27949ZM54.142 47.722C54.142 48.9578 53.0537 49.9688 51.7236 49.9688H8.19182C6.86168 49.9688 5.77339 48.9578 5.77339 47.722V23.0071H54.142V47.722Z" fill="#FEFEFE" />
      </g>
      <defs>
        <clipPath id="clip0_180_14357">
          <rect width="58.0424" height="53.9234" fill="white" transform="translate(0.936523 0.539062)" />
        </clipPath>
      </defs>
    </svg>

  )
}

export default Calendary