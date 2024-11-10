import React, { Component } from "react";
import "./ChatHistory.scss";

class ChatHistory extends Component {
	render() {
		const messages = this.props.chatHistory.map((msg, index) => (
			<p key={index}>msg.data</p>
		));
		
		return(
			<div className="chatHistory">
				<h2>Histórico de mensagem</h2>
				{messages}
			</div>
		)
	}
}

export default ChatHistory;