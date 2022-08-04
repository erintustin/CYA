import { Card, CardImg, CardHeader, CardText, CardBody, Col } from 'reactstrap';

const ResourceDetail = ({resource}) => {
    const {author, readtime, source, img, name } = resource;

    return (
        <Col md='5' className='m-4'>
            <Card>
                <CardHeader>{name}</CardHeader>
                <CardImg top src={img} alt={name} />
                <CardBody>
                    <CardText>{author} {readtime} {source}</CardText>
                </CardBody>
            </Card>
        </Col>
    )
}

export default ResourceDetail;