import { useEffect, useState } from "react";
import Card from "../components/card";
import { SearchService } from "../search/searchService";
import { SearchResult } from "../search/searchResult";

function searchByKeyword(searchService: SearchService, keyword: string) {
  searchService.search(keyword);
}

function Home() {
  const [searchService, setSearchService] = useState<SearchService>(SearchService.getInstance());
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    searchService.search("spacex").then((results) => {
      setSearchResults(results);
    }).catch((error) => {
      alert(error);
    });
  }, []);

  return (
    <div className="background">
      <div className="mainSpace">
        <input className="searchBar" type="text" placeholder="Search for..." />
        <button className="plusButton">X</button>
        <button className="searchButton">Search</button>
        <div className="cardContainer">
          {searchResults.map((result) => {
            return <Card name={result.name} url={result.url} description={result.description} datePublished={result.datePublished}/>;
          })}
        </div>
      </div>
      <div className="leftStripe">
        <h2 className="hi">Hi username!</h2>
        <div>
          <input className="addInput" type="text" placeholder="Add new topic" />
          <button className="plusButton">+</button>
        </div>
        <div className="tagContainer">

        </div>
      </div>
    </div>
  );
}

export default Home;
