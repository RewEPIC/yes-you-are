import Image from 'next/image';
import React, { useEffect, useRef, useState } from 'react';

/**
 * Props for the MaskedClickableImage component
 */
interface MaskedClickableImageProps {
  /** URL or path to the background image */
  backgroundImage: string;
  /** Unique ID for the SVG mask (optional, will be auto-generated if not provided) */
  maskId?: string;
  /** SVG path definition for the clickable area (optional if autoDetectMask is true) */
  maskPath?: string;
  /** Set to true to automatically detect non-transparent areas in image */
  autoDetectMask?: boolean;
  /** Color to fill the mask (with optional opacity) */
  fillColor?: string;
  /** Color for the mask outline */
  strokeColor?: string;
  /** Width of the mask outline */
  strokeWidth?: number;
  /** Width of the component */
  width?: number;
  /** Height of the component */
  height?: number;
  /** Additional CSS classes */
  className?: string;
  /** Callback when mask is clicked (receives x, y coordinates) */
  onMaskClick?: (x: number, y: number) => void;
  /** Callback when clicking outside the mask (optional) */
  onOutsideClick?: (x: number, y: number) => void;
  /** Optional content to render inside the component */
  children?: React.ReactNode;
  /** Threshold for alpha detection (0-255), defaults to 128 */
  alphaThreshold?: number;
}

/**
 * MaskedClickableImage - A reusable component that allows clicks only on specific masked areas
 */
