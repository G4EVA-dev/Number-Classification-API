import axios from "axios";
import { CONFIG } from "../config";

export async function fetchFunFact(n: number): Promise<string> {
  try {
    const response = await axios.get(
      `${CONFIG.NUMBERS_API_BASE_URL}/${n}${CONFIG.MATH_ENDPOINT}`
    );
    return response.data as string;
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
