import { AppCard } from './AppCard';
import { BsPhone } from 'react-icons/bs';
import { BiSolidBot } from 'react-icons/bi';
import { AppType, WebsiteType } from '../types/types';
import { PiHouse } from 'react-icons/pi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { WebsiteCard } from './WebsiteCard';

export const WorkContainer = () => {
    return (
        <div className="flex flex-col gap-16 w-full lg:max-w-6xl items-center">
            <div className="flex gap-16 justify-between items-center w-full">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="w-[1px] h-16 bg-white/50 mb-8"></div>
                    <h3
                        className="text-4xl font-thin opacity-50 tracking-[2rem]"
                        style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'upright',
                        }}
                    >
                        APPS
                    </h3>
                    <div className="w-[1px] h-16 bg-white/50"></div>
                </div>
                <div className="flex flex-col gap-4 w-full lg:max-w-6xl">
                    <AppCard
                        Icon={BsPhone}
                        title="Messenger App"
                        description="Send and receive messages to other users, either individually or in group chats."
                        type={AppType.Message}
                        link="https://messenger-clone-ebon.vercel.app"
                        mediaLinks={[
                            'chat_screen',
                            'chat_info',
                            'edit_info',
                            'group_chat',
                        ]}
                        techStack={[
                            'Next.js',
                            'NextAuth',
                            'TypeScript',
                            'TailwindCSS',
                            'Pusher.js',
                            'Prisma',
                            'MongoDB',
                        ]}
                    />
                    <AppCard
                        Icon={PiHouse}
                        title="Airbnb Clone"
                        description="Working clone of the popular web app"
                        type={AppType.Airbnb}
                        link="https://next13-airbnb-clone-psi.vercel.app"
                        mediaLinks={[
                            'home_screen',
                            'login',
                            'dates',
                            'property',
                        ]}
                        techStack={[
                            'Next.js',
                            'NextAuth',
                            'TypeScript',
                            'TailwindCSS',
                            'Prisma',
                            'MongoDB',
                        ]}
                    />
                    <AppCard
                        Icon={IoFastFoodOutline}
                        title="Restaurant Voting App"
                        description="Vote with friends about where to go to eat"
                        type={AppType.Vote}
                        link="https://sidekick-decide-app.vercel.app/"
                        mediaLinks={[
                            'choose_location',
                            'location_default',
                            'vote',
                            'change_vote',
                        ]}
                        techStack={[
                            'Next.js',
                            'Clerk',
                            'TypeScript',
                            'TailwindCSS',
                            'Pusher.js',
                            'Google Maps API',
                            'Prisma',
                            'PostgreSQL',
                            'Supabase',
                        ]}
                    />
                    <AppCard
                        Icon={BiSolidBot}
                        title="Sidekick ipsum generator"
                        description="AI generated filler text application for a branding agency"
                        type={AppType.Ipsum}
                        link="https://www.sidekick.agency/sidekick-ipsum"
                        mediaLinks={[
                            'choose_location',
                            'location_default',
                            'vote',
                            'change_vote',
                        ]}
                        techStack={[
                            'Vanilla Javascript',
                            'Axios',
                            'OpenAI',
                            'AWS',
                            'Webflow',
                        ]}
                    />
                </div>
            </div>
            <div className="flex gap-16 justify-between items-center w-full">
                <div className="flex flex-col gap-4 items-center justify-center">
                    <div className="w-[1px] h-16 bg-white/50 mb-8"></div>
                    <h3
                        className="text-4xl font-thin opacity-50 tracking-[2rem]"
                        style={{
                            writingMode: 'vertical-rl',
                            textOrientation: 'upright',
                        }}
                    >
                        WEBSITES
                    </h3>
                    <div className="w-[1px] h-16 bg-white/50"></div>
                </div>

                <div className="flex flex-col gap-4 w-full lg:max-w-6xl">
                    <WebsiteCard
                        type={WebsiteType.ecommerce}
                        title="Sendero Provisions Co."
                        description="Custom Shopify theme for a multi-million dollar clothing brand"
                        link="https://senderopc.com"
                    />
                    <WebsiteCard
                        type={WebsiteType.business}
                        title="Sidekick Creative Agency"
                        description="Webflow site with heavy emphasis on user experience built for a branding agency."
                        link="https://www.sidekick.agency"
                    />
                    <WebsiteCard
                        type={WebsiteType.business}
                        title="Centurion American"
                        description="Fully customized Wordpress CMS site for a multi-million dollar real estate development company. Utilizes text search and map filtering funcitonality."
                        link="https://www.sidekick.agency"
                    />
                    <WebsiteCard
                        type={WebsiteType.nonprofit}
                        title="Every Shelter"
                        description="Wordpress site for a nonprofit. Utilizes multiple donation and marketing integrations."
                        link="https://everyshelter.org"
                    />
                    <WebsiteCard
                        type={WebsiteType.ecommerce}
                        title="Dr. Gregory's Canine Joint Formula"
                        description="Custom Shopify theme for small business. Utilizes 3D modeling and animation."
                        link="https://caninejointsupplement.com"
                    />
                    <WebsiteCard
                        type={WebsiteType.business}
                        title="Old Bethany Venue"
                        description="Wordpress website for a popular wedding and event venue in Waco, Texas"
                        link="https://oldbethanyvenue.com"
                    />
                </div>
            </div>
        </div>
    );
};
