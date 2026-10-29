
export default function Navbar() {
  return (
    <header className="flex gap-4">
      <div className="logo">
        <h1>RI</h1>
      </div>

      <nav>
         <ul className="flex gap-4">
          <li><i class="fa-solid fa-home"></i> Home</li>
          <li><i class="fa-regular fa-user"></i>About</li>
          <li><i class="fa-solid fa-code"></i>Stack</li>
          <li><i class="fa-solid fa-hammer"></i>Works</li>
          <li><i class="fa-brands fa-servicestack"></i>Services</li>
          <li><i class="fa-regular fa-envelope"></i>Let's build</li>
         </ul>
      </nav>

    </header>
  )
}
