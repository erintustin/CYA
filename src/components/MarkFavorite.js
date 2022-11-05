import { useState } from 'react';
import { Button, ButtonGroup } from 'reactstrap';

const  MarkFavorite = () => {
    const [favorite, setFavorite] = useState(false);

    if (favorite === true) {
        return (
           
                <Button 
                    className='btn btn-secondary'
                    size='sm'
                    onClick={() => setFavorite(false)}
                    >
                    <i className='fa fa-heart favorite-heart' aria-hidden='true' />
                </Button>
         
        );
    } else {

    return (
      

                        <Button
                        color="white"
                        className='btn btn-secondary'
                        outline
                        size='sm'
                        onClick={() => setFavorite(true)}
                        active={favorite === true}
                        >
                        <i className='fa fa-heart-o' aria-hidden='true' />
                        </Button>
        
    );

    

        
    }
  }

  export default MarkFavorite;