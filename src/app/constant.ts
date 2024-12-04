interface IPoint {
    id: string | number;
    title: string;
    content: string;
}
export interface IContent {
    id: string | number;
    image?: string;
    alt?: string;
    heading: string;
    content?: string;
    points?: IPoint[];
}

const BLOGIFY_POINTS: IContent[] = [
    {
        id: 1,
        heading: '🚀 Unleash Your Creativity, Share Your Voice',
        content:
            'Welcome to a world of limitless possibilities – Simply Blogify, your go-to platform for sharing thoughts, stories, and ideas that matter to you. Here, we believe that every voice deserves to be heard, and every story has the power to inspire.',
    },
    {
        id: 2,
        heading: '🖊️ Write, Inspire, Connect',
        content:
            "Whether you're a seasoned writer or just starting your blogging journey, Simply Blogify is the perfect canvas for your words. Craft compelling narratives, share your experiences, and ignite conversations that resonate with a global audience. Your unique perspective matters, and we're here to amplify it.",
    },
    {
        id: 3,
        heading: '🌐 Join a Community of Like-minded Creators',
        content:
            "Connect with a vibrant community of writers and readers who share your passion for storytelling. Engage in meaningful discussions, exchange feedback, and build lasting connections. At Simply Blogify, you're not just a writer; you're part of a thriving community that values the power of words.",
    },
    {
        id: 4,
        heading: '🎨 Express Yourself with Style',
        content:
            'Our intuitive and user-friendly platform makes it easy for you to bring your stories to life. From rich text formatting to multimedia integration, we provide the tools you need to express yourself with style. Let your creativity shine – the stage is yours!',
    },
    {
        id: 5,
        heading: '👀 Read, Discover, Be Inspired',
        content:
            "Explore a diverse range of blogs curated just for you. From personal narratives to expert insights, there's always something new to discover on Simply Blogify. Find inspiration, broaden your horizons, and immerse yourself in a world of captivating stories.",
    },
    {
        id: 6,
        heading: '✨ Why Simply Blogify?',
        points: [
            {
                id: 7,
                title: 'User-Friendly',
                content:
                    'Our platform is designed with simplicity in mind, ensuring a seamless writing and reading experience.',
            },
            {
                id: 8,
                title: 'Community-driven',
                content:
                    'Join a supportive community that celebrates diversity of thought and encourages collaboration.',
            },
            {
                id: 9,
                title: 'Privacy First',
                content:
                    'Your content is yours. Control who sees your work and build your audience at your pace.',
            },
        ],
    },
];

const CREDIT_POINTS: IContent[] = [
    {
        id: 1,
        heading: '🌟 Crafting the Future of Blogging',
        content:
            'Behind the scenes at Simply Blogify is a visionary developer, none other than our very own Rakshit Agrawal. With a passion for innovation and a keen eye for detail, Rakshit has sculpted this platform from a dream into a reality.',
        image: '/images/rakshit.jpg',
        alt: 'Rakshit',
    },
    {
        id: 1,
        heading: '👩‍💻 Why Rakshit?',
        points: [
            {
                id: 2,
                title: 'Innovation First',
                content:
                    "Rakshit brings a fresh perspective to the world of blogging, constantly pushing the boundaries of what's possible.",
            },
            {
                id: 3,
                title: 'User-Centric Design',
                content:
                    "Every feature and every line of code is a testament to Rakshit's commitment to creating a user-friendly and visually appealing platform.",
            },
            {
                id: 4,
                title: ' Continuous Improvement',
                content:
                    'In the ever-evolving landscape of technology, Rakshit ensures that Simply Blogify stays ahead of the curve, adopting the latest trends and technologies.',
            },
        ],
    },
    {
        id: 5,
        heading: '🚀 Empowering Writers, One Line of Code at a Time',
        content:
            "Rakshit doesn't just build websites; he create digital spaces where creativity thrives, where stories come to life, and where connections are forged. Simply Blogify is not just a platform; it's a testament to Rakshit's dedication to empowering writers worldwide.",
    },
    {
        id: 6,
        heading: '🙌 Join Rakshit on This Exciting Journey',
        content:
            "As we embark on this exciting journey of storytelling and expression, we invite you to join Rakshit and the Simply Blogify community. Together, we're not just creating a website; we're building a home for ideas, a canvas for imagination, and a sanctuary for words.",
    },
];

export { BLOGIFY_POINTS, CREDIT_POINTS };
