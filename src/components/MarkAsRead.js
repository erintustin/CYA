import { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';




const  MarkAsRead = () => {
    const [readSelected, setReadSelected] = useState(false);

    if (readSelected === true) {
        return (
            <ButtonGroup>
                <Button className='markasreadleft'
                    outline
                    color='secondary'
                    size='sm'
                    onClick={() => setReadSelected(false)}
                    >
                    Mark as Not Read
                </Button>
                <Button className='markasreadright'
                    color='info'
                    size='sm'
                    disabled
                    >
                    <i className='fa fa-check markread' aria-hidden='true'></i> <span className='markread'>READ</span>
                </Button>
            </ButtonGroup>
        );
    } else {

    return (
        <ButtonGroup>
                        <Button className='markasreadleft'
                        color="secondary"
                        size='sm'
                        onClick={() => setReadSelected(true)}
                        active={readSelected === true}
                        >
                        Mark as Read
                        </Button>

                        <Button
                        color="secondary"
                        outline
                        size='sm'
                        disabled
                        >
                        not read
                        </Button>
        </ButtonGroup>
        
    );

    

        
    }
  }

  export default MarkAsRead;