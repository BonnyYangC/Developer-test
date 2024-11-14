import csv from "csv-parser";
import fs from "fs";
import { CsvHeader, CsvRow, RatingData } from "./types.js";

const EMAIL_STRING = "Email";
const EMPLOYEE_ID_STRING = "Employee Id";
const SUBMISSION_STRING = "Submission time";

const surveyAnswerSum: RatingData = {};
let surveyQuestions: string[] = [];
let participants: number = 0;
let submitted: number = 0;

export default function call(_arguments: string[]): string {
  // Your implementation starts here
  const filePath: string = _arguments[0];
  if (!filePath) {
    return "Please provide a file path.";
  }

  // Check if file exists
  if (!fs.existsSync(filePath)) {
    return "File not found!";
  }

  // get sum of survey answer
  const getSurveyAnswerSum = (data: CsvRow) => {
    surveyQuestions.map((question) => {
      if (!(question in surveyAnswerSum)) {
        surveyAnswerSum[question] = 0;
      }
      const answer = Number(data[question]);
      surveyAnswerSum[question] +=
        isNaN(answer) || !data[SUBMISSION_STRING] ? 0 : answer;
    });
  };

  // Read file and parse
  fs.createReadStream(filePath)
    .pipe(csv())
    .on("headers", (headers: CsvHeader) => {
      surveyQuestions = Object.values(headers).filter((value) => {
        ![EMAIL_STRING, EMPLOYEE_ID_STRING, SUBMISSION_STRING].includes(value);
      });
    })
    .on("data", (data: CsvRow) => {
      if (!surveyQuestions.filter((question) => !data[question]).length) {
        participants++;
      }
      if (data[SUBMISSION_STRING]) {
        submitted++;
      }
      getSurveyAnswerSum(data);
    })
    .on("end", () => {});
  return "";
}
