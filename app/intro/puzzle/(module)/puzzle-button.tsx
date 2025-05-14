'use client';

import Konva from 'konva';
import { useEffect, useRef, useState } from 'react';
import { Image as KonvaImage, Layer, Stage } from 'react-konva';

type PuzzleButtonProps = {
  src: string;
  width?: number;
  height?: number;
  onClick?: () => void;
};

export default function KonvaPuzzleButton({
  src,
  width = 200,
  height = 200,
  onClick,
}: PuzzleButtonProps) {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const imageRef = useRef<Konva.Image>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Load image and draw to offscreen canvas
  useEffect(() => {
    const img = new window.Image();
    img.crossOrigin = 'Anonymous';
    img.src = src;
    img.onload = () => {
      setImage(img);

      const offCanvas = document.createElement('canvas');
      offCanvas.width = width;
      offCanvas.height = height;
      const ctx = offCanvas.getContext('2d');
      if (ctx) {
        ctx.clearRect(0, 0, width, height);
        ctx.drawImage(img, 0, 0, width, height);
        canvasRef.current = offCanvas;
      }
    };
  }, [src, width, height]);

  const handleClick = () => {
    const stage = imageRef.current?.getStage();
    const pointer = stage?.getPointerPosition();
    if (!pointer || !canvasRef.current) return;

    const ctx = canvasRef.current.getContext('2d');
    if (!ctx) return;

    const pixel = ctx.getImageData(pointer.x, pointer.y, 1, 1).data;
    const alpha = pixel[3];

    if (alpha > 0) {
      onClick?.();
    }
  };

  return (
    <Stage width={width} height={height}>
      <Layer>
        {image && (
          <KonvaImage
            ref={imageRef}
            image={image}
            width={width}
            height={height}
            onClick={handleClick}
            onTap={handleClick}
            listening
          />
        )}
      </Layer>
    </Stage>
  );
}
