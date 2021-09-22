import React, { ReactNode, useEffect, useRef, useState } from "react";
import { Arrow, Flex, View } from "vcc-ui";

interface CarouselProps {
  children: ReactNode[];
}

export function Carousel({ children }: CarouselProps) {
  const [carouselWidth, setCarouselWidth] = useState<number>(0);
  const [carouselTranslate, setCarouselTranslate] = useState<number>(0);
  const [enableLeftArrow, setEnableLeftArrow] = useState(true);
  const [enableRightArrow, setEnableRightArrow] = useState(false);
  const itemsContainer = useRef(null);

  const elementsNumber = children?.length;

  // in the future could be passed as prop
  const itemWidth = 336;

  // only 4 items to be shown in the view port, Maybe we can pass this as a prop
  const showItemsInViewPort = 4 * itemWidth;

  //
  const limitOfLeftTranslate = elementsNumber * itemWidth - showItemsInViewPort;

  //console.log("limitOfLeftTranslate", limitOfLeftTranslate);

  useEffect(() => {
    if (elementsNumber > 0) setCarouselWidth(itemWidth * elementsNumber);
  }, [elementsNumber]);

  useEffect(() => {});

  const moveLeft = () => {
    if (carouselWidth + carouselTranslate > showItemsInViewPort) {
      setCarouselTranslate(carouselTranslate - itemWidth);
    }
  };

  const moveRight = () => {
    if (carouselTranslate < 0) {
      setCarouselTranslate(carouselTranslate + itemWidth);
    }
  };

  return (
    <>
      <Flex
        extend={{
          overflow: "hidden",
        }}
      >
        <Flex
          ref={itemsContainer}
          extend={{
            transition: "transform 200ms ease-out",
            flexDirection: "row",
            flexWrap: "nowrap",
            width: carouselWidth,
            transform: `translateX(${carouselTranslate}px)`,
          }}
        >
          {children}
        </Flex>
      </Flex>

      {/* Controls */}
      <View
        flex={1}
        direction={"row"}
        wrap={"wrap"}
        justifyContent={"flex-end"}
        spacing={1}
      >
        <View
          onClick={moveLeft}
          extend={{
            padding: 8,
            border: "1px solid",
            borderColor: enableLeftArrow ? "#333" : "#a2a2a2",
            borderRadius: "50%",
          }}
        >
          <Arrow
            size={15}
            direction="left"
            color={enableLeftArrow ? "#333" : "#a2a2a2"}
          />
        </View>

        <View
          onClick={moveRight}
          extend={{
            padding: 8,
            border: "1px solid",
            borderColor: enableRightArrow ? "#333" : "#a2a2a2",
            borderRadius: "50%",
          }}
        >
          <Arrow
            size={15}
            direction="right"
            color={enableRightArrow ? "#333" : "#a2a2a2"}
          />
        </View>
      </View>
    </>
  );
}
