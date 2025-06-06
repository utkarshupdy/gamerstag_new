export interface Members {
  _id: string;
  name: string;
  imageUrl: string;
  slug: { current: string };
  role: string;
  socialMedia: {
    platform: string;
    url: string;
  }[];
}

export interface MembersProps {
  members: Members[];
}

export interface SocialMediaIcons {
  [key: string]: JSX.Element;
}
