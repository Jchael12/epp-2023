// importing images
import image4 from "/src/assets/image4.jpg";

function News4() {
  return (
    <div className="flex flex-col items-center justify-center mt-28">
      <img src={image4} className="w-[500px] mt-28" />
      <div className="bg-red-600 text-justify flex flex-col items-center justify-center mt-5 p-10 text-white rounded-md border-t-2 border-amber-300">
        <h4 className="text-4xl">News 4</h4>
        <p className="">
          Lorem ipsum dolor sit amet, officia excepteur ex fugiat reprehenderit
          enim labore culpa sint ad nisi Lorem pariatur mollit ex esse
          exercitation amet.
        </p>
      </div>
    </div>
  );
}

export default News4;
