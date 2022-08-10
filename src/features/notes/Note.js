import { formatDate } from '../../utils/formatDate';

const Note = ({ note }) => {
    const { text: noteText, date } = note;

    return (
        <p className='mx=auto'>
            {noteText} - {formatDate(date)}
        
        </p>
    );
};

export default Note;