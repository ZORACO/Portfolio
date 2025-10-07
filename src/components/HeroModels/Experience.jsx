import {Canvas} from '@react-three/fiber'
import {OrbitControls} from '@react-three/drei'
import {useMediaQuery} from "react-responsive";
import {Space} from "./Space.jsx";


const Experience = () => {
    const isTablet = useMediaQuery( {query: '(max-width: 1024px)'})
    const isMobile = useMediaQuery( {query: '(max-width: 768px)'})
    return (
        <Canvas camera={{position : [0,0,15], fov:45 }}>
            <ambientLight intensity={2} color="1a1a40"/>
            <directionalLight position={[5,5,5]} intensity={2}/>

            <OrbitControls
                enablePan={false}
                enableZoom={!isTablet}
                maxDistance={25}
                minDistance={1}
                minPolarAngle={Math.PI / 10}
                maxPolarAngle={Math.PI}
            />
            <group
            scale={isMobile? 0.7 : 1}
            position={[0,-3.5,0]}
            rotation={[ 0 ,  Math.PI / 4 , 0]}
            >

            </group>
            <Space/>
        </Canvas>
    )
}
export default Experience
