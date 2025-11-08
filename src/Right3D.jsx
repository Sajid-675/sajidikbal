// import { Canvas } from '@react-three/fiber'
// import { Suspense, useRef, useEffect } from 'react'
// import { OrbitControls, useGLTF } from '@react-three/drei'

// // Preload the model
// useGLTF.preload('/assets/dbsz_cc_goku_base.glb')

// function Model({ src }) {
//   const group = useRef()
//   const { scene } = useGLTF(src)

//   useEffect(() => {
//     if (!group.current) return

//     // ✅ Enable auto-updates for transforms
//     group.current.matrixAutoUpdate = true

//     // ✅ Position, rotation, and scale adjustments
//     group.current.position.set(0, -1.0, 0) // move up/down
//     group.current.rotation.set(0, 0, 0)    // front-facing
//     group.current.scale.set(0.8, 0.8, 0.8) // smaller or bigger

//   }, [scene])

//   return <primitive ref={group} object={scene} />
// }

// export default function Right3D() {
//   return (
//     <div style={{ width: '100%', height: '100%' }}>
//       <Canvas
//         camera={{
//           position: [0, 0, 1.5], // 🔥 straight front view (no tilt)
//           fov: 45
//         }}
//       >
//         {/* Lighting setup */}
//         <ambientLight intensity={1.2} />
//         <directionalLight position={[5, 5, 5]} intensity={1.5} />

//         {/* Suspense to handle async model loading */}
//         <Suspense fallback={<div style={{ color: 'white' }}>Loading 3D...</div>}>
//           <Model src={'/assets/dbsz_cc_goku_base.glb'} />
//         </Suspense>

//         {/* Disable rotation & zoom (fixed view) */}
//         <OrbitControls enablePan={false} enableZoom={false} enableRotate={false} />
//       </Canvas>
//     </div>
//   )
// }
