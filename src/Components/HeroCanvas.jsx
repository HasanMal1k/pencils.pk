import React, { useEffect, useRef, useState, useMemo } from 'react'
import { OrbitControls, useGLTF, PerspectiveCamera, Float } from '@react-three/drei'

function Model() {
  const model = useGLTF('/pencil/scene.gltf')
  
  return (
    <primitive
      rotation-y={Math.PI * 0.3}
      rotation-x={Math.PI * 0.8}
      position={[0, 0, 0]}
      scale={0.002}
      object={model.scene}
    />
  )
}

const Model2 = ({ position, rotation }) => {
  const { scene } = useGLTF('/pencil-red/scene.gltf')
  const clonedScene = useMemo(() => scene.clone(), [scene])
  
  return (
    <Float>
    <primitive
      rotation={rotation}
      position={position}
      scale={0.004}
      object={clonedScene}
    />
    </Float>
  )
}

function HeroCanvas() {
  const [mouse, setMouse] = useState({x: 0, y: 0})
  const [groupPosition, setGroupPosition] = useState({x: 0, y: 0})
  const pencil = useRef(null)
  
  useEffect(() => {
    const handleMouseEvent = (event) => {
      const rect = event.currentTarget.getBoundingClientRect();
      const x = ((event.clientX - rect.left) / rect.width) * 20 - 10;
      const y = -((event.clientY - rect.top) / rect.height) * 20 + 10;
      
      const newPosition = { x, y };
      setMouse(newPosition);
      setGroupPosition(newPosition);
      
      if (pencil.current) {
        pencil.current.rotation.z = -x * 0.1;
        pencil.current.rotation.x = y * 0.1;
      }
    };
    
    const canvas = document.querySelector('canvas');
    canvas.addEventListener('mousemove', handleMouseEvent);
    
    return () => {
      canvas.removeEventListener('mousemove', handleMouseEvent);
    };
  }, []);

  return (
    <>
      <PerspectiveCamera makeDefault position={[0, 5, 5]} />
      <OrbitControls enableZoom={false} />
      <ambientLight intensity={2} />
      <group ref={pencil} position={[groupPosition.x, groupPosition.y, 0]}>
        <Model />
      </group>
      
      <ambientLight intensity={2} position-x={7}/>

      <Model2 position={[1, 3, 3]} rotation={[Math.PI * 0.5, Math.PI * 0.5, Math.PI * 0.5]} />
    <Model2 position={[3, 2, -1]} rotation={[-Math.PI * 0.5, -Math.PI * 0.5, Math.PI * 0.5]} />
    <Model2 position={[-3, 1, -3]} rotation={[Math.PI * 0.25, -Math.PI * 0.3, Math.PI * 0.5]} />
    <Model2 position={[-4, -1, 2]} rotation={[-Math.PI * 0.4, Math.PI * 0.2, Math.PI * 0.5]} />
    <Model2 position={[-4, 3, 3]} rotation={[Math.PI * 0.6, -Math.PI * 0.5, Math.PI * 0.3]} />
    <Model2 position={[3, 4, 1]} rotation={[-Math.PI * 0.2, Math.PI * 0.4, Math.PI * 0.5]} />
    <Model2 position={[-2, 2, 4]} rotation={[Math.PI * 0.3, -Math.PI * 0.6, Math.PI * 0.4]} />
    <Model2 position={[4, 1, -2]} rotation={[-Math.PI * 0.5, Math.PI * 0.3, Math.PI * 0.6]} />
    <Model2 position={[2, -2, 3]} rotation={[Math.PI * 0.4, -Math.PI * 0.4, Math.PI * 0.2]} />
    <Model2 position={[-1, 4, -1]} rotation={[-Math.PI * 0.3, Math.PI * 0.5, Math.PI * 0.4]} />
    <Model2 position={[0, 3, -4]} rotation={[Math.PI * 0.5, -Math.PI * 0.2, Math.PI * 0.5]} />
    <Model2 position={[-3, -2, -2]} rotation={[-Math.PI * 0.6, Math.PI * 0.3, Math.PI * 0.3]} />
    <Model2 position={[4, 2, 2]} rotation={[Math.PI * 0.2, -Math.PI * 0.5, Math.PI * 0.6]} />

    </>
  )
}

export default HeroCanvas

useGLTF.preload('/pencil/scene.gltf')
useGLTF.preload('/black_pencil/scene.gltf')