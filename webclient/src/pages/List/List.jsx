import { useParams, useLocation } from "react-router-dom";
import usePaginatedProperties from "../../services/properties/getPaginatedProperties";
import usePaginatedSearch from "../../services/properties/getPaginatedSearch";
import ListCard from "./ListCard/ListCard";
import ListFooter from "./ListFooter/ListFooter";

const useContent = (page, searchParam) => {
  const hook = searchParam ? usePaginatedSearch : usePaginatedProperties;
  const { loading, error, data } = hook(parseInt(page), searchParam);

  if (loading) return <h2>Loading...</h2>;
  if (error) return <h4>Error loading data</h4>;

  const { pages, properties } = data;
  const mappedProperties = properties.map((property) => (
    <ListCard {...property} key={property.id} />
  ));
  return (
    <>
      {mappedProperties}
      <ListFooter currentPage={parseInt(page)} pagesCount={parseInt(pages)} />
    </>
  );
};

const List = () => {
  const { page } = useParams();
  const searchParam = new URLSearchParams(useLocation().search).get(
    "searchParam"
  );
  const content = useContent(page, searchParam);
  return (
    <div>
      <h1>LIST OF HOMES</h1>
      {content}
    </div>
  );
};

export default List;
