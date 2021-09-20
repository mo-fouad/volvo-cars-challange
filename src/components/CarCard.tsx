import React from "react";
import { View, Link, Text, Flex, useTheme } from "vcc-ui";
import { CardType } from "types";
import { BaseImage } from "../ui";

export function CarCard({ carData }: CardType) {
  const { color } = useTheme();

  return (
    <View extend={{ maxWidth: 320, marginLeft: 8, marginRight: 8 }}>
      {/*// Create Car Card*/}

      <Text
        variant="bates"
        subStyle="emphasis"
        extend={{
          color: color.foreground.secondary,
          textTransform: "uppercase",
        }}
      >
        {carData.bodyType}
      </Text>
      <Flex
        extend={{
          "@media (min-width: 48rem)": {
            flexDirection: "row",
          },
        }}
      >
        <Text
          extend={{ color: color.foreground.primary, marginRight: 4 }}
          variant="hillary"
          subStyle="emphasis"
        >
          {carData.modelName}
        </Text>
        <Text
          variant="hillary"
          extend={{
            color: color.foreground.secondary,
          }}
        >
          {carData.modelType}
        </Text>
      </Flex>
      <View paddingTop={1} paddingBottom={1}>
        <BaseImage src={carData.imageUrl} alt={carData.modelName} />
      </View>
      <View direction="row" justifyContent="space-evenly">
        <Link href={`/${carData.id}/learn`} arrow="right">
          LEARN
        </Link>
        <Link href={`/${carData.id}/shop`} arrow="right">
          SHOP
        </Link>
      </View>
    </View>
  );
}
