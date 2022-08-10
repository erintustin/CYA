import { Button, Modal, ModalHeader, ModalBody } from 'reactstrap';
import {useState, useSelector } from 'react';
import { selectResourceById } from '../features/Resources/ResourcesSlice';


const CopyLinkButton = ({ resource }) => {
    const [CopyLinkOpen, setCopyLinkOpen] = useState(false);
    resource = useSelector(selectResourceById);
    const { id, url } = resource;

return(
    <>
    <Button
        onClick={() => setCopyLinkOpen(true)}
    >
    <i className='fa fa-link fa-sm' />
    </Button>

<Modal isOpen={CopyLinkOpen}>
<ModalHeader toggle={() => setCopyLinkOpen(false)}>
Share
</ModalHeader>
<ModalBody>
<Form>
    <input type="text" 
           className="form-control" 
           id={id} 
           value={url}
    />
                                                        
     <button className="btn btn-info btn-sm" 
             onclick={clipboard({url})}>Copy Link
    </button>

</Form>
</ModalBody>
</Modal></>
);
};

export default CopyLinkButton;