import * as Pages from "@/pages";

import { useAppContext } from "@/Provider/AppProvider";

const App: React.FC = () => {
  const { resetGame } = useAppContext();

  return (
    <Pages.Container>
      {resetGame && <Pages.Home />}

      <Pages.PlayingBoard />
    </Pages.Container>
  );
};

export default App;
