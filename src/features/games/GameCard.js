//Task 1 Part 1

import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { Link } from 'react-router-dom';



const GameCard = ({ game }) => {
    const { id, image, name } = game;
    return (
    <Link to={`${id}`}>
            <Card>
                <CardImg width='100%'
                    src={image}
                    alt={name} />

                <CardImgOverlay>
                    <CardTitle>{name}</CardTitle>
                </CardImgOverlay>

        </Card>
    </Link>
        
    )
};



export default GameCard;