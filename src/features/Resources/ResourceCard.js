import { Card, CardImg, CardHeader, CardFooter, CardTitle, CardSubtitle, 
         Collapse, ButtonGroup, Button, CardBody } from 'reactstrap';
import { useState } from 'react';
import ShareResource from './ShareResource';
import NotesList from '../notes/NotesList';
import NoteForm from '../notes/NoteForm';

const ResourceCard = ({resource}) => {
    const [shareOpen, setShareOpen] = useState(false);
    const [notesOpen, setNotesOpen] = useState(false);
    const { name, img, author, source, url} = resource;

    return (
        
            <Card className='m-2'>
                <CardHeader>
                        <CardTitle><h2>{name}</h2></CardTitle>
                </CardHeader>
                <CardBody className='p-0'>
                        <CardImg 
                                className='m-0'
                                src={img}
                                alt={name}
                        /> 
                        <p> By: {author}<br />
                                Source: 
                                <a href={url} target='new_window'> {source}</a>
                                </p>
                </CardBody>
                
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