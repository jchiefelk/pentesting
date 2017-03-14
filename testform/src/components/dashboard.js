import React, {Component} from 'react';
import {
	Editor,
	EditorState,
	DefaultDraftBlockRenderMap,
} from 'draft-js';



export default class Dashboard extends Component {
	
  constructor(props) {
    super(props);
    this.state = {editorState: EditorState.createEmpty()};
    this.onChange = (editorState) => {
    	console.log(this.state.editorState.convertToRaw);
    	this.setState({editorState});
	}}
  render() {
    return (
        <Editor 
        	editorState={this.state.editorState} 
        	onChange={this.onChange} 
        	/>
    );
  }


}
