export function normalizeEmail(email: string): string | null {
  if (!email) return null;

  const trimmed = email.trim().toLowerCase();
  const parts = trimmed.split('@');
  if (parts.length !== 2) return null;

  let [local, domain] = parts;
  domain = domain.toLowerCase();

  const gmailDomains = new Set(['gmail.com', 'googlemail.com']);
  const hotmailDomains = new Set(['hotmail.com', 'live.com', 'outlook.com']);

  if (gmailDomains.has(domain)) {
    local = local.replace(/\./g, '');
    const plusIndex = local.indexOf('+');
    if (plusIndex !== -1) local = local.slice(0, plusIndex);
    domain = 'gmail.com';
  } else if (hotmailDomains.has(domain)) {
    const plusIndex = local.indexOf('+');
    if (plusIndex !== -1) local = local.slice(0, plusIndex);
    domain = 'hotmail.com';
  }

  const emailRegex = /^[a-z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
  if (!emailRegex.test(`${local}@${domain}`)) return null;

  return `${local}@${domain}`;
}
