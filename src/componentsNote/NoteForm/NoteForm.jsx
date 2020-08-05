import React, {Component} from 'react';
import './NoteForm.css';
import PropTypes from 'prop-types';

class NoteForm extends Component{
    
    constructor(props){
        super(props);
        this.writeNote = this.writeNote.bind(this);
        this.handleUserInput = this.handleUserInput.bind(this);
        
        this.state={
            newNoteContent:''
        }
    }

    writeNote(){
        this.props.addNote(this.state.newNoteContent)

        this.setState({
            newNoteContent: ''
        })
    }

    handleUserInput(note){
        this.setState({
            newNoteContent: note.target.value
        })
    }



    render(props){
        return(
            <div className="formWrapper">
                <input className="noteInput" 
                    placeholder="Write a new note..." 
                    onChange={this.handleUserInput}
                    value= {this.state.newNoteContent}
                />
                <button className="noteButton"
                    onClick={this.writeNote} 
                >
                     Add Note
                </button>

            </div>
        )
    }
}

NoteForm.propTypes= {
}
    

export default NoteForm;