interface MemberDetails {
  _id: string;
  name: string;
  slug: { current: string };
  role: string;
  headline: string
  education: string;
  imageUrl: string;
  quote: string;
  bio: string;
  capabilities: string;
  skills: string[];
  socialMedia: {
    platform: string;
    url: string;
  }[];
  comments: {
    comment: string
  }[];
}

export interface MemberDetailsProps {
  member: MemberDetails;
}

export interface SocialMediaIcons {
  [key: string]: JSX.Element;
}
