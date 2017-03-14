import React, {  Component } from 'react';
import ArticleStore from '../stores/articlestore';
import Header from './header';
import { Grid, Row, Col } from 'react-bootstrap';
import '../css/articlepage.css';



export default class ArticlePage extends Component {
	constructor(){
		super();
		this.articleRows = [];
		this.state={
			articleView: [],
			mainView: (<div/>)
		};
	}

	componentDidMount(){
		this.setRowView();
	}

	setRowView(){

		let row = (
	      	<Row>
			      	<Col lg={4} >
			      				<h5>Crime</h5>
			      				<img src={'https://s3-us-west-1.amazonaws.com/cointelmob/kelcy_warren/NoDAPL.jpg'} className='ArticlePage-title_image' />
			      				<h3>Fall of an Empire</h3>
			      				<p>It all started with the fall of oil prices and a mutiny with his own CFO</p>
			      	</Col>

			      	<Col lg={4} >
			      				<h5>Crime</h5>
			      				<img src={'https://s3-us-west-1.amazonaws.com/cointelmob/kelcy_warren/NoDAPL.jpg'} className='ArticlePage-title_image'/>
			      				<h3>Kelcy Warren history of Fraud</h3>
			      				<p>This fella's business history is more crooked than a politician.</p>
			      			</Col>
			    
			      	<Col lg={4} >
			      				<h5>Crime</h5>
			      				<img src={'https://s3-us-west-1.amazonaws.com/cointelmob/kelcy_warren/NoDAPL.jpg'} className='ArticlePage-title_image'/>
			      				<h3>Kelcy Warren history of Fraud</h3>
			      				<p>This fella's business history is more crooked than a politician.</p>
			     	</Col>
			</Row>
		);
		this.articleRows.push(row);
		this.setState({
			articleView: this.articleRows
		});
	}

	setMainView(){
		return (
	      	<Grid style={{display: 'flex',justifyContent: 'center' }}>
	      			{this.state.articleView}
	      	</Grid>
		);
	}

	componentDidUpdate(){
		this.setState({mainView: this.setMainView()});
	}


	render() {
	    return (
	      	<div style={{alignItems: 'center'}}> 
	      	<Header/>
	      	{this.state.mainView}
	      </div>
	    );
	}

}