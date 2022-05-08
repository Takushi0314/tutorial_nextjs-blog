import Image from "next/image";

export default function ImageComponent() {
  return (
    <div>
      <Image src="/image.jpg" height={300} width={300} alt="Your Name" />
    </div>
  );
}
