'use strict';

import React from 'react';
import { Alert, AlertList, AlertContainer } from "react-bs-notifier";

import AppActions from '../actions/AppActions';


class NotificationCenterComponent extends React.Component {
	constructor(props) {
		super(props);

		this.onDismiss = this.onDismiss.bind(this);
	}

	onDismiss() {
		AppActions.hideNotification();
	}

	render() {
		return (
			<AlertList
				position={this.props.position}
				alerts={this.props.notifications.toJS()}
				timeout={this.props.timeout}
				onDismiss={this.onDismiss}
			/>
		);
	}
}

export default NotificationCenterComponent;
