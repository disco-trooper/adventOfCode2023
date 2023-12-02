import { getStringDigitsFromString } from "../utils";

export const getMaxValues = (rolls: string[]): Record<string, number> => {
  const maxGameValues: Record<string, number> = {
    red: 0,
    green: 0,
    blue: 0,
  };

  rolls.forEach((roll) => {
    const cubes = roll.split(", ");

    cubes.forEach((cube) => {
      const number = Number(getStringDigitsFromString(cube));
      const color = cube.substring(cube.indexOf(" ")).trim();

      maxGameValues[color] =
        maxGameValues[color] < number ? number : maxGameValues[color];
    });
  });

  return maxGameValues;
};

export const getRolls = (game: string) => {
  return game.substring(game.indexOf(":") + 2).split("; ");
};