export default function MaskedClickableImage({
  backgroundImage,
  maskId,
  maskPath,
  autoDetectMask = false,
  fillColor = "rgba(255,165,0,0.3)",
  strokeColor = "orange",
  strokeWidth = 2,
  width = 300,
  height = 300,
  className = "",
  onMaskClick,
  onOutsideClick,
  children,
  alphaThreshold = 128
}: Readonly<MaskedClickableImageProps>) {
  const containerRef = useRef<HTMLButtonElement>(null);
  const svgRef = useRef<SVGSVGElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);
  
  // Generate a unique ID if not provided
  const uniqueMaskId = maskId ?? `mask-${Math.random().toString(36).substring(2, 9)}`;
  
  // State for auto-generated mask path
  const [autoMaskPath, setAutoMaskPath] = useState<string | null>(null);
  const [isImageLoaded, setIsImageLoaded] = useState<boolean>(false);
  
  // Auto-detect mask from image transparency
  useEffect(() => {
    if (!autoDetectMask || !canvasRef.current || !imageRef.current) return;
    
    const img = imageRef.current;
    
    // When image loads, process it to find non-transparent regions
    const processImage = () => {
      const canvas = canvasRef.current;
      if (!canvas || !img) return;
      
      // Set canvas dimensions to match image
      canvas.width = img.naturalWidth;
      canvas.height = img.naturalHeight;
      
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      
      // Draw image to canvas to access pixel data
      ctx.drawImage(img, 0, 0);
      
      // Get image data
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const { data, width: imgWidth, height: imgHeight } = imageData;
      
      // Simple edge detection for non-transparent pixels
      // This is a basic approach - for production, a more sophisticated algorithm would be better
      const points: { x: number, y: number }[] = [];
      const visitedPixels = new Set<string>();
      
      // Sample pixels at intervals for efficiency
      const sampleInterval = Math.max(1, Math.floor(Math.min(imgWidth, imgHeight) / 30));
      
      // Find edge pixels (non-transparent pixels with at least one transparent neighbor)
      for (let y = 0; y < imgHeight; y += sampleInterval) {
        for (let x = 0; x < imgWidth; x += sampleInterval) {
          const idx = (y * imgWidth + x) * 4;
          const alpha = data[idx + 3];
          
          if (alpha >= alphaThreshold) {
            // Check if this is an edge pixel by looking at neighbors
            let isEdge = false;
            
            // Check the 4 adjacent pixels
            const directions = [
              { dx: -sampleInterval, dy: 0 },
              { dx: sampleInterval, dy: 0 },
              { dx: 0, dy: -sampleInterval },
              { dx: 0, dy: sampleInterval }
            ];
            
            for (const { dx, dy } of directions) {
              const nx = x + dx;
              const ny = y + dy;
              
              if (nx >= 0 && nx < imgWidth && ny >= 0 && ny < imgHeight) {
                const neighborIdx = (ny * imgWidth + nx) * 4;
                const neighborAlpha = data[neighborIdx + 3];
                
                if (neighborAlpha < alphaThreshold) {
                  isEdge = true;
                  break;
                }
              } else {
                // Treat pixels at image boundaries as edges
                isEdge = true;
              }
            }
            
            if (isEdge) {
              const pixelKey = `${x},${y}`;
              if (!visitedPixels.has(pixelKey)) {
                visitedPixels.add(pixelKey);
                points.push({ x, y });
              }
            }
          }
        }
      }
      
      // If we have edge points, create an SVG path
      if (points.length > 0) {
        // Scale points to match the component dimensions
        const scaleX = width / imgWidth;
        const scaleY = height / imgHeight;
        
        // Simple approach: create a path by connecting points
        // For a more refined approach, consider using a convex hull algorithm
        points.sort((a, b) => {
          // Sort by angle relative to center
          const centerX = imgWidth / 2;
          const centerY = imgHeight / 2;
          const angleA = Math.atan2(a.y - centerY, a.x - centerX);
          const angleB = Math.atan2(b.y - centerY, b.x - centerX);
          return angleA - angleB;
        });
        
        // Create SVG path
        let pathData = '';
        if (points.length > 0) {
          // Start with the first point
          pathData = `M${points[0].x * scaleX},${points[0].y * scaleY}`;
          
          // Connect to subsequent points
          for (let i = 1; i < points.length; i++) {
            pathData += ` L${points[i].x * scaleX},${points[i].y * scaleY}`;
          }
          
          // Close the path
          pathData += ' Z';
        }
        
        setAutoMaskPath(pathData);
      }
    };
    
    if (img.complete) {
      processImage();
      setIsImageLoaded(true);
    } else {
      img.onload = () => {
        processImage();
        setIsImageLoaded(true);
      };
    }
  }, [autoDetectMask, width, height, alphaThreshold]);
  
  // Determine which mask path to use
  const effectiveMaskPath = maskPath ?? autoMaskPath ?? "";
  
  // Function to check if point is inside the mask path
  const isPointInMask = (x: number, y: number): boolean => {
    const svg = svgRef.current;
    if (!svg) return false;
    
    // Get the mask path element
    const maskPathElement = svg.querySelector('path.mask-path') as SVGPathElement | null;
    if (!maskPathElement) return false;
    
    // Use built-in SVG point-in-path testing
    const point = svg.createSVGPoint();
    point.x = x;
    point.y = y;
    
    return maskPathElement.isPointInFill(point);
  };
  
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    // If no mask path is available yet, do nothing
    if (!effectiveMaskPath) return;
    
    // Get click position relative to the container
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    
    // Check if click is inside the mask path
    if (isPointInMask(x, y)) {
      onMaskClick?.(x, y);
    } else {
      onOutsideClick?.(x, y);
    }
  };
  
  return (
    <button 
      ref={containerRef}
      className={`relative cursor-pointer ${className}`}
      style={{ width, height }}
      onClick={handleClick}
    >
      {/* Background image - non-clickable */}
      <Image 
        width={width}
        height={height}
        ref={imageRef}
        src={backgroundImage} 
        alt="Background" 
        className="absolute top-0 left-0 w-full h-full object-cover pointer-events-none"
        crossOrigin="anonymous" // Required for processing in canvas
      />
      
      {/* Hidden canvas for image processing */}
      {autoDetectMask && (
        <canvas 
          ref={canvasRef}
          className="hidden"
        />
      )}
      
      {/* SVG mask - only this should be clickable */}
      {(effectiveMaskPath || !autoDetectMask || isImageLoaded) && (
        <svg 
          ref={svgRef}
          className="absolute top-0 left-0 w-full h-full" 
          viewBox={`0 0 ${width} ${height}`}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <mask id={uniqueMaskId}>
              <rect width="100%" height="100%" fill="black" />
              <path 
                className="mask-definition"
                d={effectiveMaskPath}
                fill="white"
              />
            </mask>
          </defs>
          
          {/* Visible mask shape */}
          <path 
            className="mask-path"
            d={effectiveMaskPath}
            fill={fillColor}
            stroke={strokeColor}
            strokeWidth={strokeWidth}
          />
          
          {/* Invisible clickable area - exactly matches the mask */}
          <rect 
            width="100%" 
            height="100%" 
            fill="transparent" 
            mask={`url(#${uniqueMaskId})`}
          />
        </svg>
      )}
      
      {/* Loading indicator when auto-detecting mask */}
      {autoDetectMask && !isImageLoaded && (
        <div className="absolute inset-0 flex items-center justify-center bg-gray-100 bg-opacity-50">
          <div className="text-blue-600">Detecting mask areas...</div>
        </div>
      )}
      
      {/* Render any children */}
      {children}
    </button>
  );
};
