import "./button.css";

export default function Button(props) {
    return (
        <div className="button">
            <button onClick={props.onClick} type={props.type}>{props.text}</button>
        </div>
    );
}