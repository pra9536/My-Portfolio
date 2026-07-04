// "use client"

// import { useEffect, useState } from "react";

// export function CustomCursor() {
//   const [pos, setPos] = useState({ x: 0, y: 0 })
//   const [visible, setVisible] = useState(false)

//   useEffect(() => {
//     const move = (e: MouseEvent) => {
//       const point = { x: e.clientX, y: e.clientY }
//       setPos(point)
//       setVisible(true)
//     }

//     const hide = () => setVisible(false)
//     const show = () => setVisible(true)

//     window.addEventListener("mousemove", move)
//     window.addEventListener("mouseleave", hide)
//     window.addEventListener("mouseenter", show)

//     return () => {
//       window.removeEventListener("mousemove", move)
//       window.removeEventListener("mouseleave", hide)
//       window.removeEventListener("mouseenter", show)
//     }
//   }, [])

//   if (!visible) return null

//   return (
//     <>
//       {/* ===== MAIN CURSOR ===== */}
//       <Arrow x={pos.x} y={pos.y} size={28} opacity={1} z={9999} />
//     </>
//   )
// }

// /* ================= ARROW SHAPE ================= */

// function Arrow({
//   x,
//   y,
//   size,
//   opacity,
//   z,
// }: {
//   x: number
//   y: number
//   size: number
//   opacity: number
//   z: number
// }) {
//   return (
//     <div
//       className="fixed pointer-events-none transition-transform duration-75 ease-out"
//       style={{
//         transform: `translate(${x}px, ${y}px)`,
//         width: size,
//         height: size,
//         opacity,
//         zIndex: z,
//       }}
//     >
//       {/* Triangle cursor */}
//       <div
//         style={{
//           width: 0,
//           height: 0,
//           borderLeft: `${size/2}px solid transparent`,
//           borderRight: `${size/2}px solid transparent`,
//           borderBottom: `${size}px solid #dc2626`,
//           position: "absolute",
//           filter: "drop-shadow(0 0 2px rgba(0,0,0,0.5))",
//         }}
//       />
//     </div>
//   )
// }