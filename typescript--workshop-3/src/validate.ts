import { z } from "zod";

const url = "https://swapi.dev/api/people/1/";
const LukeSchema = z.object({
  name: z.string(),
  height: z.union([z.string(), z.number()]),
  mass: z.union([z.string(), z.number()]),
  hair_color: z.string(),
  eye_color: z.string(),
  birth_year: z.union([z.string(), z.date()]),
  gender: z.string(),
});

const lukeData = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    const validatedData = LukeSchema.parse(data);

    // Check types and convert if necessary
    if (typeof validatedData.height === "string") {
      validatedData.height = parseInt(validatedData.height);
    }

    if (typeof validatedData.mass === "string") {
      validatedData.mass = parseInt(validatedData.mass);
    }

    if (typeof validatedData.birth_year === "string") {
      validatedData.birth_year = convertBirthYearToValidDate(
        validatedData.birth_year
      );
    }

    console.log("Validated data for Luke Skywalker:", validatedData);
    return validatedData;
  } catch (error) {
    console.error("Error fetching", error);
  }
};
lukeData();

const convertBirthYearToValidDate = (birthYear: string): Date | string => {
  if (birthYear.endsWith("BBY")) {
    const yearBBY = parseInt(birthYear);
    if (!isNaN(yearBBY)) {
      const currentYear = new Date().getFullYear();
      const actualYear = currentYear - yearBBY;
      return new Date(`${actualYear}`);
    }
  }
  return "Invalid date format";
};
