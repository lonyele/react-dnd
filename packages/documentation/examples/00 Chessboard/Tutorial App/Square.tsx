import React from 'react'
import PropTypes from 'prop-types'

export interface ISquareProps {
	black: boolean
	children: JSX.Element
}

export default class Square extends React.Component<ISquareProps> {
	public static propTypes = {
		black: PropTypes.bool,
		children: PropTypes.node,
	}

	public render() {
		const { black } = this.props
		const backgroundColor = black ? 'black' : 'white'
		const color = black ? 'white' : 'black'

		return (
			<div
				style={{
					color,
					backgroundColor,
					width: '100%',
					height: '100%',
				}}
			>
				{this.props.children}
			</div>
		)
	}
}
