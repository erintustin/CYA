import { Col } from 'reactstrap';
import { useSelector } from 'react-redux';
import Note from './Note';
import { selectNotesByResource } from './notesSlice';
import NoteForm from './NoteForm';

const NotesList = ({ resource }) => {
    const notes = useSelector(selectNotesByResource(resource));
   

    if (notes && notes.length > 0) {
        return (
            <Col className='m-1 mx-auto'>
                <h5>Notes</h5>
                {notes.map((note) => {
                    return <Note key={note.id} note={note} />;
                })}

            </Col>
        );
    }
    return (
        <Col md='5' className='m-1 mx-auto'>
            There are no notes yet.

            
        </Col>

        
    );
};

export default NotesList;