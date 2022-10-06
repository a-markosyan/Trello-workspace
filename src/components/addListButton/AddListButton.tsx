import {AiOutlinePlus} from "react-icons/ai";

interface IButtonProps {
    className?: string;
    onClick?: () => void;
    value?: string;
}

const AddListButton = ({className, onClick, value} : IButtonProps) => {
    return (
        <button className={className} value={value} onClick={onClick}>
            <span style={{fontSize:"20px", fontWeight: 900 , paddingRight:"5px"}}><AiOutlinePlus/></span>
            <span>{value}</span>
        </button>
    );
};

export default AddListButton;