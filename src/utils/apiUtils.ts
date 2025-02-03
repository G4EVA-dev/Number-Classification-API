import axios from "axios";

// Fetch fun fact from Numbers API
export async function fetchFunFact(n: number): Promise<string> {
  try {
    const response = await axios.get(`http://numbersapi.com/${n}/math`);
    return response.data as string; // Ensure response data is treated as a string
  } catch (error: unknown) {
    if ((error as any)?.isAxiosError) {
      console.error("Axios error fetching fun fact:", (error as any).message);
      return "No fun fact available.";
    } else if (error instanceof Error) {
      console.error("Unexpected error:", error.message);
      return "No fun fact available.";
    } else {
      console.error("Unknown error:", error);
      return "No fun fact available.";
    }
  }
}
