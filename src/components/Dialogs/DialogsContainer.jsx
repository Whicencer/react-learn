import Dialogs from './Dialogs'
import { addMessageActionCreator } from '../../redux/reducers/dialogsReducer';
import {connect} from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux'

const mapStateToProps = (state) => {
    return {
        dialogs: state.dialogsPage.dialogs,
        messages: state.dialogsPage.messages
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: (messageText) => dispatch(addMessageActionCreator(messageText))
    }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(Dialogs)