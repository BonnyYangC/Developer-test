import fs from "fs";
import csv from "csv-parser";

// type CsvRow = Record<string, string>;
interface CsvHeader {
  [key: string]: string;
}
interface CsvRow {
  [key: string]: string; // | number;
}
// type RatingData = Record<string, number>;
interface RatingData {
  [key: string]: number;
}

const EMAIL_STRING = "Email";
const EMPLOYEE_ID_STRING = "Employee Id";
const SUBMITTED_STRING = "Submission time";

const surveyResults: RatingData = {};
let surveyQuestions: string[] = [];
let participants: number = 0;
let submitted: number = 0;

export default function call(_arguments: string[]): Promise<string> {
  return new Promise((resolve, reject) => {
    const filePath: string = _arguments[0];
    if (!filePath) {
      return reject(new Error("Please provide a path to csv file."));
    }
    // Check if the file exists
    if (!fs.existsSync(filePath)) {
      return reject(new Error("File not found!"));
    }
    // Read and parse the CSV file
    fs.createReadStream(filePath)
      .pipe(csv())
      .on("headers", (headers: CsvHeader) => getSurveyQuestions(headers))
      .on("data", (data: CsvRow) => {
        getParticipants(data);
        getSubmitted(data);
        getSurveyResults(data);
      })
      .on("end", () => resolve(buildOutput()))
      .on("error", (error) => reject(`Error reading file: ${error.message}`));
  });
}

const getSurveyQuestions = (headers: CsvHeader) => {
  surveyQuestions = Object.values(headers).filter(
    (value) =>
      ![EMAIL_STRING, EMPLOYEE_ID_STRING, SUBMITTED_STRING].includes(value)
  );
};

const getParticipants = (data: CsvRow) => {
  if (!surveyQuestions.filter((item) => !data[item]).length) {
    participants++;
  }
};

const getSubmitted = (data: CsvRow) => {
  if (!data[SUBMITTED_STRING]) return;
  submitted++;
};
const getSurveyResults = (data: CsvRow) => {
  surveyQuestions.map((item) => {
    if (!(item in surveyResults)) {
      surveyResults[item] = 0;
    }
    // console.log(typeof data[item]);
    const r = Number(data[item]);
    // console.log(typeof data[SUBMITTED_STRING]);
    surveyResults[item] += isNaN(r) || !data[SUBMITTED_STRING] ? 0 : r;
  });
};
const toNumber = (value: string | number) => {
  if (typeof value === "number") {
    // console.log("number");
    return value;
  } else {
    console.log("string");
    return Number(value);
    // if (isNaN(r)) {
    //   return 0;
    // }
    // return r;
  }
};
const calculateParticipationRate = () =>
  `${((submitted / participants) * 100).toFixed(1)}%`;
const calculateAverageRating = () =>
  Object.entries(surveyResults)
    .map(([key, value]) => `${key} ${(value / submitted).toFixed(1)}`)
    .join("\n");
const buildOutput = () =>
  `
  Participation

  Participants: ${participants}
  Submitted: ${submitted} (${calculateParticipationRate()})

  ${calculateAverageRating()}
`.replace(/^ +/gm, "");
