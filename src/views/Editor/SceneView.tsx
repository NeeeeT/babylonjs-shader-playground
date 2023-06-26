import * as BABYLON from 'babylonjs';
import { useEffect } from 'react';

const createScene = () => {
  const engine = new BABYLON.Engine(
    document.querySelector('#babylonjs-canvas') as HTMLCanvasElement,
    true
  );
  const scene = new BABYLON.Scene(engine);
  const camera = new BABYLON.ArcRotateCamera(
    '',
    Math.PI / 2,
    Math.PI / 2,
    5.0,
    BABYLON.Vector3.Zero(),
    scene
  );
  const light = new BABYLON.DirectionalLight(
    '',
    new BABYLON.Vector3(0, -25, -25),
    scene
  );
  camera.attachControl(true);
  return { scene, engine, camera };
};

const SceneView = () => {

  useEffect(() => {
    const { scene, engine } = createScene();

    engine.runRenderLoop(() => {
      if (!scene) return;
      scene.render();
    });
    window.addEventListener('resize', () => {
      engine.resize();
    });

    const box = BABYLON.MeshBuilder.CreateBox('', {}, scene);
    
    return () => {
      scene.dispose();
      engine.dispose();
    };
  }, []);
  
  return (
    <div className="w-1/2 min-h-screen">
      <canvas
        id='babylonjs-canvas'
        className='w-full h-full'
      />
    </div>
  );
};

export default SceneView;