
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
		  "Scotiabank Global Banking & Markets (Toronto, ON)\nMay 2022 - Present",
	  },
	  {
		title: "Data Analyst Intern",
		description: "Scotiabank (Toronto, ON)\nJanuary 2022 - April 2022",
	  },
	  {
		title: "Tax Consultant Intern",
		description:
		  "Stratos Solutions Inc. (Vaughan, ON)\nMay 2022 - Present",
	  },
	  {
		title: "Teaching Assistant for Discrete Structures (CS1800)",
		description:
		  "Northeastern University (Boston, MA)\nJune 2021 - December 2021",
	  },
	  {
		title: "Software Engineer/UI Intern",
		description: "PicdLocal (San Gabriel, CA)\nAugust 2019 - March 2020",
	  },
	],
  };

export const projects = {
	title: "Projects",
	cards: [
		{
			title: "StarBook",
			description: "A digital diary and mood tracking app that helps you in keeping track of your mood and productivity throughout the month/year.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/starbook-journal-ai-diary/id1552418289",
				},
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/star_book",
				},
			]
		},
		{
			title: "QuranTalk",
			description: "An emotional well being and mental health app. The app helps people to navigate their emotions in the light of the Quran.",
			icons: [
				{
					icon: faAppStore,
					link: "https://apps.apple.com/us/app/qurantalk/id1563425149",
				},
				{
					icon: faGooglePlay,
					link: "https://play.google.com/store/apps/details?id=com.ayahemotion.quran_talk",
				},
			]
		},
		{
			title: "Portfolio",
			description: "A portfolio website template that helps you showcase your work, projects and skills as a software developer or freelancer.",
			icons: [
				{
					icon: faGithub,
					link: "https://github.com/hashirshoaeb/portfolio",
				},
			]
		},
	],
}

export const contact = {
	title: "Get in touch",
	description: "Coffee Chat! Please do not hesitate to schedule a meeting. Alternatively, feel free to reach out directly by email at hashirshoaeb@gmail.com.",
	buttons: [
		{
			title: "Email Me",
			link: "mailto:hashirshoaeb@gmail.com",
			isPrimary: true,
		},
		{
			title: "Schedule Meeting",
			link: "",
			isPrimary: false,
		},
	]
}

// SEARCH ENGINE 
export const SEO = {
	// 50 - 60 char  
	title: "Hashir Shoaib | Computer Engineer | Flutter | Reactjs developer",
	description: "I create mobile apps and static websites. I graduated from National University of Sciences and Technology (NUST) in 2020 with a degree in Computer Engineering.",
	image: profile.src,
}

export const links = {
	image: profile.src,
	title: "@hashirshoaeb",
	description: "Computer Engineer | Flutter | Reactjs Developer",
	cards: [
		{
			title: "My website",
			link: "https://hashirshoaeb.com/",
		},
		{
			title: "QuranTalk App",
			link: "https://www.qurantalk.app/",
		},
		{
			title: "StarBook App",
			link: "https://starbook.dev/",
		},
		{
			title: "My GitHub",
			link: "https://github.com/hashirshoaeb/",
		},
		{
			title: "My LinkedIn",
			link: "https://www.linkedin.com/in/hashirshoaeb/",
		},
	]
}