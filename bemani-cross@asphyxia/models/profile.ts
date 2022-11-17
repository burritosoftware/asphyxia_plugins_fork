export interface Profile {
  collection: 'profile';
  gmz2022Phase: number;
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
export interface GMZ2022 {
  collection: 'gmz-2022';

  ldj: number;
  kfc: number;
  m32: number;
  mdx: number;
  rec: number;
  l44: number;
  pan: number;
  m39: number;

  ldj_kfc: number;
  kfc_m32: number;
  m32_mdx: number;
  mdx_rec: number;
  rec_l44: number;
  l44_pan: number;
  pan_m39: number;
  m39_ldj: number;

  ldj2: number;
  kfc2: number;
  m322: number;
  mdx2: number;
  rec2: number;
  l442: number;
  pan2: number;
  m392: number;
}