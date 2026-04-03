import React, { Children } from "react";

export function Carousel({ children }: { children: React.ReactNode }) {
  const childrenArray = Children.toArray(children);
  return (
    <div>
      <button></button>
      <div>
        {childrenArray.map((child, index) => (
          <div key={index}>{child}</div>
        ))}
      </div>
      <button></button>
    </div>
  );
}

export function CarouselItem() {
  return <div></div>;
}
