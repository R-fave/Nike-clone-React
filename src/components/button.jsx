const Button = ({label, iconURL, backgroundColor, textColor, borderColor, fullwidth}) => {
  return (
    <button className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none rounded-full hover:scale-110 transition ease-in-out duration-500
    ${backgroundColor ? `${backgroundColor} ${textColor} ${borderColor}` :'backdrop-blur-3xl bg-coral-red  text-white border-coral-red ' } ${fullwidth && 'w-full'}`}>
        {label}
        {iconURL && <img 
        src={iconURL}
        alt="arrow right icon"
        className="ml-2 rounded-full w-5 h-5"/>}
        
    </button>
  )
}

export default Button
