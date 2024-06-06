This is developer test for Studio Malt.

## Objective:

Build a multipage form using NextJS that submits data to an endpoint.

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000/visits](http://localhost:3000/visits) with your browser to see the result.

## File strucure

--src
|
|-- app
     |-- data.tsx : include pre-defined data, like visit types etc.
     |-- layout.tsx
     |-- page.tsx 
     |
     |-- components : includes shared component, such as Button, Card etc.
     |      |-- button.tsx
     |      |-- card.tsx
     |      |-- input.tsx
     |      |-- select.tsx
     |   
     |-- visits : entry point of route /visits
            |-- layout.tsx
            |-- page.tsx
            |-- components : shared components by visits route
                    |-- formContext.tsx : custom form context
                    |-- visitsForm.tsx : first design page
                    |-- visitDetailForm.tsx : second design page
                    |-- visitReviewForm.tsx : third design page
                    |-- visitSubmittedForm.tsx : forth design page
                    |-- dataReview.tsx : custom view to review visit details
                    |-- dataConfirmRow.tsx : custom row to display each details field

## To Be Improved
1. Use pre-defined visit detail fields to render visitDetailForm.tsx
2. Better to use selector option text instead of option value to construct formData
3. Validation of form data
4. Integrate date picker
5. Test case


