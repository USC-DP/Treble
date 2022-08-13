import { StyleSheet, Text, View } from 'react-native';

import { useTranslation } from "react-i18next";
import '../IMLocalize';

import Vex, { Formatter, StaveNote, Voice } from 'vexflow';
import musicalScore from '../components/musicalScore';

import { NavigationProp as Props } from '../types';
import SelectButton from '../components/SelectButton';
import { Button } from 'react-native-paper';

export default function Testing({ navigation }: Props) {
  const { t } = useTranslation();

  const [context, stave] = musicalScore({ contextSize: { x: 300, y: 100 } });

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
    <View style={style.container}>
      <View>{context.render()}</View>
      <View style={style.buttonContainer}>
        <SelectButton text='A' />
        <SelectButton text='B' />
        <SelectButton text='C' />
        <SelectButton text='D' />
        <SelectButton text='E' />
        <SelectButton text='F' />
        <SelectButton text='G' />
      </View>

      <View style={style.buttonContainer}>
        <SelectButton text='#' />
        <SelectButton text='b' />
      </View>

      <View style={style.buttonContainer}>
        <SelectButton text='SUBMIT'></SelectButton>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'

  },

  buttonContainer: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginLeft: 25,
    marginRight: 25,
    marginTop: 25
  }
});