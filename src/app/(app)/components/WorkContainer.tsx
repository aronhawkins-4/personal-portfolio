import { AppCard } from './AppCard';
import { BsPhone } from 'react-icons/bs';
import { BiSolidBot } from 'react-icons/bi';
import { AppType, WebsiteType } from '../types/types';
import { PiHouse } from 'react-icons/pi';
import { IoFastFoodOutline } from 'react-icons/io5';
import { WebsiteCard } from './WebsiteCard';

export const WorkContainer = () => {
	return (
		<div className='flex flex-col gap-24 w-full lg:max-w-6xl items-center mt-8'>
			<div className='flex flex-col gap-8 lg:flex-row lg:gap-16 justify-between items-center w-full'>
				<div className='flex lg:flex-col gap-4 items-center justify-center'>
					<div className='h-[1px] w-16 lg:w-[1px] lg:h-16 bg-white/50 mr-3 lg:mb-8 lg:mr-0'></div>
					<h3 className='lg:text-3xl text-2xl font-thin opacity-50 tracking-[1rem] lg:tracking-[1.5rem] vertical-text'>APPS</h3>
					<div className='h-[1px] w-16 lg:w-[1px] lg:h-16 bg-white/50'></div>
				</div>
				<div className='flex flex-col gap-4 w-full lg:max-w-6xl'>
					<AppCard
						Icon={BsPhone}
						title='Messenger Clone'
						description='Send and receive messages to other users, either individually or in group chats.'
						type={AppType.Message}
						link='https://messenger-clone-ebon.vercel.app'
						mediaLinks={['chat_screen', 'chat_info', 'edit_info', 'group_chat']}
						techStack={['Next.js', 'NextAuth', 'TypeScript', 'TailwindCSS', 'Pusher.js', 'Prisma', 'MongoDB']}
					/>
					<AppCard
						Icon={PiHouse}
						title='Airbnb Clone'
						description='Working clone of the popular web app'
						type={AppType.Airbnb}
						link='https://next13-airbnb-clone-psi.vercel.app'
						mediaLinks={['home_screen', 'login', 'dates', 'property']}
						techStack={['Next.js', 'NextAuth', 'TypeScript', 'TailwindCSS', 'Prisma', 'MongoDB']}
					/>
					<AppCard
						Icon={IoFastFoodOutline}
						title='Restaurant Voting App'
						description='Vote with friends about where to go to eat'
						type={AppType.Vote}
						link='https://sidekick-decide-app.vercel.app/'
						mediaLinks={['choose_location', 'location_default', 'vote', 'change_vote']}
						techStack={['Next.js', 'Clerk', 'TypeScript', 'TailwindCSS', 'Pusher.js', 'Google Maps API', 'Prisma', 'PostgreSQL', 'Supabase']}
					/>
					<AppCard
						Icon={BiSolidBot}
						title='Sidekick ipsum generator'
						description='AI generated filler text application for a branding agency'
						type={AppType.Ipsum}
						link='https://www.sidekick.agency/sidekick-ipsum'
						mediaLinks={['ipsum_home', 'ipsum_story']}
						techStack={['Vanilla Javascript', 'Axios', 'OpenAI', 'AWS', 'Webflow']}
					/>
				</div>
			</div>
			<div className='flex flex-col gap-8 lg:flex-row lg:gap-16 justify-between items-center w-full'>
				<div className='flex lg:flex-col gap-4 items-center justify-center'>
					<div className='h-[1px] w-16 lg:w-[1px] lg:h-16 bg-white/50 mr-3 lg:mb-8 lg:mr-0'></div>
					<h3 className='lg:text-3xl text-2xl font-thin opacity-50 tracking-[1rem] lg:tracking-[1.5rem] vertical-text'>WEBSITES</h3>
					<div className='h-[1px] w-16 lg:w-[1px] lg:h-16 bg-white/50'></div>
				</div>

				<div className='flex flex-col gap-4 w-full lg:max-w-6xl'>
					<WebsiteCard
						type={WebsiteType.ecommerce}
						title='Sendero Provisions Co.'
						description='Custom Shopify theme for a multi-million dollar clothing brand'
						link='https://senderopc.com'
						mediaLinks={['sendero_home', 'sendero_mega_menu', 'sendero_product_page', 'sendero_category_grid']}
					/>
					<WebsiteCard
						type={WebsiteType.business}
						title='Sidekick Creative Agency'
						description='Webflow site with heavy emphasis on user experience built for a branding agency.'
						link='https://www.sidekick.agency'
						mediaLinks={['sidekick_home', 'sidekick_work', 'sidekick_menu', 'sidekick_contact']}
					/>
					<WebsiteCard
						type={WebsiteType.business}
						title='Centurion American'
						description='Fully customized Wordpress CMS site for a multi-million dollar real estate development company. Utilizes text search and map filtering functionality.'
						link='https://centurionamerican.com'
						mediaLinks={['centurion_home', 'centurion_map', 'centurion_property', 'centurion_grid']}
					/>

					<WebsiteCard
						type={WebsiteType.nonprofit}
						title='Every Shelter'
						description='Wordpress site for a nonprofit. Utilizes multiple donation and marketing integrations.'
						link='https://everyshelter.org'
						mediaLinks={['everyshelter_home', 'everyshelter_state', 'everyshelter_bio']}
					/>
					<WebsiteCard
						type={WebsiteType.ecommerce}
						title="Dr. Gregory's Canine Joint Formula"
						description='Custom Shopify theme for small business. Utilizes 3D modeling and animation.'
						link='https://caninejointsupplement.com'
						mediaLinks={['gregory_home', 'gregory_product', 'gregory_3d', 'gregory_contact']}
					/>
					<WebsiteCard
						type={WebsiteType.business}
						title='Old Bethany Venue'
						description='Wordpress website for a popular wedding and event venue in Waco, Texas'
						link='https://oldbethanyvenue.com'
						mediaLinks={['oldbethany_home', 'oldbethany_grid', 'oldbethany_why', 'oldbethany_lodge']}
					/>
				</div>
			</div>
		</div>
	);
};
