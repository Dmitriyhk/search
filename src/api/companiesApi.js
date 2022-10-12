import axios from "axios";

export const getCompaniesByName = async (name) => {
  const response = await axios.get(
    `https://autocomplete.clearbit.com/v1/companies/suggest?query=:${name}`
  );
  return response;
};
