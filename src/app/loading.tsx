import LoadingSpinner from "@/components/ui/Loading/Loading";
import React from "react";

type loadingProps = {};

const loading: React.FC<loadingProps> = () => {
  return <LoadingSpinner />
};
export default loading;
