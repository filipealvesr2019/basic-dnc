import './Button.css'
export default function Button({ arrow, buttonStyle, loading, children, ...props}){
    return (
        <button className={`button ${buttonStyle}`} {...props}>
            {children}
        </button>
    )
}