import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchSkips } from "../../../utils/apis.js";
import SkipCard from "../../Molecules/SkipCard";
import Typography from "../../Atoms/Typography";
import StepProgress from "../../Molecules/StepProgress";
import FooterBanner from "../../Molecules/FooterBanner";
import Loader from "../../Atoms/Loader";

const SkipSelect = () => {
  const { data, isLoading, error } = useQuery({
    queryKey: ["skips"],
    queryFn: fetchSkips,
  });

  const [selectedSkip, setSelectedSkip] = useState(null);
  const [currentStep, setCurrentStep] = useState("Select Skip");

  if (error) return <p>Error: {error.message}</p>;

  return (
    <div className=" max-w-[1440px] p-4 lg:p-8 mx-auto">
      <StepProgress currentStep={currentStep} setCurrentStep={setCurrentStep} />
      <div className="flex flex-col gap-2 items-center mb-6">
        <Typography variant="h4">{"Choose Your Skip Size"}</Typography>
        <Typography variant="caption">
          {"Select the skip size that best suits your needs"}
        </Typography>
      </div>

      {!isLoading ? (
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-4 lg:gap-6">
          {data?.map((skip) => (
            <SkipCard
              key={skip?.id}
              data={skip}
              selectedSkip={selectedSkip}
              setSelectedSkip={setSelectedSkip}
            />
          ))}
        </div>
      ) : (
        <Loader />
      )}
      <FooterBanner data={data} selectedSkip={selectedSkip} />
    </div>
  );
};

export default SkipSelect;
