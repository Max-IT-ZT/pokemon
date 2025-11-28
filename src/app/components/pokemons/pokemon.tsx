import Image from "next/image";
type Pokemon = {
  name: string;
  url: string;
  key: number;
};

export default function Pokemon({ name, url, key }: Pokemon) {
  return (
    <li key={key}>
      <h3>{name}</h3>
      <Image src={url} width={150} height={150} alt={name} loading="lazy" />
    </li>
  );
}
