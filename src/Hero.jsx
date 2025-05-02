import React, { useEffect, useState } from "react";
import image from "../public/hero.png";
import BookCard from "./BookCard";

const Hero = () => {
  const [books, setbooks] = useState([]);
  const [listedbooks , setlistedbooks] = useState([])
  useEffect(() => {
    fetch("bookdata.json")
      .then((res) => res.json())
      .then((data) => setbooks(data));
  }, []);
  //const booksdata = useLoaderData();
  //console.log(booksdata);
  console.log(books)
  return (
    <div className="">
      <img
        className=" mt-3 p-3 md:p-0 md:w-[1480px] mx-auto"
        src={image}
        alt=""
      />

      <div className="flex justify-center items-center text-5xl my-10">
        <h1>Books</h1>
      </div>
      <div className="grid md:gap-7 md:grid-cols-3 ">
        {books.map((book) => (
          <BookCard book={book} key={book.id}></BookCard>
        ))}
      </div>
    </div>
  );
};

export default Hero;
