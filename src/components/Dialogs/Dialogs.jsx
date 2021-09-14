import React from 'react';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import "./Dialogs.css";
import { Field, reduxForm } from 'redux-form';

const Dialogs = (props) => {
  return (
    <div className="dialogs">
      <div className="dialogs__items">
        {props.dialogs.map((el, id) => {
          return (
            <DialogItem
              name={el.name}
              key={id}
              id={id + 1}
              active={el.active}
            />
          );
        })}
      </div>
      <div className="dialogs__messages">
        {props.messages.map((el, id) => {
          return <Message message={el.message} key={id} />;
        })}
        <DialogsReduxForm onSubmit={(values) => props.addMessage(values.messageText)} />
      </div>
    </div>
  );
};

const DialogsForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <Field placeholder="Text message" name="messageText" component="textarea" />
      <button>Send</button>
    </form>
  )
}

const DialogsReduxForm = reduxForm({form: 'dialogs'})(DialogsForm)

export default Dialogs;
