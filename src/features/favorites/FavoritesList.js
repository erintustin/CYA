import { useSelector } from 'react-redux';
import { Container, Col, Row } from 'reactstrap';
import ResourceCard from "../Resources/ResourceCard";
import { selectFavorites } from './favoritesSlice';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

const FavoritesList = () => {
    const favorites = useSelector(selectFavorites);

    const isLoading = useSelector((state) => state.favorites.isLoading);
    const errMsg = useSelector((state) => state.favorites.errMsg);

    if (isLoading) {
        return (
            <Row>
                <Loading />
            </Row>
        );
    }

    if (errMsg) {
        return (
            <Row>
                <Error errMsg={errMsg} />
            </Row>
        );
    };

    return (
        <Container  className='p-5'>
        <Row>
            {favorites.map((favorite) => {
                return(
                    <Col md='4'
                        sm ='6'
                        className='mt-2 mb-2' 
                        key={favorite.id}>
                        <ResourceCard resource={favorite} />
                    </Col>
                );
            })}
        </Row>
        </Container>
        )
}

export default FavoritesList;