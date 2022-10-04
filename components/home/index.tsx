import ScreenContainer from '../common/ScreenContainer';
import MicroDisplay from '../play-screen/MicroDisplay';
import BottomBar from './BottomBar';
import FilterChips from './FilterChips';
import Header from './Header';
import HomeList from './HomeList';

const Home = () => {
  return (
    <ScreenContainer>
      <Header />
      <FilterChips />
      <HomeList />
      <MicroDisplay />
      <BottomBar />
    </ScreenContainer>
  );
};

export default Home;
