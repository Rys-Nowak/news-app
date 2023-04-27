import { SearchResult } from "../search/searchResult";


function Card(props: Partial<SearchResult>) {
  return (
    <div  className="card">
    <a href={props.url}>
      <h4>{props.name}</h4>
      <p className="description">{props.description}</p>
      <text>{new Date(props.datePublished ?? "").toDateString()}</text>
    </a>
    </div>
  );
}

export default Card;
