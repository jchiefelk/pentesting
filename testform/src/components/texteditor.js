import React, { Component } from 'react';
import '../css/editor.css';
import '../css/Draft.css';
// import '../css/prism.css';
var Actions = require('../actions/actions'); 
const Draft = require('draft-js');
const PrismDraftDecorator = require('draft-js-prism');
const CodeUtils = require('draft-js-code');
const {
    Editor,
    EditorState,
    RichUtils,
    convertFromRaw
} = Draft;


class TextEditor extends Component {

    constructor(props) {
        super(props);
        var decorator = new PrismDraftDecorator();
        var contentState = convertFromRaw({
            entityMap: {},
            blocks: [
                {
                    type: 'code-block',
                    text: this.props.placeholder
                }
            ]
        });
        this.state = {
            editorState: EditorState.createWithContent(contentState),
            article: ''
        };
        this.focus = () => this.refs.editor.focus();
        this.handleKeyCommand = (command) => this._handleKeyCommand(command);
        this.keyBindingFn = (e) => this._keyBindingFn(e);
        this.toggleBlockType = (type) => this._toggleBlockType(type);
        this.toggleInlineStyle = (style) => this._toggleInlineStyle(style);
        this.onTab = (e) => this._onTab(e);
        this.onReturn = (e) => this._onReturn(e);
    }

    _onChange(editorState){
        var rawData = Draft.convertToRaw(editorState.getCurrentContent());       
        this.setState({
            editorState: editorState,
            article: rawData.blocks[0].text
        });
    }
    componentDidUpdate() {
        Actions.setArticle(this.state.article);
    }
    
    _handleKeyCommand(command) {
        const {editorState} = this.state;
        let newState;
        if (CodeUtils.hasSelectionInBlock(editorState)) {
            newState = CodeUtils.handleKeyCommand(editorState, command);
        }
        if (!newState) {
            newState = RichUtils.handleKeyCommand(editorState, command);
        }
        if (newState) {
            this._onChange(newState);
            return true;
        }
        return false;
    }
    _keyBindingFn(e) {
        let editorState = this.state.editorState;
        let command;
        if (CodeUtils.hasSelectionInBlock(editorState)) {
            command = CodeUtils.getKeyBinding(e);
        }
        if (command) {
            return command;
        }
        return Draft.getDefaultKeyBinding(e);
    }

   
    _onTab(e) {
        let editorState = this.state.editorState;
        if (!CodeUtils.hasSelectionInBlock(editorState)) {
            return;
        }
        this._onChange(
            CodeUtils.handleTab(e, editorState)
        )
    }
    _onReturn(e) {
        let editorState = this.state.editorState;
        if (!CodeUtils.hasSelectionInBlock(editorState)) {
            return;
        }
        this._onChange(
            CodeUtils.handleReturn(e, editorState)
        )
        return true;
    }
    render() {
        const {editorState} = this.state;
        return (
                <div className='RichEditor-editor'>
                    <Editor
                        editorState={editorState}
                        handleKeyCommand={(e)=>  this.handleKeyCommand(e)}
                        keyBindingFn={(e)=> this.keyBindingFn(e)}
                        onChange={(editorState) => this._onChange(editorState)}
                        spellCheck={true}
                        handleReturn={(e) => this.onReturn(e)}
                        onTab={(e)=> this.onTab(e)}
                        refs="editor"
                    />
                </div>
        );
    }

}

export default TextEditor;