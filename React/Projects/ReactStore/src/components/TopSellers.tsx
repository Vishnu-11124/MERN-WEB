import { useEffect, useState } from "react";

interface Author {
  name: string;
  isFollowing: boolean;
  image: string;
}

const TopSellers = () => {
  const [authors, setAuthors] = useState<Author[]>();

  useEffect(() => {
    const fetchAuthors = async () => {
      try {
        const response = await fetch("https://randomuser.me/api/?results=5");
        const data = await response.json();

        const authorsData: Author[] = data.results.map((user: any) => ({
          name: `${user.name.first} ${user.name.last}`,
          isFollowing: false,
          image: user.picture.medium,
        }));

        setAuthors(authorsData);
      } catch (error) {
        console.log(`Error fetching authors, ${error}`);
      }
    };
    fetchAuthors();
  }, []);

  const handleFollow = (index: number) => {
    setAuthors((prev) =>
      prev?.map((author, i) =>
        i === index
          ? { ...author, isFollowing: !author.isFollowing }
          : author
      )
    );
  };

  return (
    <div className="bg-white p-5 mt-5 w-[23rem] rounded-xl shadow-sm">
      <h2 className="text-lg font-semibold mb-4">Top Sellers</h2>

      <ul className="space-y-4">
        {authors?.map((author, index) => (
          <li
            key={index}
            className="flex items-center justify-between"
          >
            {/* Left section */}
            <div className="flex items-center gap-3">
              <img
                src={author.image}
                alt={author.name}
                className="w-10 h-10 rounded-full object-cover"
              />
              <span className="text-sm font-medium">
                {author.name}
              </span>
            </div>

            {/* Follow button */}
            <button
              onClick={() => handleFollow(index)}
              className={`px-3 py-1 text-sm rounded-full border transition ${
                author.isFollowing
                  ? "bg-gray-100 text-gray-700"
                  : "bg-blue-600 text-white hover:bg-blue-700"
              }`}
            >
              {author.isFollowing ? "Unfollow" : "Follow"}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopSellers;
