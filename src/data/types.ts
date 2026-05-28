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
