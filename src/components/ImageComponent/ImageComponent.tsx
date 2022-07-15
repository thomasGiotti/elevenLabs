import React from "react";
import "./index.css";

type Props = {
  imageSource: string;
  imageDescription: string;
};

export const ImageComponents = ({ imageSource, imageDescription }: Props) => {
  return <img className="image" src={imageSource} alt={imageDescription} />;
};
