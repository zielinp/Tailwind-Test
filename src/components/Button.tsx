import React from 'react'

interface MyComponentProps {
    text: string;
    bg?: string;

  }

const Button: React.FC<MyComponentProps> = ({ text, bg }) => {
    return(
        <button className={`${bg === 'black' ? 'bg-black' : 'bg-indigo-500'} mb-[10px] p-[10px] rounded-[12px] text-white  inline-flex justify-center`}>{text}</button>
    )
}

export default Button; 