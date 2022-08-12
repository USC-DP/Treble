import { StyleSheet, Text, View } from 'react-native';

import { useTranslation } from "react-i18next";
import './IMLocalize';

import Vex, {Formatter, StaveNote, Voice } from 'vexflow';
import musicalScore from './components/musicalScore';


export default function App() {
  const { t } = useTranslation();

  const [context, stave] = musicalScore({keySignature: 'C'});

  const notes = [
    // A quarter-note C.
    new StaveNote({ keys: ["c/4"], duration: "q" }),

    // A quarter-note D.
    new StaveNote({ keys: ["d/4"], duration: "q" }),

    // A quarter-note rest. Note that the key (b/4) specifies the vertical
    // position of the rest.
    new StaveNote({ keys: ["b/4"], duration: "qr" }),

    // A C-Major chord.
    new StaveNote({ keys: ["c/4", "e/4", "g/4"], duration: "q" }),
  ];
  const voice = new Voice({ num_beats: 4, beat_value: 4 });
  voice.addTickables(notes);
  Formatter.FormatAndDraw(context, stave, notes);


  return (
    <View>
      <View>{context.render()}</View>
      <Text>Test</Text>
    </View>
  );
}