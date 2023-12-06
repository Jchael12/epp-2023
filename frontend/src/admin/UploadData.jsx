import { Button, Label, TextInput, Textarea } from "flowbite-react";

const UploadData = () => {
  //data submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    const title = form.title.value;
    const description = form.description.value;
    const imageURL = form.imageURL.value;

    const contentItems = {
      title,
      description,
      imageURL,
    };
    //send data to database
    fetch("http://localhost:5000/upload-info", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(contentItems),
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Data has been uploaded successfully!");
        form.reset();
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Upload Data</h2>
      <form
        className="flex lg:w-[1180px] flex-col flex-wrap gap-4"
        onSubmit={handleSubmit}
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
            rows={6}
            required
          />
        </div>
        <Button
          type="submit"
          className="mt-5 bg-red-800 enabled:hover:bg-red-700"
        >
          Upload Data
        </Button>
      </form>
    </div>
  );
};

export default UploadData;
