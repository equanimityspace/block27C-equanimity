import { useState } from "react";
import { useAddPuppyMutation, useGetPuppiesQuery } from "./puppySlice";

/**
 * @component
 * Users can add puppies to the roster by submitting this form.
 */
export default function PuppyForm() {
  const [name, setName] = useState("");
  const [breed, setBreed] = useState("");
  const { isLoading, isError: error } = useGetPuppiesQuery();
  const [addPuppy] = useAddPuppyMutation();
  // TODO: Use the `addPuppy` mutation to add a puppy when the form is submitted

  async function postPuppy(event) {
    event.preventDefault();

    // Placeholder image w/ random photos of dogs
    const imageUrl = "https://loremflickr.com/200/300/dog";
    // console.log({ name, breed });
    try {
      const response = await addPuppy({ name, breed }).unwrap();
      // console.log(response);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h2 className="mt-3">Add a Puppy</h2>
      <form onSubmit={postPuppy} id="addPuppy" className="w-50">
        <input
          name="puppyName"
          placeholder="Dog Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="form-control fw-semibold w-25"
        />
        <input
          name="breed"
          placeholder="Dog Breed"
          value={breed}
          onChange={(e) => setBreed(e.target.value)}
          className="form-control fw-semibold w-25"
        />
        <button className="btn btn-outline-primary">Add to Roster</button>
        {isLoading && <output>Uploading puppy information...</output>}
        {error && <output>{error.message}</output>}
      </form>
    </div>
  );
}
