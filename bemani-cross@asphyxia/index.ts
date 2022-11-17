export function register() {

  R.Contributor("ovv");
  R.GameCode('BEMANICROSS');

  /*
  - LDJ: beatmania IIDX
  - KFC: SOUND VOLTEX
  - M32: GITADORA
  - MDX: DanceDanceRevolution
  - REC: DANCERUSH
  - L44: jubeat
  - PAN: ノスタルジア (Nostalgia)
  - M39: pop'n music
  */
  R.Config('event',{ type: 'string', options: ['None', 'X-Record', 'BEMANI Ichika Gochamaze Event 2022'], default: 'None', name: 'Event enabled', desc: ''});
  R.Config('ldj_plugin_name', { type: 'string', default: '', name: 'beatmania IIDX plugin directory name'});
  R.Config('kfc_plugin_name', { type: 'string', default: '', name: 'SOUND VOLTEX plugin directory name'});
  R.Config('m32_plugin_name', { type: 'string', default: '', name: 'GITADORA plugin directory name'});
  R.Config('mdx_plugin_name', { type: 'string', default: '', name: 'DanceDanceRevolution plugin directory name'});
  R.Config('rec_plugin_name', { type: 'string', default: '', name: 'DANCERUSH plugin directory name'});
  R.Config('l44_plugin_name', { type: 'string', default: '', name: 'jubeat plugin directory name'});
  R.Config('pan_plugin_name', { type: 'string', default: '', name: 'ノスタルジア (Nostalgia) plugin directory name'});
  R.Config('m39_plugin_name', { type: 'string', default: '', name: 'pop\n music plugin directory name'});
}
