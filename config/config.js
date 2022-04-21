
import profile from './profile.png';
import { faAppStore, faGithub, faGooglePlay } from '@fortawesome/free-brands-svg-icons';
import { } from '@fortawesome/free-solid-svg-icons';

export const navigation = {
	name: "Muhammad",
	links: [
		{
			title: "About",
			link: "#about",
		},
		{
			title: "Projects",
			link: "#projects",
		},
		{
			title: "Contact",
			link: "#contact",
		},
		{
			title: "Links",
			link: "/links",
		},
	],
}
export const intro = {
	title: "Hey, I'm Muhammad",
	description: "A Mathematics student passionate about the areas of machine learning, data science and software engineering.",
	image: profile.src,
	buttons: [
		{
			title: "Contact Me",
			link: "#contact",
			isPrimary: true,
		},
		{
			title: "Resume",
			link: "https://drive.google.com/file/d/1ZScWoHxmAWnjfFIpF3Gu8EsDKl7XuKoT/view?usp=sharing",
			isPrimary: false,
		},
	],
}

export const about = {
	title: "Who I am",
	description: [
		"I'm a 2nd year student at the University of Waterloo pursuing a degree in Mathematics with a major in Statistics and a minor in Computer Science.",
		"I love utilizing tech to find creative solutions to problems that affect our day-to-day lives. When it comes to working on projects, I love to delve into huge datasets, applying unique machine-learning algorithms and models, and working on anything finance-related. I'm really interested in pursuing a career in data science or quantitative finance.",
		"On a more personal note, some of my interests consist of playing and watching basketball, immersing myself in RPG and FPS video games, listening to old-school rap music, and weightlifting",
	],
};

export const work = {
  title: "Experience",
  cards: [
    {
      title: "Data Scientist Intern",
      description:
        "Scotiabank Global Banking & Markets",
    },
    {
      title: "Data Analyst Intern",
      description: "Scotiabank",
    },
    {
      title: "Tax Consultant Intern",
      description:
        "Stratos Solutions Inc.",
    },
  ],
};

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "NBA MVP Predictor",
			description: "A machine learning model that predicts NBA MVP for a given season based on data.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/rabee-m/nbamvp",
				},
			]
		},
		{
			title: "Stock News Sentiment Analysis",
			description: "Performs sentiment analysis on news headlines and stock articles by scraping data from the internet.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/rabee-m/sentiment-analysis-stock-news",
				},
			]
		},
		{
			title: "Biquadris (2-player Tetris)",
			description: "A modified version of Tetris that supports two-player capability, and special abilities with graphic support.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/rabee-m/",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Feel free to reach out directly by email at muhammad.rabee02@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:muhammad.rabee02@gmail.com",
			isPrimary: true,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Muhammad Rabee | Data Scientist",
	description: "2nd year Mathematics student at the University of Waterloo.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@mrabee",
	description: "Data Scientist | 2A Math @ UWaterloo",
	cards: [
		{
			title: "My website",
			link: "https://github.com/rabee-m/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/rabee-m/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/mrabee/",
		},
	]
}