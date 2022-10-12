import React, { useEffect, useState } from "react";
import { getCompaniesByName } from "./api/companiesApi";
import "./App.scss";
import Hints from "./components/Hints";
import Search from "./components/Search";
import { useFetching } from "./hooks/useFetching";

const App = () => {
  const [searchValue, setSearchValue] = useState("");
  const [companiesData, setCompaniesData] = useState([]);
  const [fetchCompanyByName, isLoading, isError] = useFetching(async (name) => {
    const response = await getCompaniesByName(name);
    setCompaniesData(response.data);
  });

  useEffect(() => {
    if (searchValue.trim().length > 0) {
      fetchCompanyByName(searchValue);
    }
  }, [searchValue]);

  return (
    <div className="app">
      <div className="search_wrapper">
        <Search value={searchValue} setValue={setSearchValue} />
        {searchValue.trim().length > 0 && (
          <Hints isError={isError} isLoading={isLoading} data={companiesData} />
        )}
      </div>
    </div>
  );
};

export default App;
