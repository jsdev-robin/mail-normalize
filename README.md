# mail-normalize

A lightweight Node.js library to normalize and sanitize email addresses.  
Handles Gmail and Hotmail/Outlook aliases and validates email format.

## Installation

```bash
npm install mail-normalize
# or
pnpm add mail-normalize
yarn add mail-normalize

```

## Usage

```typescript
import { normalizeEmail } from 'mail-normalize';

const email1 = normalizeEmail('John.Doe+test@gmail.com');
// Returns: 'johndoe@gmail.com'

const email2 = normalizeEmail('  Alice@Outlook.com  ');
// Returns: 'alice@hotmail.com'

const email3 = normalizeEmail('user@custom-domain.com');
// Returns: 'user@custom-domain.com'

const email4 = normalizeEmail('invalid-email');
// Returns: null
```
