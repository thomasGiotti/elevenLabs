import React from "react";

type Props = {
  title: string;
  description: string;
};

export const DetailComponent = ({ title, description }: Props) => {
  return (
    <div>
      <h1>{title}</h1> <p>{description}</p>
    </div>
  );
};
