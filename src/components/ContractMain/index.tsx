import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import Card from "components/Card";
import Stepper from "components/Stepper";
import StepperNavigation from "components/StepperNavigation";
import TokenTypeView from "views/token-type.view";
import TokenSettingsView from "views/token-settings.view";
import DeploymentView from "views/deployment.view";

import { appStore } from "store/app.store";

const ContractMain: FC = () => {
  return (
    <>
      <div className="p-4">
        <div className="flex flex-col">
          <Stepper />
          <Card>
            {appStore.currentTab === 1 && <TokenTypeView />}
            {appStore.currentTab === 2 && <TokenSettingsView />}
            {appStore.currentTab === 3 && <DeploymentView />}
          </Card>
          <StepperNavigation />
        </div>
      </div>
    </>
  );
};

export default observer(ContractMain);
