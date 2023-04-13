import Card from "../components/card";

function Home() {
  return (
    <div className="background">
      <div className="mainSpace">
        <input className="searchBar" type="text" placeholder="Search for..." />
        <button className="searchButton">Search</button>
        <div className="cardContainer">
          <Card
            title="Title"
            description="DescriptionDescription DescriptionDescription"
            tags={["tag1", "tag2"]}
            link="https://www.google.com"
          />
          <Card
            title="Title"
            description="DescriptionDescri ptionDescriptionDescrip tionDescriptionD escriptionDescriptionDesc riptionDescripti onDescription"
            tags={["tag1", "tag2"]}
            link="https://www.google.com"
          />
          <Card
            title="Title"
            description="Description"
            tags={["tag1", "tag2"]}
            link="https://www.google.com"
          />
          <Card
            title="Title"
            description="DescriptionDescri ptionDescriptionDescripti onDescriptionDescription"
            tags={["tag1", "tag2"]}
            link="https://www.google.com"
          />
        </div>
      </div>
      <div className="leftStripe">
        <h2 className="hi">Hi username!</h2>
        <div>
          <input className="addInput" type="text" placeholder="Watch new tag" />
          <button className="plusButton">+</button>
        </div>
        <div className="tagContainer">
          
        </div>
      </div>
    </div>
  );
}

export default Home;
