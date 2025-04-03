import data from "../../all-cars-response.json";
import Container from "../../components/Container/Container";
import SearchBar from "../../components/SearchBar/SearchBar";
// console.log("data: ", data);

const CatalogPage = () => {
  return (
    <Container>
      <h2 className="visually-hidden">Catalog Page</h2>
      <SearchBar />
    </Container>
  );
};
export default CatalogPage;
