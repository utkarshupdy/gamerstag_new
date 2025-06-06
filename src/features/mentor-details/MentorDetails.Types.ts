interface MentorDetails {
  _id: string;
  name: string;
  slug: { current: string };
  role: string;
  imageUrl: string;
  thoughts: string;
  bio: string;
  skills: string[];
  socialMedia: {
    platform: string;
    url: string;
  }[];
  comments: {
    comment: string
  }[];
}

export interface MentorDetailsProps {
  mentor: MentorDetails;
}

export interface SocialMediaIcons {
  [key: string]: JSX.Element;
}
