import { Container} from 'reactstrap';
import GamesList from '../features/games/GamesList';
import SubHeader from '../components/SubHeader'; 

const GamesDirectoryPage = () => {

   return (
   
  <Container>
  <SubHeader current='Directory'/>
  <GamesList/>
  </Container>
 
   );

};

export default GamesDirectoryPage;