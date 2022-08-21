import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navbar, 
        Collapse,
        NavbarToggler,
        Nav,
        NavItem,
        Button,
        ButtonGroup,
        Container,
        Row,
        Col,
        Accordion,
        AccordionItem,
        AccordionHeader,
        AccordionBody
        } from 'reactstrap';
import { selectAllResources, selectResourcesByType } from '../features/Resources/ResourcesSlice';
import ResourceCard from '../features/Resources/ResourceCard';


const ResourceFilter = ({resource}) => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);
    const [videosOpen, setVideosOpen] = useState(false);
    const [graphicsOpen, setGraphicsOpen] = useState(false);
    const [articlesOpen, setArticlesOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);

    
    const videoResources = useSelector(selectResourcesByType('Video'));
    const graphicResources = useSelector(selectResourcesByType('Graphic'));
    const writtenResources = useSelector(selectResourcesByType('Written'));
   
    

    return(
        <>
        <Navbar color='light' sticky='top' id='filterNav' expand='md' className='mt-0 mb-5'>
            <NavbarToggler onClick={() => setFilterOpen(!filterOpen)} />
            <Collapse isOpen={filterOpen} navbar>
            <Nav className='ms-auto' navbar>
            
                <NavItem>
                    <Button
                        className='btn-light'
                        onClick={() => setCategoryOpen(!categoryOpen)}>
                        <i className='fa fa-filter'></i>Category</Button>
                        
                </NavItem>
                <Collapse isOpen={categoryOpen}>
                            Categories
                        </Collapse>
                <NavItem>
                    <Button
                        className='btn-light'
                        onClick={() => setTypeOpen(!typeOpen)}>
                        <i className='fa fa-filter'></i>Type</Button> 
                </NavItem>
                <Collapse isOpen={typeOpen}>
                    <ButtonGroup>
                    <Button outline
                            onClick={() => setVideosOpen(!videosOpen)}>
                        Videos
                    </Button>
                    <Button outline
                            onClick={() => setGraphicsOpen(!graphicsOpen)}>
                        Graphics
                    </Button>
                    <Button outline
                            onClick={() => setArticlesOpen(!articlesOpen)}>
                        Articles
                    </Button>
                    </ButtonGroup>
               </Collapse>
            </Nav>
            </Collapse>
        </Navbar>
        <Accordion>
            <AccordionItem id='video'>
                <AccordionHeader><h1 className='congrats'>Video Resources</h1></AccordionHeader>
                <AccordionBody>
                    <Row fluid='true' className='mx-auto'>
                    {videoResources.map((videoResource) => {
                        return(
                            <Col 
                                sm='6'
                                lg='4'
                                className='mt-2 mb-2' 
                                key={videoResource.id}
                                >
                                <ResourceCard resource={videoResource} />
                            </Col>
                        );
                    })}
                </Row>
            </AccordionBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeader><h1 className='congrats'>Graphic Resources</h1></AccordionHeader>
            <AccordionBody>
                <Row fluid='true' className='mx-auto'>
                {graphicResources.map((graphicResource) => {
                    return(
                        <Col 
                            sm='6'
                            lg='4'
                            className='mt-2 mb-2' 
                            key={graphicResource.id}
                            >
                            <ResourceCard resource={graphicResource} />
                        </Col>
                    );
                 })}
                 </Row>
            </AccordionBody>
        </AccordionItem>
        <AccordionItem>
            <AccordionHeader><h1 className='congrats'>Written Resources</h1></AccordionHeader>
            <AccordionBody>
                <Row fluid='true' className='mx-auto'>
                {writtenResources.map((writtenResource) => {
                    return(
                        <Col 
                            sm='6'
                            lg='4'
                            className='mt-2 mb-2' 
                            key={writtenResource.id}
                            >
                            <ResourceCard resource={writtenResource} />
                        </Col>
                    );
                })}
                </Row>
            </AccordionBody>
        </AccordionItem>
    </Accordion>
</>

    );
};

export default ResourceFilter;