import css from "./style.module.css"

interface IButton {
    value: string;
    onClick: () => void;
    classname?: string
}

const Button = ({value, onClick, classname} : IButton) => {
    return (
        <button onClick={onClick} className={css.btn}>
            {value}
        </button>
    );
};

export default Button;