import '../styles/button.scss';

type ButtonProps = {
    title: String;
}

export function Button({ title }: ButtonProps) {
    return (
            <button>{title}</button>
    )
}