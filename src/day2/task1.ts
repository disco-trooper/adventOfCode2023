import { getMaxValues, getRolls, getSumOfValues } from "./utils";
import { getLines } from "../utils";
import { input } from "./taskInput";

const MAX_RED_COUNT = 12;
const MAX_GREEN_COUNT = 13;
const MAX_BLUE_COUNT = 14;

const games = getLines(input);

const filteredGameIds = games
  .map((game) => {
    const gameId = Number(
      game.substring(0, game.indexOf(":")).replace(/\D/g, "")
    );
    const rolls = getRolls(game);
    const maxGameValues = getMaxValues(rolls);

    return maxGameValues["red"] <= MAX_RED_COUNT &&
      maxGameValues["green"] <= MAX_GREEN_COUNT &&
      maxGameValues["blue"] <= MAX_BLUE_COUNT
      ? gameId
      : null;
  })
  .filter((el) => el) as number[];

const sumOfIds = getSumOfValues(filteredGameIds);

console.log(sumOfIds);
