import dynamic from "next/dynamic";

const Map = dynamic(() => import("../components/Map"), { ssr: false });

// import Map from "@/components/Map";

export default function HomePage() {
  return (
    <div>
      <h1>Hello from Next.js</h1>
      <Map />
    </div>
  );
}
