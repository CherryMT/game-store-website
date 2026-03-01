import Logo from "./Logo"
import Menu from "./menu"
import Search from "./Search"

export default function Header({ onSearch }) {
  return (
    <header className="bg-[#0f1825] h-[100px]">
      <div className="max-w-[1100px] mx-auto h-full flex items-center justify-between px-4">
        <Logo />
        <Menu />
        <Search onSearch={onSearch} />
      </div>
    </header>
  )
}
