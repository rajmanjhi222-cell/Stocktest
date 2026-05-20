export type Wallet = {
  playerId: string;
  balance: number;
  kycApproved: boolean;
};

const wallets = new Map<string, Wallet>();

function ensureWallet(playerId: string): Wallet {
  const existing = wallets.get(playerId);
  if (existing) return existing;
  const created: Wallet = { playerId, balance: 0, kycApproved: false };
  wallets.set(playerId, created);
  return created;
}

export function getWallet(playerId: string): Wallet {
  return ensureWallet(playerId);
}

export function addFunds(playerId: string, amount: number): Wallet {
  const wallet = ensureWallet(playerId);
  wallet.balance += amount;
  return wallet;
}

export function requestWithdrawal(playerId: string, amount: number): { accepted: boolean; reason?: string; wallet: Wallet } {
  const wallet = ensureWallet(playerId);
  if (!wallet.kycApproved) return { accepted: false, reason: "kyc_required", wallet };
  if (wallet.balance < amount) return { accepted: false, reason: "insufficient_balance", wallet };
  wallet.balance -= amount;
  return { accepted: true, wallet };
}

export function setKyc(playerId: string, approved: boolean): Wallet {
  const wallet = ensureWallet(playerId);
  wallet.kycApproved = approved;
  return wallet;
}
