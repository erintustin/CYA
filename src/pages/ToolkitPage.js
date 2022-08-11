import { Container } from 'reactstrap';

import ResourcesList from '../features/Resources/ResourcesList';


const ToolkitPage = () => {
    return (
        <Container fluid='true'>
            <ResourcesList />
        </Container>
    );
};

export default ToolkitPage;