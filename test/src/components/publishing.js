import React, { Component } from 'react';
import TextEditor from './texteditor';
import Style from '../style/style'
var Actions = require('../actions/actions');
var PublishingStore = require('../stores/publishingstore');
import Header from './header';

class Publishing extends Component {
	constructor(){
		super();
		this.state ={
			firstname: 'First Name',
			lastname: 'Last Name',
			abstract: 'Abstract',
			article: '',
			subjects: 'Subjects',
			article_store_data: PublishingStore.getArticleData(),
			saved: false,
			image_url: null,
			httpstatus: null,
			message: null
		};
	}
	componentWillUnmount(){		
		PublishingStore.removeChangeListener(this._onChange.bind(this));
	}
	componentDidMount(){
		PublishingStore.addChangeListener(this._onChange.bind(this));
	}
	saveData(){
		Actions.SaveClick();
		this.setState({saved: true});
	}
	editFirstName(e){
		this.setState({firstname: e.target.value});
		Actions.setFirstName(this.state.firstname);
	}
	editLastName(e){
		this.setState({lastname: e.target.value});
		Actions.setLastName(this.state.lastname);
	}
	editSubject(e){
		this.setState({subjects: e.target.value});
		Actions.setSubjects(this.state.subjects)
	}
	editAbstract(e){
		this.setState({abstract: e.target.value});
		Actions.setAbstract(this.state.abstract);
	}
	_onChange(){
		this.setState({
			httpstatus: PublishingStore.getStatus(),
			article_store_data: PublishingStore.getArticleData(),
			message: PublishingStore.getArticleData().status
		});
	
		if(this.state.httpstatus==500){
			alert('Internal Server Error 500: Improper Format in One of Responses');
		}	

		
	}

	_onClick(){
		if(this.state.message!=null){
			this.setState({message: null});
			Actions.clearMessage();
		}
	}

	componentDidUpdate(){
		if(this.state.saved==true && this.state.message!=null){
			this.setState({saved: false});
		}
		if(this.state.saved==true && this.state.message==null){
			this.setState({saved: false});
			Actions.postToPending(this.state.article_store_data);
		}
	}

    render() {
        return (
           	<div style={{alignItems: 'center'}}> 
           		<Header/>
           		<div style={{display: 'flex', justifyContent: 'center'}}>
           			<p style={{fontSize: 24, marginTop: 10, color: 'red'}}>{this.state.message}</p>
           		</div>

           		<div style={{display: 'flex',flexDirection: 'column'}}>
	            	<input style={Style.firstname} value={this.state.firstname} onChange={(e)=> this.editFirstName(e)} onClick={()=> this._onClick() }/>
	            	<input style={Style.lastname} value={this.state.lastname} onChange={(e)=> this.editLastName(e)} onClick={()=> this._onClick() } />
	            	<input style={Style.subjects} value={this.state.subjects} onChange={(e)=> this.editSubject(e)} onClick={()=> this._onClick() }/>
	                <textarea style={Style.abstract_container} value={this.state.abstract} onChange={(e)=> this.editAbstract(e)} onClick={()=> this._onClick() }/>
                </div>
                <TextEditor placeholder="Article" styling={Style.article_container} />
                <div style={Style.article_save} onClick={()=> this.saveData()}>
                	<h1 style={Style.save_text}>Save</h1>
                </div>
            </div>
        );
    }
}
export default Publishing;
