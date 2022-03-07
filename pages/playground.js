import dynamic from "next/dynamic";

function Playground() {
  const MapWithNoSSR = dynamic(() => import("../components/Beta/test.js"), {
    ssr: false,
  });

  return (
    <>
      <MapWithNoSSR />
    </>
  );
  return <div>test</div>;
}

export default Playground;

// const testMapNoSSR = dynamic(() => import("./test.js"), { ssr: false });
