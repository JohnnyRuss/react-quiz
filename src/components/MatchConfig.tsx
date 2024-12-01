import {
  matchTypeOptions,
  difficultyOptions,
  questionsPerMatchOptions,
} from "@/lib/config";
import { useHandleSettings, useHandleMatchCategory } from "@/hooks";
import { useAppContext } from "@/Provider/AppProvider";

import { SelectField } from "./Form";
import * as Styled from "./styles/matchConfig.styled";

type MatchConfigT = {
  setShowMatchConfig: React.Dispatch<React.SetStateAction<boolean>>;
};

const MatchConfig: React.FC<MatchConfigT> = ({ setShowMatchConfig }) => {
  const { startTrivia, playClickSound, playHoverSound } = useAppContext();

  const {
    handleSelect,
    preventChange,
    selectedMatchType,
    selectedDifficulty,
    selectedQuestionsPerMatch,
  } = useHandleSettings();

  const { categoryOptions, selectedCategory, onSelectCategory, loading } =
    useHandleMatchCategory();

  const onHome = () => playClickSound(() => setShowMatchConfig(false));

  const onPlay = () => playClickSound(() => startTrivia());

  return (
    <Styled.MatchConfig>
      <div className="config-header">
        <h4>configure match</h4>

        <button onClick={onHome} onMouseEnter={() => playHoverSound()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path fill="currentColor" d="M4 21V9l8-6l8 6v12h-6v-7h-4v7z" />
          </svg>
        </button>
      </div>

      <SelectField
        label="match type"
        value={selectedMatchType}
        options={matchTypeOptions}
        onChange={(value) => handleSelect(value, "type")}
      />

      <SelectField
        label="categories"
        options={categoryOptions}
        isDisabled={loading ? true : false}
        onChange={(value) => onSelectCategory(value)}
        value={loading ? { label: "Loading...", value: "" } : selectedCategory}
      />

      <SelectField
        label="select difficulty"
        isDisabled={preventChange}
        value={selectedDifficulty}
        options={difficultyOptions}
        onChange={(value) => handleSelect(value, "difficulty")}
      />

      <SelectField
        label="questions per match"
        isDisabled={preventChange}
        value={selectedQuestionsPerMatch}
        options={questionsPerMatchOptions}
        onChange={(value) => handleSelect(value, "questionsPerMatch")}
      />

      <button
        className="btn"
        onClick={onPlay}
        disabled={loading}
        onMouseEnter={() => playHoverSound()}
      >
        Play
      </button>
    </Styled.MatchConfig>
  );
};

export default MatchConfig;
