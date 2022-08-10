import { Card, CardImg, CardHeader, CardFooter, CardTitle, CardSubtitle, 
         Collapse, ButtonGroup, Button, Modal, ModalHeader, ModalBody,
         Form} from 'reactstrap';
import { useState } from 'react';
import ShareResource from './ShareResource';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import NotesList from '../notes/NotesList';
import NoteForm from '../notes/NoteForm';

const ResourceCard = ({resource}) => {
    const [shareOpen, setShareOpen] = useState(false);
    const [notesOpen, setNotesOpen] = useState(false);
    const [CopyLinkOpen, setCopyLinkOpen] = useState(false);
    const { name, img, author, source, url, id } = resource;

    return (
        
            
            <Card>
            <CardHeader>
            <CardTitle><h3>{name}</h3></CardTitle>
            <CardSubtitle>
                <h6>By: {author}</h6>
                <h5>Source: <a href={url} target='new_window'>{source}</a></h5>
                </CardSubtitle>
                </CardHeader>
                <CardImg 
                                width='100%'
                                src={img}
                                alt={name}
                /> 
                <Collapse isOpen={shareOpen}>
                        <ShareResource resource={resource} />
                </Collapse>
                <Collapse isOpen={notesOpen}>
                        <NotesList resource={resource} />
                        <NoteForm resource={resource}/>
                </Collapse>
                <CardFooter>
                    <ButtonGroup className='mx-auto'>
                        <Button outline color='secondary'
                                href={url} target='new_window'
                                size='sm'>Read</Button>
                        <Button 
                                outline color='secondary'
                                size='sm'
                                onClick={() => setShareOpen(!shareOpen)}>
                                Share</Button>
                        <Button
                                outline color='secondary'
                                size='sm'>
                                +</Button>

                        <Button
                                outline color='secondary'
                                size='sm'
                                onClick={() => setNotesOpen(!notesOpen)}>
                                Notes</Button>

                    </ButtonGroup>
                </CardFooter>
            </Card>
        
    
    );
}

export default ResourceCard;