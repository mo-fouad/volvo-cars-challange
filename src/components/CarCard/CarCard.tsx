import React, { Fragment } from "react";
import { View, Link, Text, Flex, useTheme } from "vcc-ui";
import { CardType } from "types";
import { BaseImage } from "ui";

export function CarCard({ carData }: CardType) {
  const { color } = useTheme();

  return (
    <Fragment>
      <View extend={{ maxWidth: 300, marginLeft: 8, marginRight: 8 }}>
        {/*// Create Car Card*/}

        <Text
          as="p"
          variant="bates"
          subStyle="emphasis"
          extend={{
            color: color.foreground.secondary,
            textTransform: "uppercase",
          }}
          aria-label="car body type"
        >
          {carData.bodyType}
        </Text>
        <Flex
          extend={{
            "@media (min-width: 1024px)": {
              flexDirection: "row",
            },
          }}
        >
          <Text
            as="h1"
            extend={{ color: color.foreground.primary, marginRight: 4 }}
            variant="hillary"
            subStyle="emphasis"
            aria-label="car name"
          >
            {carData.modelName}
          </Text>
          <Text
            as="h2"
            variant="hillary"
            extend={{
              color: color.foreground.secondary,
            }}
            aria-label="car model type"
          >
            {carData.modelType}
          </Text>
        </Flex>
        <View paddingTop={1} paddingBottom={1}>
          <BaseImage src={carData.imageUrl} alt={carData.modelName} />
        </View>
        <View direction="row" justifyContent="space-evenly">
          <Link
            alt={`Learn about ${carData.modelName}`}
            href={`/${carData.id}/learn`}
            arrow="right"
          >
            LEARN
          </Link>
          <Link
            alt={`Buy ${carData.modelName} Now`}
            href={`/${carData.id}/shop`}
            arrow="right"
          >
            SHOP
          </Link>
        </View>
      </View>
    </Fragment>
  );
}
