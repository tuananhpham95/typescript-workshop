"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const zod_1 = require("zod");
const url = "https://swapi.dev/api/people/1/";
const LukeSchema = zod_1.z.object({
    name: zod_1.z.string(),
    height: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    mass: zod_1.z.union([zod_1.z.string(), zod_1.z.number()]),
    hair_color: zod_1.z.string(),
    eye_color: zod_1.z.string(),
    birth_year: zod_1.z.union([zod_1.z.string(), zod_1.z.date()]),
    gender: zod_1.z.string(),
});
const lukeData = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const response = yield fetch(url);
        const data = yield response.json();
        const validatedData = LukeSchema.parse(data);
        // Check types and convert if necessary
        if (typeof validatedData.height === "string") {
            validatedData.height = parseInt(validatedData.height);
        }
        if (typeof validatedData.mass === "string") {
            validatedData.mass = parseInt(validatedData.mass);
        }
        if (typeof validatedData.birth_year === "string") {
            validatedData.birth_year = convertBirthYearToValidDate(validatedData.birth_year);
        }
        console.log("Validated data for Luke Skywalker:", validatedData);
        return validatedData;
    }
    catch (error) {
        console.error("Error fetching", error);
    }
});
lukeData();
const convertBirthYearToValidDate = (birthYear) => {
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
