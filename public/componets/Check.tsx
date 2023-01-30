import React from 'react'

interface CheckProps {
  props?: any
}

const Check = (props: CheckProps) => {
  return (
    <svg {...props} width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path {...props} d="M8.66866 19.3532L9.02222 19.7067L9.37577 19.3532L20.6706 8.05832C21.2553 7.4736 21.2553 6.52559 20.6706 5.94088L20.3206 6.29086L20.6706 5.94088C20.0861 5.35636 19.1385 5.35614 18.5537 5.94038L9.02195 15.4631L5.99077 12.4393C5.4057 11.8557 4.45845 11.8563 3.87409 12.4406C3.28923 13.0255 3.28924 13.9737 3.8741 14.5586L8.66866 19.3532Z" fill="#FAC844" stroke="#FAC844"/>
    </svg>
    

  )
}

export default Check
