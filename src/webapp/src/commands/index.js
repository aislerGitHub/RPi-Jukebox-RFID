const commands = {
  musicCoverByFilenameAsBase64: {
    _package: 'music_cover_art',
    plugin: 'ctrl',
    method: 'get_by_filename_as_base64',
  },
  directoryTreeOfAudiofolder: {
    _package: 'player',
    plugin: 'ctrl',
    method: 'list_all_dirs',
  },
  'mpd.get_albums': {
    _package: 'player',
    plugin: 'mpd',
    method: 'get_albums',
  },
  'mpd.get_album_tracks': {
    _package: 'player',
    plugin: 'mpd',
    method: 'get_album_tracks',
    argKeys: ['album_artist', 'album']
  },
  getSongByUrl: {
    _package: 'player',
    plugin: 'ctrl',
    method: 'get_song_by_url',
    argKeys: ['song_url']
  },
  'mpd.get_files': {
    _package: 'player',
    plugin: 'mpd',
    method: 'get_files',
    argKeys: ['path']
  },
  cardsList: {
    _package: 'cards',
    plugin: 'list_cards',
  },
  registerCard: {
    _package: 'cards',
    plugin: 'register_card',
  },
  deleteCard: {
    _package: 'cards',
    plugin: 'delete_card',
  },
  playerstatus: {
    _package: 'player',
    plugin: 'ctrl',
    method: 'playerstatus'
  },

  // Player Actions
  play: {
    _package: 'player',
    plugin: 'ctrl',
    method: 'play',
  },
  pause: {
    _package: 'player',
    plugin: 'ctrl',
    method: 'pause',
  },
  previous: {
    _package: 'player',
    plugin: 'ctrl',
    method: 'prev',
  },
  next: {
    _package: 'player',
    plugin: 'ctrl',
    method: 'next',
  },
  shuffle: {
    _package: 'player',
    plugin: 'ctrl',
    method: 'shuffle',
  },
  repeat: {
    _package: 'player',
    plugin: 'ctrl',
    method: 'repeat',
  },
  seek: {
    _package: 'players',
    plugin: 'seek',
  },
  'mpd.play_uri': {
    _package: 'player',
    plugin: 'mpd',
    method: 'play_uri',
    argKeys: ['uri']
  },

  // Volume
  setVolume: {
    _package: 'volume',
    plugin: 'ctrl',
    method: 'set_volume',
  },
  getVolume: {
    _package: 'volume',
    plugin: 'ctrl',
    method: 'get_volume',
  },
  getMaxVolume: {
    _package: 'volume',
    plugin: 'ctrl',
    method: 'get_soft_max_volume',
  },
  setMaxVolume: {
    _package: 'volume',
    plugin: 'ctrl',
    method: 'set_soft_max_volume',
  },
  change_volume: {
    _package: 'volume',
    plugin: 'ctrl',
    method: 'change_volume',
    argKeys: ['step'],
  },
  toggleMuteVolume: {
    _package: 'volume',
    plugin: 'ctrl',
    method: 'mute',
  },

  // Timers
  'timer_fade_volume.cancel': {
    _package: 'timers',
    plugin: 'timer_fade_volume',
    method: 'cancel',
  },
  'timer_fade_volume.get_state': {
    _package: 'timers',
    plugin: 'timer_fade_volume',
    method: 'get_state',
  },
  'timer_fade_volume': {
    _package: 'timers',
    plugin: 'timer_fade_volume',
    method: 'start',
    argKeys: ['wait_seconds'],
  },
  'timer_shutdown.cancel': {
    _package: 'timers',
    plugin: 'timer_shutdown',
    method: 'cancel',
  },
  'timer_shutdown.get_state': {
    _package: 'timers',
    plugin: 'timer_shutdown',
    method: 'get_state',
  },
  'timer_shutdown': {
    _package: 'timers',
    plugin: 'timer_shutdown',
    method: 'start',
    argKeys: ['wait_seconds'],
  },
  'timer_stop_player.cancel': {
    _package: 'timers',
    plugin: 'timer_stop_player',
    method: 'cancel',
  },
  'timer_stop_player.get_state': {
    _package: 'timers',
    plugin: 'timer_stop_player',
    method: 'get_state',
  },
  'timer_stop_player': {
    _package: 'timers',
    plugin: 'timer_stop_player',
    method: 'start',
    argKeys: ['wait_seconds'],
  },


  // Host
  getAutohotspotStatus: {
    _package: 'host',
    plugin: 'get_autohotspot_status',
  },
  startAutohotspot: {
    _package: 'host',
    plugin: 'start_autohotspot',
  },
  stopAutohotspot: {
    _package: 'host',
    plugin: 'stop_autohotspot',
  },
  getIpAddress: {
    _package: 'host',
    plugin: 'get_ip_address',
  },
  getDiskUsage: {
    _package: 'host',
    plugin: 'get_disk_usage',
  },
  reboot: {
    _package: 'host',
    plugin: 'reboot',
  },
  shutdown: {
    _package: 'host',
    plugin: 'shutdown',
  },
  say_my_ip: {
    _package: 'host',
    plugin: 'say_my_ip',
    argKeys: ['option'],
  },
};

export default commands;
