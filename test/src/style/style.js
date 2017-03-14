
var Style = {
	
	abstract_container: {
		display: 'flex',
		height: window.innerHeight*(0.15),
		// width: window.innerWidth*(0.98),
		fontSize: 18,
		marginBottom: 10,
		marginRight: 10,
		marginLeft: 10
	},
	article_container: {
		display: 'flex',
		height: window.innerHeight*(0.4),
	},
	firstname: {
		display: 'flex',
		height: window.innerHeight*(0.05),
		fontSize: 18,
		marginBottom: 10,
		fontFamily: 'Georgia',
		marginTop: 10,
		marginRight: 10,
		marginLeft: 10
	},
	lastname: {
		display: 'flex',
		height: window.innerHeight*(0.05),
		fontSize: 18,
		marginBottom: 10,
		fontFamily: 'Georgia',
		marginRight: 10,
		marginLeft: 10
	},
	subjects: {
		display: 'flex',
		height: window.innerHeight*(0.05),
		fontSize: 18,
		marginBottom: 10,
		fontFamily: 'Georgia',
		marginRight: 10,
		marginLeft: 10
	},
	article_save: {
		display: 'flex',
		height: window.innerHeight*(0.05),
		width: window.innerWidth*(0.1),
		backgroundColor: 'blue',
		position: 'absolute',
		marginTop: 5,
		right: 20,
		alignItems: 'center',
		justifyContent: 'center',
		cursor: 'pointer'
	},
	save_text: {
		color: 'white',
		fontWeight: '700',
		fontSize: 20,
		fontFamily: 'monospace',
	    marginBottom: 20
	}
}
module.exports = Style