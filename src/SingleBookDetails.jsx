import { useLoaderData, useNavigate, useParams } from "react-router-dom";

const SingleBookDetails = () => {
  const booksData = useLoaderData();
  //console.log(booksData);
  const perams = useParams();
  const { id } = perams;
  //   let intperams = parseInt(perams)
  //   console.log(intperams)
  const nevigate = useNavigate();

  function handlenevigate() {
    nevigate(-1);
  }
  let singleData = booksData.find((books) => books.id == id);
  console.log(singleData);
  //console.log(perams);

  return (
    <div>
      <div className="max-w-6xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-md mt-10 p-6 md:flex md:space-x-6">
        {/* Book Image */}
        <div className="flex-shrink-0 mb-4  md:justify-center md:items-center md:flex bg-gray-50 rounded-2xl p-5 md:mb-0">
          <img
            src={singleData.image}
            alt="Book Cover"
            className="md:w-full w-60 h-64 object-cover mx-auto"
          />
        </div>

        {/* Book Details */}
        <div className="flex-1">
          {/* Title and Author */}
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-1">
            {singleData.title}
          </h1>
          <p className="text-gray-600 dark:text-gray-400 mb-4">
            By : {singleData.author}
          </p>

          {/* Genre */}
          <p className="text-gray-700 dark:text-gray-300 font-semibold mb-4">
            {singleData.genre}
          </p>

          {/* Review */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Review:
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              {singleData.review}
            </p>
          </div>

          {/* Tags */}
          <div className="mb-4">
            <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
              Tag:
            </h2>
            <div className="flex gap-2">
              {singleData.categories.map((category, index) => (
                <span
                  key={index}
                  className="bg-green-100 dark:bg-green-700 text-green-800 dark:text-green-200 text-xs font-semibold px-2.5 py-0.5 rounded"
                >
                  #{category}
                </span>
              ))}
            </div>
          </div>

          {/* Number of Pages */}
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            <span className="font-semibold text-gray-900 dark:text-white">
              Number of Pages:
            </span>{" "}
            {singleData.numberOfPages}
          </p>

          {/* Publisher */}
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            <span className="font-semibold text-gray-900 dark:text-white">
              Publisher:
            </span>{" "}
            {singleData.publisher}
          </p>

          {/* Year of Publication */}
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            <span className="font-semibold text-gray-900 dark:text-white">
              Year of Publishing:
            </span>{" "}
            {singleData.yearOfPublication}
          </p>

          {/* Rating */}
          <p className="text-gray-600 dark:text-gray-400">
            <span className="font-semibold text-gray-900 dark:text-white">
              Rating:
            </span>{" "}
            {singleData.rating}
          </p>
          <div className="mt-4">
            <button onClick={handlenevigate} className="btn">Go Back</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBookDetails;
