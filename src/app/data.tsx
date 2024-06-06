export const visitTypes = [
  {
    type: "Visitor",
    img: "/visitor.svg",
  },
  {
    type: "Delivery",
    img: "/delivery.svg",
  },
  {
    type: "Function",
    img: "/function.svg",
  },
];

export const visitDetailFields = [
  {
    label: "Visit name",
    prop: "name",
    type: "input",
  },
  {
    label: "Meeting point level",
    prop: "meetingPointLevel",
    type: "select",
    options: [{ text: "Level 1", value: "Level 1" }],
  },
  {
    label: "Date",
    prop: "date",
    type: "input",
  },
  {
    label: "Meeting point stand",
    prop: "meetingPointStand",
    type: "select",
    options: [{ text: "Stand Grand", value: "Stand Grand" }],
  },
  {
    label: "Entry time",
    prop: "time",
    type: "input",
  },
  {
    label: "Meeting point room",
    prop: "meetingPointRoom",
    type: "select",
    options: [{ text: "Ballroom", value: "Ballroom" }],
  },
  {
    label: "duration",
    prop: "duration",
    type: "select",
    options: [{ text: "30 mins", value: "30 mins" }],
  },
];
