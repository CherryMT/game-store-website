export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-[#06061f] to-[#0a0a2a] text-white py-16">
      <div className="max-w-[1200px] mx-auto flex gap-10">
        {/* LEFT */}
        <div className="flex-1">
          <img
            src="https://cdn5.f-cdn.com/contestentries/1447172/31145287/5bf719617d3d8_thumb900.jpg"
            className="w-[110px] mb-4"
          />
          <p className="text-gray-300 leading-6 w-[500px]">
            <strong>GAMER NETWORK</strong> is a website that shares games and tips
            for free...
          </p>
        </div>

        {/* RIGHT */}
        <div className="flex-1">
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-red-500">Home</a>
            <a href="#">DMCA</a>
            <a href="#">Privacy</a>
            <a href="#">Terms</a>
          </div>

          <p>👉 Like our <a className="text-sky-400">Fanpage</a></p>
          <p>👉 Join our <a className="text-sky-400">Group</a></p>
          <p>👉 Subscribe <a className="text-sky-400">YouTube</a></p>

          <p className="mt-4 text-sm">© 2022 TopGamePC</p>
        </div>
      </div>
    </footer>
  );
}
