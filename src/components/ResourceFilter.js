import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Navbar, 
        Collapse,
        NavbarToggler,
        Nav,
        NavItem,
        Button,
        Container,
        Row,
        Col
        } from 'reactstrap';
import { selectResourcesByType } from '../features/Resources/ResourcesSlice';


const ResourceFilter = () => {
    const [filterOpen, setFilterOpen] = useState(false);
    const [typeOpen, setTypeOpen] = useState(false);
    const [videosOpen, setVideosOpen] = useState(false);
    const [infographicsOpen, setInfographicsOpen] = useState(false);
    const [articlesOpen, setArticlesOpen] = useState(false);
    const [categoryOpen, setCategoryOpen] = useState(false);
    

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
                    <Button outline
                            onClick={() => setVideosOpen(!videosOpen)}>
                        Videos
                    </Button>
                    <Button outline
                            onClick={() => setInfographicsOpen(!infographicsOpen)}>
                        Infographics
                    </Button>
                    <Button outline
                            onClick={() => setArticlesOpen(!articlesOpen)}>
                        Articles
                    </Button>
               </Collapse>
            </Nav>
            </Collapse>
        </Navbar>
        <Collapse isOpen={videosOpen}>
        <Container>
            <Row>
                <Col>
                <h1 className='congrats'>Videos</h1>
                </Col>
            </Row>
        </Container>
        </Collapse>
        <Collapse isOpen={infographicsOpen}>
        <Container>
            <Row>
                <Col>
                <h1 className='congrats'>Infographics</h1>
                </Col>
            </Row>
        </Container>
        </Collapse>
        <Collapse isOpen={articlesOpen}>
        <Container>
            <Row>
                <Col>
                <h1 className='congrats'>Articles</h1>
                </Col>
            </Row>
        </Container>
        </Collapse>
</>

    );
};

export default ResourceFilter;