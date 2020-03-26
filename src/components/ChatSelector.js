import React from 'react';
import Alert from './Alert';

const ChatSelector = (props) => {
  const { handleChange, loginError } = props;
  return (
    <div className="chatapp__form--container">
     
        {
          (loginError.length)
            ? <Alert 
                header="Login Error"
                content={loginError[loginError.length - 1].response.data.error}
              />
            :null
        }
    </div>
  )
}

export default ChatSelector;