import React from "react";
import './FormsControls.css'

export const Element = (Element) => ({input, meta, ...props}) => {
    return (
        <div className={meta.error && meta.touched ? "form-control error" : "form-control"}>
            <Element {...props} {...input} />
            {meta.touched && meta.error && <span>{meta.error}</span>}
        </div>
    )
}