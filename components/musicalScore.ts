import { useScore } from 'react-native-vexflow';
import vexflow, { KeySignature, Stave } from 'vexflow';


interface musicalScoreProps {
  contextSize ?: {x: number, y: number},
  clef ?: string,
  timeSignature ?: string,
  keySignature ?: string

}

export default function musicalScore({
  contextSize = {x: 300, y: 300},
  clef = 'treble',
  timeSignature = '4/4',
  keySignature = 'C'

  }) {
  const [context] = useScore({
    contextSize: { x: contextSize.x, y: contextSize.y },
  });

  const stave = new Stave(0, 0, contextSize.y);
  stave.setContext(context);
  stave.addKeySignature(keySignature);

  // Add a clef and time signature.
  stave.addClef("treble")
  stave.addTimeSignature("4/4");
  stave.draw();

  return [context, stave];
}