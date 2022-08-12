import { Container } from 'reactstrap';
import ResourcesList from '../features/Resources/ResourcesList';
import ResourceFilter from '../components/ResourceFilter';


const ToolkitPage = () => {
    return (
        <Container fluid='true'>
            <ResourceFilter />
            <ResourcesList />
        </Container>
    );
};

export default ToolkitPage;