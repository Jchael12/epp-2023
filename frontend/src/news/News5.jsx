// importing images
import image5 from "/src/assets/premises.jpg";

function News5() {
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <img src={image5} className="w-[500px] mt-28" />
      <div className="bg-red-600 text-justify flex flex-col items-center justify-center mt-5 p-10 text-white rounded-md border-t-2 border-amber-300">
        <h5 className="text-3xl">News 5</h5>
        <p>
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet.
        </p>
      </div>
    </div>
  );
}

export default News5;
