import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
    return (
        <NavLink to={`/dialogs/${props.id}`} className={(props.active) ? "dialog__item dialog__item--active" : "dialog__item"}>{props.name}</NavLink>
    )
}

export default DialogItem