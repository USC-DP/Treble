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

  const stave = new Stave(0, 0, contextSize.x);
  stave.setContext(context);
  stave.addKeySignature(keySignature);

  // Add a clef and time signature.
  stave.addClef(clef)
  stave.addTimeSignature(timeSignature);
  stave.draw();

  return [context, stave];
}