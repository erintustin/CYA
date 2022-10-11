import { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';




const  MarkAsRead = () => {
    const [readSelected, setReadSelected] = useState(false);

    if (readSelected === true) {
        return (
            <ButtonGroup>
                <Button className='markasreadright'
                    color='info'
                    size='sm'
                    onClick={() => setReadSelected(false)}
                    >
                    <i className='fa fa-check markread' aria-hidden='true'></i> <span className='markread'>READ</span>
                </Button>
            </ButtonGroup>
        );
    } else {

    return (
        <ButtonGroup>

                        <Button
                        color="secondary"
                        outline
                        size='sm'
                        onClick={() => setReadSelected(true)}
                        active={readSelected === true}
                        >
                        not read
                        </Button>
        </ButtonGroup>
        
    );

    

        
    }
  }

  export default MarkAsRead;