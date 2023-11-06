import React from "react";

type ImageProps = {
  src: string;
  alt?: string;
  width?: number;
};

function Image({ src, alt = "", width }: ImageProps) {
  return React.createElement("img", {
    src,
    alt,
    width: width ?? "auto",
  });
}

export default Image;
