/*
 * SPDX-FileCopyrightText: syuilo and other misskey contributors
 * SPDX-License-Identifier: AGPL-3.0-only
 */

const map: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  // eslint-disable-next-line quotes
  "'": '&apos;'
};

const beginingOfCDATA = '<![CDATA[';
const endOfCDATA = ']]>';

function escapeValue(x: string): string {
  let insideOfCDATA = false;
  let builder = '';
  for (let i = 0; i < x.length; ) {
    if (insideOfCDATA) {
      if (x.slice(i, i + beginingOfCDATA.length) === beginingOfCDATA) {
        insideOfCDATA = true;
        i += beginingOfCDATA.length;
      } else {
        builder += x[i++];
      }
    } else {
      if (x.slice(i, i + endOfCDATA.length) === endOfCDATA) {
        insideOfCDATA = false;
        i += endOfCDATA.length;
      } else {
        const b = x[i++];
        builder += map[b] || b;
      }
    }
  }
  return builder;
}

function escapeAttribute(x: string): string {
  return Object.entries(map).reduce((a, [k, v]) => a.replaceAll(k, v), x);
}

export function toXRD(
  ...x: { element: string; value?: string; attributes?: Record<string, string> }[]
): string {
  return `<?xml version="1.0" encoding="UTF-8"?><XRD xmlns="http://docs.oasis-open.org/ns/xri/xrd-1.0">${x
    .map(
      ({ element, value, attributes }) =>
        `<${Object.entries((typeof attributes === 'object' && attributes) || {}).reduce(
          (a, [k, v]) => `${a} ${k}="${escapeAttribute(v)}"`,
          element
        )}${typeof value === 'string' ? `>${escapeValue(value)}</${element}` : '/'}>`
    )
    .reduce((a, c) => a + c, '')}</XRD>`;
}

export const jrd = 'application/jrd+json' as const;
export const xrd = 'application/xrd+xml' as const;
