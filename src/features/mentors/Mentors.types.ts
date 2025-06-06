export interface Mentors{
    _id: string,
    name: string,
    slug: {current: string},
    role: string,
    imageUrl: string
}

export interface MentorsProps{
    mentors: Mentors[]
}