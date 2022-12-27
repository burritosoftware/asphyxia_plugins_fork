export interface XRecord {
  collection: 'x-record';

  lm: number;
  vm: number;
}

/* 

いちかのごちゃまぜMix UP！ (Ichika no gochamaze Mix UP!)
- LDJ: beatmania IIDX
- KFC: SOUND VOLTEX
- M32: GITADORA
- MDX: DanceDanceRevolution
- REC: DANCERUSH
- L44: jubeat
- PAN: ノスタルジア (Nostalgia)
- M39: pop'n music

*/
export interface GMZ2022_Log {
  collection: 'gmz-2022-log';
  mode: string;
  points: number;
  start_date: number;
}
