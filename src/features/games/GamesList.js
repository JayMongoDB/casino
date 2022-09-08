
import { Col, Row } from 'reactstrap';
import GameCard from "./GameCard";
import { selectAllGames } from './gamesSlice';
import { useSelector } from 'react-redux';

const GamesList = () => {
    const games = useSelector(selectAllGames);
    
    return (
        <Row className='ms-auto'>
            {
                games.map((game => {
                    return (
                        <Col md='5' className='m-4' key={game.id}>
                            <GameCard game={game} />
                        </Col>


                    );

                }))

            }
        </Row>


    );

};

export default GamesList;