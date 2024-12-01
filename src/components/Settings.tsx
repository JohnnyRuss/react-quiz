import { useState } from "react";

import { useHandleSettings } from "@/hooks";
import { useAppContext } from "@/Provider/AppProvider";
import { difficultyOptions, questionsPerMatchOptions } from "@/lib/config";

import GearButton from "./GearButton";
import { SelectField, SwitchField } from "./Form";
import * as Styled from "./styles/settings.styles";

const Settings: React.FC = () => {
  const { settings, playClickSound } = useAppContext();

  const [showSettings, setShowSettings] = useState<boolean>(false);

  const onOpenSettings = () =>
    playClickSound(() => setShowSettings((prev) => !prev));

  const {
    handleSelect,
    handleSwitch,
    preventChange,
    selectedDifficulty,
    selectedQuestionsPerMatch,
  } = useHandleSettings();

  return (
    <Styled.Settings>
      <GearButton onClick={onOpenSettings} />

      {showSettings && (
        <>
          <div className="backdrop" onClick={() => setShowSettings(false)} />
          <div className="settings-box">
            {preventChange && (
              <p className="prevent-change--msg">
                <span>If any option is disabled</span>
                <span>finish match and then try again.</span>
                <span>wish you good luck 🎉🎉</span>
              </p>
            )}

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
              onChange={(value) => handleSelect(value, "questionsPerMatch")}
              options={questionsPerMatchOptions}
              value={selectedQuestionsPerMatch}
            />

            <SwitchField
              label="switch to next question automatically"
              checked={settings.switchToNextQuestion}
              handleSwitch={(checked) =>
                handleSwitch(checked, "switchToNextQuestion")
              }
            />

            <SwitchField
              label="show correct answers"
              checked={settings.showCorrectAnswer}
              handleSwitch={(checked) =>
                handleSwitch(checked, "showCorrectAnswer")
              }
            />

            <SwitchField
              disabled={preventChange}
              label="save match History"
              checked={settings.saveMatchHistory}
              title="This options allows to review your match after complete it"
              handleSwitch={(checked) =>
                handleSwitch(checked, "saveMatchHistory")
              }
            />
          </div>
        </>
      )}
    </Styled.Settings>
  );
};

export default Settings;
