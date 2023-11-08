
interface ButtonProps {
    text: string;
    // bg?: string;
    color?: 'gray' | 'indigo';

  }

const Button = ({ text, color } : ButtonProps) => {
    return(
        <button className={`${color === 'gray' ? 'bg-gray-600 hover:bg-gray-500' : ' bg-indigo-600 hover:bg-indigo-500'} 
        px-3 py-1.5 text-sm font-semibold rounded-md text-white inline-flex justify-center 
        leading-6 shadow-sm `}>{text}</button>
    )
}

export default Button; 