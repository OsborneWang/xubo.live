export type Profile = {
  name: string;
  status: 'online' | 'offline' | 'busy';
  domain: string;
  title: string;
  tagline: string;
  summary: string;
  roles: string[];
  interests: string[];
  now: [string, string][];
};

export type Service = {
  name: string;
  url?: string;
  description: string;
  status: 'online' | 'standby';
  label: string;
};

export type FeedItem = {
  date: string;
  text: string;
};
