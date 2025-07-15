import { useEffect, useRef } from "react";
import styled from "styled-components";
import { drawCircle } from "./circle";

const App = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    // Get dimensions of the canvas
    canvas.width = canvas.clientWidth;
    canvas.height = canvas.clientHeight;

    const ctx = canvas.getContext("2d");

    if (ctx) {
      drawCircle(ctx, 100, 100, 50, "red");
      drawCircle(ctx, 350, 100, 50, "yellow");
      drawCircle(ctx, 600, 100, 50, "green");
    }
  }, []);

  return <Canvas ref={canvasRef} id="canvas"></Canvas>;
};

const Canvas = styled.canvas`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgb(246, 248, 253);
`;

export default App;
