import React, { Component } from 'react';
import TextEditor from './texteditor';
import Style from '../style/style'
var Actions = require('../actions/actions');
var PublishingStore = require('../stores/publishingstore');
import Radium from 'radium'




export default class PickerHash extends Component {

			constructor(){
						this.subjects=["Finance", "Science", "Machines", "Politics","Sports","History"];
						this.state = {
							view: null,
							drop_style: {
								  display: 'flex',
								  justifyContent: 'center',
								  height: 40,
								  width: 250,
								  cursor: 'pointer',
								  backgroundColor: '#B2DFDB',
	
							}
					};
			}

			componentDidMount(){
				this.setState({
					view: this.setPickerView()
				});
			}



			setPickerView(){
				this.view=[];
				for(var x=0; x<this.subjects.length;x++){
					this.view.push((
						<div>
							<p>{this.subjects[x]}</p>
						</div>
					));
				};

				return (
					<div style={{display: 'flex',alignItems: 'center', justifyContent: 'center', flexDirection: 'column'}}>
						{this.view}
					</div>
				)
			}

			render(){
					return(this.state.view);
			}


}