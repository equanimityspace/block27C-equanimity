import { useGetPuppiesQuery } from "./puppySlice";
import { Link } from "react-router-dom";

/**
 * @component
 * Shows a list of puppies in the roster.
 * Users can select a puppy to see more information about it.
 */
export default function PuppyList({ setSelectedPuppyId, search }) {
  const { isLoading, data: puppies } = useGetPuppiesQuery();

  const filterByName = (obj) => {
    if (obj.name.toLowerCase().includes(search.toLowerCase())) {
      return obj;
    }
  };
  const searchFor = puppies?.data.players.filter(filterByName);
  // console.log(searchFor);

  return (
    <article className="mt-4">
      <ul className="puppies">
        {isLoading && <li>Loading puppies...</li>}
        {searchFor?.map((p) => (
          <li
            key={p.id}
            className="bg-success-subtle border border-2 border-success rounded"
          >
            <h3>
              {p.name} #{p.id}
            </h3>
            <figure>
              <img src={p.imageUrl} alt={p.name} />
            </figure>
            <Link to={`/puppy/${p.id}`}>
              <button
                className="btn btn-success m-1"
                onClick={() => setSelectedPuppyId(p.id)}
              >
                See details
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </article>
  );
}
