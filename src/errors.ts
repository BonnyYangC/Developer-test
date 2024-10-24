export class SearchApiError extends Error {
  public statusCode: number;

  constructor(message: string, statusCode: number) {
    super(message); // Call the parent class (Error) constructor
    this.statusCode = statusCode; // Set the custom status code
    this.name = this.constructor.name; // Set the error name to the custom class name
  }
}

function isSearchApiError(error: unknown): error is SearchApiError {
  return error instanceof SearchApiError;
}

export function handleError(error: unknown): void {
  if (isSearchApiError(error)) {
    console.error(
      `${error.name} Error: ${error.message}, Status Code: ${error.statusCode}`
    );
  } else {
    console.error("General Error:", (error as Error).message);
  }
}
