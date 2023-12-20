import { Hono } from 'hono';
import { getVersion } from '../../../utils/version';

const instanceV1 = new Hono();

instanceV1.get('/instance', (c) => {
  c.header('Cache-Control', 'max-age=604800, stale-while-revalidate=86400');
  const resp = {
    uri: 'log.lu',
    title: '不走老路',
    short_description: '',
    description: '',
    email: 'i@log.lu',
    version: getVersion(),
    urls: {
      streaming_api: 'wss://log.lu'
    },
    stats: {
      user_count: 1,
      status_count: 0,
      domain_count: 153
    },
    thumbnail: 'https://log.lu/packs/media/images/preview-6399aebd96ccf025654e2977454f168f.png',
    max_toot_chars: 500,
    poll_limits: {
      max_options: 5,
      max_option_chars: 100,
      min_expiration: 300,
      max_expiration: 2629746
    },
    languages: ['en'],
    registrations: true,
    approval_required: true,
    invites_enabled: false,
    configuration: {
      accounts: {
        max_featured_tags: 10
      },
      statuses: {
        max_characters: 500,
        max_media_attachments: 4,
        characters_reserved_per_url: 23,
        supported_mime_types: ['text/plain', 'text/markdown', 'text/html']
      },
      media_attachments: {
        supported_mime_types: [
          'image/jpeg',
          'image/png',
          'image/gif',
          'image/heic',
          'image/heif',
          'image/webp',
          'image/avif',
          'video/webm',
          'video/mp4',
          'video/quicktime',
          'video/ogg',
          'audio/wave',
          'audio/wav',
          'audio/x-wav',
          'audio/x-pn-wave',
          'audio/vnd.wave',
          'audio/ogg',
          'audio/vorbis',
          'audio/mpeg',
          'audio/mp3',
          'audio/webm',
          'audio/flac',
          'audio/aac',
          'audio/m4a',
          'audio/x-m4a',
          'audio/mp4',
          'audio/3gpp',
          'video/x-ms-asf'
        ],
        image_size_limit: 16777216,
        image_matrix_limit: 33177600,
        video_size_limit: 103809024,
        video_frame_rate_limit: 120,
        video_matrix_limit: 8294400
      },
      polls: {
        max_options: 5,
        max_characters_per_option: 100,
        min_expiration: 300,
        max_expiration: 2629746
      }
    },
    contact_account: {
      id: '110418093397652650',
      username: 'willin',
      acct: 'willin',
      display_name: 'Willin',
      locked: false,
      bot: false,
      discoverable: true,
      group: false,
      created_at: '2023-05-23T00:00:00.000Z',
      note: '<p>To be Willin is to be willing.</p>',
      url: 'https://log.lu/@willin',
      avatar:
        'https://log.lu/system/accounts/avatars/110/418/093/397/652/650/original/0ae353d623d3e906.jpg',
      avatar_static:
        'https://log.lu/system/accounts/avatars/110/418/093/397/652/650/original/0ae353d623d3e906.jpg',
      header:
        'https://log.lu/system/accounts/headers/110/418/093/397/652/650/original/dc7447505dd1a4b6.jpg',
      header_static:
        'https://log.lu/system/accounts/headers/110/418/093/397/652/650/original/dc7447505dd1a4b6.jpg',
      followers_count: 3,
      following_count: 2,
      statuses_count: 0,
      last_status_at: null,
      noindex: false,
      emojis: [],
      roles: [
        {
          id: '3',
          name: '站长',
          color: '#ff0063'
        }
      ],
      fields: []
    },
    rules: []
  };

  return c.json(resp);
});

export default instanceV1;
