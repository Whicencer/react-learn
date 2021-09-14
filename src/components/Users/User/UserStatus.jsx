import React, { useState, useEffect } from "react";

const UserStatus = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.status)
    const activateEditMode = () => {
        setEditMode(true)
    }
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const deactivateEditMode = () => {
        setEditMode(false)
        props.setStatus(status)
    }
    const changeStatus = (e) => {
        setStatus(e.currentTarget.value)
    }
    return (
        <>
            {
                !editMode
                    ? <span onDoubleClick={activateEditMode}>{props.status || 'No status'}</span>
                    : <input type="text" onChange={changeStatus} value={status} autoFocus={true} onBlur={deactivateEditMode}/>
            }
        </>
    );
};

export default UserStatus;
