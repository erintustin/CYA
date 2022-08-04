import { Card, CardImg, CardHeader, CardTitle, CardDeck } from 'reactstrap';
import { Link } from 'react-router-dom';

const ResourceCard = ({ resource }) => {
    const { name, img, id } = resource;
    return (
        <Link to={name}>
            <CardDeck>
            <Card>
            <CardHeader>
                    <CardTitle>{name}</CardTitle>
                </CardHeader>
                <CardImg 
                                width='100%'
                                src={img}
                                alt={name}
                /> 

            </Card>
            </CardDeck>
        </Link>
    );
}

export default ResourceCard;