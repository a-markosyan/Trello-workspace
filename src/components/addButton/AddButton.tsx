import css from "./style.module.css"

interface IButton {
    value: string;
    onClick: () => void;
    classname?: string
}

const AddButton = ({value, onClick, classname} : IButton) => {
    return (
        <button value={value} onClick={onClick} className={css.btn}>
            {value}
        </button>
    );
};

export default AddButton;