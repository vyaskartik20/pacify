// import React, {Component} from 'react';
// import './Notebook.css';
// import Note from './Note/Note';
// import NoteForm from './NoteForm/NoteForm';
// import {DB_CONFIG} from './Config/config';
// import 'firebase/database'; 
// import firebase from 'firebase/app';


// class Notebook extends Component{
  
//   constructor(props){
//     super(props);
//     this.addNote = this.addNote.bind(this);
//     this.removeNote = this.removeNote.bind(this);
    
//     // this.app = firebase.initializeApp(DB_CONFIG);
//     this.app = !firebase.apps.length ? firebase.initializeApp(DB_CONFIG) : firebase.app();
//     this.database = this.app.database().ref().child('notes');

//     this.state = {
//       notes : []
//     }
//   }

//   componentDidMount(){
//     const previousNotes = this.state.notes;
    
//     this.database.on('child_added', snap => {
//       previousNotes.push({
//         id : snap.key,
//         noteContent : snap.val().noteContent,
//       })
//       this.setState({
//         notes : previousNotes
//       })
//     })


//     this.database.on('child_removed', snap => {
//       for(var i=0 ; i< previousNotes.length ; i++){
//         if(previousNotes[i].id === snap.key){
//           previousNotes.splice(i,1);
//         }
//       }
//       this.setState({
//         notes : previousNotes
//       })
//     })

//   }

//   addNote(note){
//     this.database.push().set({noteContent: note});
//     // const previousNotes=this.state.notes;
//     // previousNotes.push({ id:previousNotes.length + 1, noteContent: note });

//     // this.setState({
//     //   notes : previousNotes
//     // })
//   }

//   removeNote(noteId){
//     this.database.child(noteId).remove();
//   }

//   render(){
//     return(
//       <div className="notesWrapper">
//         <div className="notesHeader">
//           <div className="heading">
//             the notebook...
//           </div>
//         </div>
        
//         <div className="notesBody">
//           {
//             this.state.notes.map((note)=> {
//               return(
//                 <Note noteContent={note.noteContent} noteId={note.id} key={note.id} removeNote={this.removeNote}  />
//               )
//             })
//           }
//         </div>

//         <div className="notesFooter">
//           <NoteForm addNote= {this.addNote}  /> 
//         </div>
        
//       </div>
//     )
//   }
// }

// export default Notebook;




import React, { Component } from 'react';
import Note from './Note/Note';
import NoteForm from './NoteForm/NoteForm';
import './Notebook.css';

class Notebook extends Component {

  constructor(props){
    super(props);
    this.addNote = this.addNote.bind(this);
    this.removeNote = this.removeNote.bind(this);

    // We're going to setup the React state of our component
    this.state = {
      notes: [],
    }
  }

  
  addNote(note){
    const previousNotes=this.state.notes;
    previousNotes.push({ id:previousNotes.length + 1, noteContent: note });

    this.setState({
      notes : previousNotes
    })
  }

  removeNote(noteId){
    const previousNotes=this.state.notes;

    for(var i=0 ; i< previousNotes.length ; i++){
      if(previousNotes[i].id === noteId){
        previousNotes.splice(i,1);
      }
    }

    this.setState({
      notes : previousNotes
    })
  }

  render() {
    return (
      <body  >
        <div className="notesWrapper">
          <div className="notesHeader">
            <div className="heading">
              the notebook...
            </div>
          </div>
          <div className="notesBody">
            {
              this.state.notes.map((note) => {
                return (
                  <Note noteContent={note.noteContent} 
                  noteId={note.id} 
                  key={note.id} 
                  removeNote ={this.removeNote}/>
                )
              })
            }
          </div>
          <div className="notesFooter">
            <NoteForm addNote={this.addNote} />
          </div>
        </div>
       </body >
    );
  }
}

export default Notebook;