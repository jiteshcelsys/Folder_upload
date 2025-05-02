import React, { useRef, useState } from 'react'

const VirtulaList = ({items, itemHeight, height}) =>{
    const [scroolTop, setScroolTop] = useState(0);
    const containerRef= useRef(null);

    const totalHeight = items.length * itemHeight;
    const startIndex= Math.floor(scroolTop / itemHeight);
    const visibleCount = Math.ceil(height / itemHeight);
    const endIndex= Math.min(startIndex + visibleCount, items.length);

    const visibleItems = items.slice(startIndex, endIndex);
    const offsetY = startIndex * itemHeight;
    const handleScroll = (e) => {
        setScroolTop(e.currentTarget.scrollTop);
      };
  return (
    <div
      ref={containerRef}
      onScroll={handleScroll}
      style={{ overflowY: "auto", height, border: "1px solid #ccc" }}
    >
      <div style={{ height: totalHeight, position: "relative" }}>
        <div
          style={{
            position: "absolute",
            top: offsetY,
            left: 0,
            right: 0,
          }}
        >
          {visibleItems.map((item, i) => (
            <div
              key={startIndex + i}
              style={{
                height: itemHeight,
                borderBottom: "1px solid #eee",
                padding: "8px",
              }}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default VirtulaList
