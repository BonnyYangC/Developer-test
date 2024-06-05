import Image from "next/image";
const Card = ({
  text,
  image,
  onClick,
}: {
  text: string;
  image: string;
  onClick: () => void;
}) => {
  return (
    <a
      onClick={onClick}
      className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-green-100 visited:bg-purple-600"
    >
      <div className="space-y-6">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
          {text}
        </h5>
        <hr></hr>
        <Image
          className="mx-auto my-auto"
          alt=""
          src={image}
          width={70}
          height={70}
          priority
        />
      </div>
    </a>
  );
};

export default Card;
