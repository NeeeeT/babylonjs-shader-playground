import CodeInputs from './CodeInputs';
import SceneView from './SceneView';

const Editor = () => {
  return (
    <div className='w-full flex'>
      <CodeInputs/>
      <SceneView/>
    </div>
  );
};

export default Editor;