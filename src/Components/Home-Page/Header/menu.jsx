const menus = ["Home", "News", "Game", "Reviews", "Contact"] // declaring menu items

export default function Menu() {
  return (
    <nav>
      <ul className="flex gap-2">
        {menus.map(
          (
            item, // Duyệt qua từng menu item
          ) => (
            <li key={item}>
              <a
                href="#"
                className="block text-white font-bold text-[19px]
                         px-5 py-[38px]  text-center
                         hover:bg-red-700 transition hover:scale-104 hover:-translate-y-1"
              >
                {item}
              </a>
            </li>
          ),
        )}
      </ul>
    </nav>
  )
}
