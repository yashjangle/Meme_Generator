import trollface from "../../public/images/Troll Face.png";

export default function Header() {
  return (
    <header className="header">
      <img src={trollface} alt="trollface" />
      <h1>Meme Generator</h1>
    </header>
  );
}
