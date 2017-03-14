import React, {Component} from 'react';
import { Router, Route, Link } from 'react-router';
var Actions = require('../actions/actions');
var ArticleStore = require('../stores/articlestore');
import '../css/main.css';

export default class TableView extends Component {

	constructor(){
		super();
		this.state={
			tableContents: ArticleStore.getArticleData(),
			mainView: (
			<div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
				<p>Waiting</p>
			</div>
			),
			contentRecieved: false
		};
	}

	componentWillUnmount(){		
		ArticleStore.removeChangeListener(this._onChange.bind(this));
	}

	componentDidMount(){
	
		ArticleStore.addChangeListener(this._onChange.bind(this));
		Actions.getTableContent();
	}

	_onChange(){
		this.setState({
			tableContents: ArticleStore.getArticleData(),
			contentRecieved: true
		});
	}

	componentDidUpdate(){
		if(this.state.contentRecieved==true){
			this.setState({ 
				contentRecieved: false,
				mainView: this.setTableView()
			});
		}
	}

	setTableView(){
		this.rows=[];
		for(var x=0; x<this.state.tableContents.length; x++){
			console.log(this.state.tableContents[x]);
			let view = (
				<div className="table_row_parent" key={x} style={{height: 200 }}>

						<p>{this.state.tableContents[x].First_Name}</p>

						<p>{this.state.tableContents[x].Last_Name}</p>

						<p>{this.state.tableContents[x].Abstract}</p>

						<p>{this.state.tableContents[x].Article}</p>

				</div>
			);
			this.rows.push(view);
		};

		return(
			<div style={{flex:1.0, alignItems: 'center', justifyContent: 'center'}}>
				{this.rows}
			</div>
		);
	}


	render() {
		return (this.state.mainView);
	}



}