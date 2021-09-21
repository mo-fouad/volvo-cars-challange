import React from "react";
import { useFela } from "react-fela";
//
interface BaseImageTypes {
  src: string;
  alt: string;
  extend?: {};
}
// todo : Enhance this Component to cover all of our needs
export function BaseImage({ src, extend }: BaseImageTypes) {
  const { css } = useFela();

  return (
    <img
      src={src}
      alt=""
      role="presentation"
      className={extend ? css(extend) : ""}
    />
  );
}
