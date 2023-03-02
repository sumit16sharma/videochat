import React from 'react'
import TextField from "@material-ui/core/TextField"
import './Chat.css'

const Chat = ({ state, setState, renderChat, onMessageSubmit }) => {
    const onTextChange = (e) => {
		setState({ ...state, [e.target.name]: e.target.value })
	}

  return (
    <div className="card">
			<form onSubmit={onMessageSubmit}>
				<h1>Messenger</h1>
				<div className="name-field">
					<TextField name="name" onChange={(e) => onTextChange(e)} value={state.name} label="Name" />
				</div>
				<div>
					<TextField
						name="message"
						onChange={(e) => onTextChange(e)}
						value={state.message}
						id="outlined-multiline-static"
						variant="outlined"
						label="Message"
					/>
				</div>
				<button>Send Message</button>
			</form>
			<div className="render-chat">
				<h1>Chat Log</h1>
				{renderChat()}
			</div>
		</div>
  )
}

export default Chat