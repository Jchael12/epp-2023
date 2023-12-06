import { Table } from "flowbite-react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const ManageData = () => {
  const [allContent, setAllContent] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/all-content")
      .then((res) => res.json())
      .then((data) => setAllContent(data));
  }, []);

  //delete a content
  const handleDelete = (id) => {
    console.log(id);
    fetch(`http://localhost:5000/item/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        alert("Content has been deleted.");
        // setAllContent(data);
      });
  };

  return (
    <div className="px-4 my-12">
      <h2 className="mb-8 text-3xl font-bold">Manage Contents</h2>
      <Table className="lg:w-[1180px]">
        <Table.Head>
          <Table.HeadCell>No.</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Description</Table.HeadCell>
          <Table.HeadCell>
            <span>Edit or Manage</span>
          </Table.HeadCell>
        </Table.Head>
        {allContent.map((item, index) => (
          <Table.Body className="divide-y" key={item._id}>
            <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {index + 1}
              </Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{item.description}</Table.Cell>
              <Table.Cell>{item.imageURL}</Table.Cell>
              <Table.Cell>
                <Link
                  to={`/admin/dashboard/edit-data/${item._id}`}
                  className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                >
                  Edit
                </Link>
                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600"
                >
                  Delete
                </button>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        ))}
      </Table>
    </div>
  );
};

export default ManageData;
