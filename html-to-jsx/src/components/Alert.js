import React from 'react';
import PropTypes from 'prop-types';

/**
 * This component is created to show alerts.
 * @param {object} alertMsg - A JavaScript object contain alertMsg.message and alertMsg.type
 * @returns {JSX.Element} - It shows alerts of various types.
 */
export default function Alert(props) {
    return (
        props.alertMsg && <>
            <div className={`alert alert-${props.alertMsg.type}`} role="alert">
                <strong>{props.alertMsg.type} :  </strong>{props.alertMsg.message}
            </div>
        </>
    )
}

// Here, we will define the types of all props
Alert.propTypes = {
    alertMsg: PropTypes.object,  // this field is required, but default message sent
}

// setting the default value for the properties
Alert.defaultProps = {
    alertMsg: {
        message: 'Values should be passed in Alert component',
        type: 'warning',
    }
}

