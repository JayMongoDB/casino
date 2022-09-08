import { Container} from 'reactstrap';
import GamesList from '../features/games/GamesList';
import SubHeader from '/Users/jeremymcgowan/Desktop/NucampFolder/3-React/casino/src/components/SubHeader.js'; 

const GamesDirectoryPage = () => {

   return (
   
  <Container>
  <SubHeader current='Directory'/>
  <GamesList/>
  </Container>
 
   );

};

export default GamesDirectoryPage;