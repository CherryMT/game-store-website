export default function Search({ onSearch }) {
  return (
    <form
      id="search-form"
      className="flex items-center gap-2"
      onSubmit={(e) => e.preventDefault()}
    >
      <input
        type="search"
        placeholder="Search games..."
        className="h-[25px] w-[140px] rounded px-2"
        onChange={(e) => onSearch(e.target.value)}
      />
      <button className="text-white text-xl">🔍</button>
    </form>
  )
}
