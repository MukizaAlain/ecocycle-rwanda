export interface User {
  name: string;
  email: string;
  avatar: string;
  role: 'user' | 'admin';
  plan: 'Basic' | 'Pro';
}

export interface Transaction {
  id: string;
  date: string;
  item: string;
  weight?: string;
  status: 'Completed' | 'Redeemed' | 'Processing' | 'Cancelled';
  points: number;
  type: 'pickup' | 'reward';
}

export interface Reward {
  id: string;
  title: string;
  provider: string;
  description: string;
  cost: number;
  image: string;
  color: string;
  category: 'Airtime' | 'Data' | 'Voucher';
}

export type Screen = 'landing' | 'auth' | 'dashboard' | 'schedule' | 'history' | 'rewards' | 'profile';