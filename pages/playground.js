import dynamic from "next/dynamic";

function test() {
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

export default test;

// const testMapNoSSR = dynamic(() => import("./test.js"), { ssr: false });
