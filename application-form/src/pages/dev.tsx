import { FC, useState } from "react";
import { AutoGenerated } from "../components/developerTesting/autoGenerated";
import { DependancyTesting } from "../components/developerTesting/dependancyTesting";
import { ExampleMainSection } from "../components/developerTesting/ExampleMainSection";
import { MultipleValuesInput } from "../components/developerTesting/multipleValuesInput";
import { OnlyOneInput } from "../components/developerTesting/onlyOneInput";

export const Dev: FC = () => {
  const [exampleShow, setExampleShow] = useState(false);
  const showExample = (value: any) => setExampleShow(value);
  return (
    <div
      style={{
        background: "#f2eee9",
        height: "auto",
        padding: "10px",
      }}
      className="test"
    >
      <DependancyTesting showExample={showExample} state={exampleShow} />
      <br />
      <br />
      <MultipleValuesInput />
      <br />
      <br />
      <OnlyOneInput />
      <br />
      <br />
      <AutoGenerated />
      <br />
      <br />
      {exampleShow && <ExampleMainSection />}
    </div>
  );
};
