// The Western Suburbs Croquet Club has two categories of membership, Senior and Open. They would like your help with an application form that will tell prospective members which category they will be placed.

// To be a senior, a member must be at least 55 years old and have a handicap greater than 7. In this croquet club, handicaps range from -2 to +26; the better the player the lower the handicap.
// Input

// Input will consist of a list of pairs. Each pair contains information for a single potential member. Information consists of an integer for the person's age and an integer for the person's handicap.
// Output

// Output will consist of a list of string values (in Haskell and C: Open or Senior) stating whether the respective member is to be placed in the senior or open category.

//*My Solution
export function openOrSenior(data: number[][]): string[] {
  return data.map((person) =>
    person[0] > 54 && person[1] > 7 ? "Senior" : "Open"
  );
}

//Typescript best solution
export const openOrSenior = (data: number[][]): string[] =>
  data.map((applicantData: number[]): string =>
    (applicantData.at(0) ?? -1) >= 55 && (applicantData.at(1) ?? -1) > 7
      ? "Senior"
      : "Open"
  );
