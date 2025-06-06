import teamMembers from "../data/team.json";
import Image from "next/image";

export interface SocialLink {
  platform: string;
  link: string;
}

export interface TeamMember {
  name: string;
  role: string;
  image: string;
  description: string;
  socialLinks: SocialLink[];
}

export default function TeamSection() {
  return (
    <section className="team bg-gray-900 py-12" id="team">
      <div className="container mx-auto px-4">
        <div className="section-header mb-8 text-center">
          <p className="text-sm text-gray-500">Team Member</p>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">
            Meet the Crew
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          {teamMembers.map(
            ({ description, image, name, role, socialLinks }) => (
              <div
                key={name}
                className="team__item overflow-hidden bg-black shadow-lg transition-transform hover:scale-105"
              >
                <div className="relative h-64 w-full">
                  <Image
                    src={image}
                    width={400}
                    height={400}
                    alt={`${name} Image`}
                    className="h-full w-full object-cover"
                  />
                </div>

                <div className="p-6">
                  <h4 className="text-2xl font-bold text-main">{name}</h4>
                  <p className="mt-1 text-gray-500">{role}</p>
                  <p className="mt-2 text-sm text-gray-600">{description}</p>

                  <div className="mt-4 flex space-x-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.platform}
                        href={social.link}
                        target="_blank"
                        rel="noreferrer"
                        className="text-2xl text-gray-500 hover:text-main"
                      >
                        {social.platform}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
