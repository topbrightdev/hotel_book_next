const InputFilterBox2 = ({placeholder1,value, setValue, type}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder1={placeholder1}
            className="bg-transparent border-2 border-solid border-customGray-400 outline-none py-2 px-5 text-sm leading-6 text-[#373737] font-normal font-sans rounded-[10px] w-full"
        />
    );
}
const InputFilterBox = ({placeholder,value, setValue, type}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder={placeholder}
            className="bg-transparent border-2 border-solid border-customGray-400 outline-none py-2 px-5 text-sm leading-6 text-[#373737] font-normal font-sans rounded-[10px] w-full"
        />
    );
}
const InputFilterBox3 = ({placeholder3,value, setValue, type}) => {
    return (
        <input
            type={type}
            value={value}
            onChange={(e)=>setValue(e.target.value)}
            placeholder3={placeholder3}
            className="bg-transparent border-2 border-solid border-customGray-400 outline-none py-2 px-5 text-sm leading-6 text-[#373737] font-normal font-sans rounded-[10px] w-full"
        />
    );
}

export default InputFilterBox;