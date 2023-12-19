import * as packagejson from '../../package.json';

// https://github.com/mastodon/mastodon/blob/main/CHANGELOG.md
export const MASTODON_API_VERSION = '4.2.1';

export const LOGLU_VERSION = packagejson.version;

export function getVersion(): string {
  return `${MASTODON_API_VERSION} (compatible; Log-Lu ${LOGLU_VERSION})`;
}
