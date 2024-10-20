import axios from "axios";
import { CompanySearch } from "./Components/companies";

interface SearchResponse {
  data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
  try {    
    console.log("API Key");
    const apiKey = process.env.FINANCIAL_DATA_APP_API_KEY;
    console.log(apiKey);
    const data = await axios.get<SearchResponse>(      
      `https://financialmodelingprep.com/api/v3/search-ticker?query=${query}&apikey=${process.env.FINANCIAL_DATA_APP_API_KEY}`         
    );

    return data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      console.log("error message", error.message);
      return error.message;
    } else {
      console.log("unexpected error: ", error);
      return "unexpected error occur";
    }
  }
};
