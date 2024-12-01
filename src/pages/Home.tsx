import * as UI from "@/components";
import * as Styled from "@/components/styles/homeContainer.styled";
import { useAppContext } from "@/Provider/AppProvider";

const Home: React.FC = () => {
  const { showMatchConfig, setShowMatchConfig, playClickSound } =
    useAppContext();

  const onStart = () => {
    playClickSound(() => setShowMatchConfig(true));
  };

  return (
    <Styled.Home>
      {showMatchConfig ? (
        <UI.MatchConfig setShowMatchConfig={setShowMatchConfig} />
      ) : (
        <div>
          <UI.HomeText />
          <UI.StartQuizButton startTrivia={onStart} />
        </div>
      )}
    </Styled.Home>
  );
};

export default Home;
