import { Hono } from 'hono';
import { LOGLU_VERSION } from '../../utils/version';

const nodeinfo21 = new Hono();

nodeinfo21.get('/2.1', (c) => {
  const resp = {
    version: '2.0',
    software: {
      name: 'loglu',
      version: LOGLU_VERSION,
      repository: 'https://github.com/willin/log-lu'
    },
    protocols: ['activitypub'],
    services: { outbound: [], inbound: [] },
    usage: {
      users: {
        total: 1,
        activeMonth: 1,
        activeHalfyear: 1
      },
      localPosts: 0
    },
    openRegistrations: false,
    metadata: {}
  };
  return c.json(resp);
});

export default nodeinfo21;

// {
//   metadata: {
//     accountActivationRequired: false,
//     features: [
//       'pleroma_api',
//       'mastodon_api',
//       'mastodon_api_streaming',
//       'polls',
//       'v2_suggestions',
//       'pleroma_explicit_addressing',
//       'shareable_emoji_packs',
//       'multifetch',
//       'pleroma:api/v1/notifications:include_types_filter',
//       'editing',
//       'quote_posting',
//       'blockers_visible',
//       'media_proxy',
//       'chat',
//       'shout',
//       'relay',
//       'pleroma_emoji_reactions',
//       'pleroma_custom_emoji_reactions',
//       'pleroma_chat_messages',
//       'exposable_reactions',
//       'profile_directory',
//       'pleroma:get:main/ostatus'
//     ],
//     federation: {
//       enabled: true,
//       exclusions: false,
//       mrf_hashtag: {
//         federated_timeline_removal: [],
//         reject: [],
//         sensitive: ['nsfw']
//       },
//       mrf_object_age: {
//         actions: ['delist', 'strip_followers'],
//         threshold: 604800
//       },
//       mrf_policies: ['ObjectAgePolicy', 'TagPolicy', 'HashtagPolicy', 'HashtagPolicy'],
//       quarantined_instances: [],
//       quarantined_instances_info: {
//         quarantined_instances: {}
//       }
//     },
//     fieldsLimits: {
//       maxFields: 10,
//       maxRemoteFields: 20,
//       nameLength: 512,
//       valueLength: 2048
//     },
//     invitesEnabled: false,
//     mailerEnabled: false,
//     nodeDescription: '面条实验室,折腾些啥玩意',
//     nodeName: '面条实验室',
//     pollLimits: {
//       max_expiration: 31536000,
//       max_option_chars: 200,
//       max_options: 20,
//       min_expiration: 0
//     },
//     postFormats: ['text/plain', 'text/html', 'text/markdown', 'text/bbcode'],
//     private: false,
//     restrictedNicknames: [
//       '.well-known',
//       '~',
//       'about',
//       'activities',
//       'api',
//       'auth',
//       'check_password',
//       'dev',
//       'friend-requests',
//       'inbox',
//       'internal',
//       'main',
//       'media',
//       'nodeinfo',
//       'notice',
//       'oauth',
//       'objects',
//       'ostatus_subscribe',
//       'pleroma',
//       'proxy',
//       'push',
//       'registration',
//       'relay',
//       'settings',
//       'status',
//       'tag',
//       'user-search',
//       'user_exists',
//       'users',
//       'web',
//       'verify_credentials',
//       'update_credentials',
//       'relationships',
//       'search',
//       'confirmation_resend',
//       'mfa'
//     ],
//     roles: {
//       admin: [
//         'users_read',
//         'users_manage_invites',
//         'users_manage_activation_state',
//         'users_manage_tags',
//         'users_manage_credentials',
//         'users_delete',
//         'messages_read',
//         'messages_delete',
//         'instances_delete',
//         'reports_manage_reports',
//         'moderation_log_read',
//         'announcements_manage_announcements',
//         'emoji_manage_emoji',
//         'statistics_read'
//       ],
//       moderator: ['messages_delete', 'reports_manage_reports']
//     },
//     skipThreadContainment: true,
//     staffAccounts: ['https://miantiao.me/users/chi'],
//     suggestions: {
//       enabled: false
//     },
//     uploadLimits: {
//       avatar: 2000000,
//       background: 8000000,
//       banner: 8000000,
//       general: 16000000
//     }
//   },
//   openRegistrations: false,
//   protocols: ['activitypub'],
//   services: {
//     inbound: [],
//     outbound: []
//   },
//   software: {
//     name: 'pleroma',
//     repository: 'https://git.pleroma.social/pleroma/pleroma',
//     version: '2.6.0'
//   },
//   usage: {
//     localPosts: 95,
//     users: {
//       activeHalfyear: 1,
//       activeMonth: 1,
//       total: 1
//     }
//   },
//   version: '2.1'
// };
