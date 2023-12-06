import { useLoaderData, useParams } from "react-router-dom";
import { Button, Label, TextInput, Textarea } from "flowbite-react";

const EditData = () => {
  const { id } = useParams();
  const { title, description, imageURL } = useLoaderData();

  //data submission
  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const description = form.description.value;
    const imageURL = form.imageURL.value;

    const updatedContentItems = {
      title,
      description,
      imageURL,
    };
    fetch(`http://localhost:5000/item/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedContentItems),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Content is update successfully!");
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Edit Content</h2>
      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={handleUpdate}
      >
        {/* {first row} */}
        <div className="flex gap-8">
          {/* {title} */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="title" value="Title" />
            </div>
            <TextInput
              id="title"
              autoComplete="off"
              type="text"
              name="title"
              placeholder="Title here"
              defaultValue={title}
              required
            />
          </div>
          {/* {imageURL} */}
          <div className="lg:w-1/2">
            <div className="mb-2 block">
              <Label htmlFor="imageURL" value="ImageURL" />
            </div>
            <TextInput
              autoComplete="off"
              id="imageURL"
              type="text"
              name="imageURL"
              placeholder="ImageURL here"
              defaultValue={imageURL}
              required
            />
          </div>
        </div>
        {/* {second row} */}
        {/* {description} */}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="description" value="Description" />
          </div>
          <Textarea
            id="description"
            type="text"
            name="description"
            placeholder="Write description here..."
            className="w-full "
            autoComplete="off"
            defaultValue={description}
            rows={6}
            required
          />
        </div>
        <Button
          type="submit"
          className="mt-5 bg-red-800 enabled:hover:bg-red-700"
        >
          Update Content
        </Button>
      </form>
    </div>
  );
};
export default EditData;
