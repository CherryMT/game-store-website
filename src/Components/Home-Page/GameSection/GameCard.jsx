export default function GameCard({ img, title }) {
  return (
    <li className="w-[292px] h-[290px] px-1">
      <img
        src={img}
        alt={title}
        className="w-[263px] h-[150px] rounded"
      />
      <h3 className="mt-2">
        <a
          href="#"
          className="text-white uppercase text-lg hover:text-red-700"
        >
          {title}
        </a>
      </h3>
    </li>
  );
}
