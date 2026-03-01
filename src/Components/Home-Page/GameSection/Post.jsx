function Post({ img, title }) {
  return (
    <li className="post-item">
      <img
        src={img}
        alt={title}
        title={title}
        className="w-full h-[150px] object-cover rounded-lg"
      />
      <div className="post-body mt-2">
        <h3>
          <a
            href="#"
            className="text-white text-lg hover:text-red-600 transition"
          >
            {title}
          </a>
        </h3>
      </div>
    </li>
  );
}
