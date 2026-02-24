
export interface Project{
    imageLink?: string,
    title:string,
    description:string,
    hostedLink?: string, githubLink:string
}
export const ProjectsList: Project[] = [
    {
        imageLink:'https://d9b2ihs3ufej0.cloudfront.net/images/portfolio-projects/portfolio-thumbnail.png',
        title:'Portfolio Website',
        description:'Performance-optimized React portfolio featuring a custom physics-based Canvas starfield, gesture-intent architecture for mobile UI, and serverless GitHub/DSA data aggregation with secure caching.',
        githubLink:'https://github.com/Shubham04Jha/Portfolio',
        hostedLink:'https://www.shubhamjha.me'
    },
    {
        imageLink:'https://d9b2ihs3ufej0.cloudfront.net/images/portfolio-projects/web3wallet-v4-thumbnail.png',
        title: 'Web3Wallet',
        description: 'Secure browser HD wallet with encrypted local key management and on-demand private key access using Web Crypto APIs',
        githubLink: 'https://github.com/Shubham04Jha/web3wallet',
        hostedLink: 'https://web3wallet.projects.shubhamjha.me'
    },
    // {
    //     title: 'Open Brain',
    //     description: 'A full-stack link storage and notes management app featuring a custom UI component library and secure JWT authentication. Integrated a vector database for semantic search to enhance contextual document retrieval.',
    //     githubLink: 'https://github.com/Shubham04Jha/my_brain-Frontend',
    // },
    // {
    //     imageLink:'',
    //     title: 'NetBank Wallet',
    //     description: 'A peer-to-peer transaction simulator built with Node.js and MongoDB. Implemented secure balance updates, RESTful APIs for onboarding, and Zod-based input validation for robust data handling.',
    //     githubLink: 'https://github.com/Shubham04Jha/CashFlow', 
    // },
    {
        title: 'Micrograd Engine',
        description: 'Minimal autograd engine in Python using OOP. Enabling a deeper understanding of gradient tracking and neural network forward/backward passes.',
        githubLink: 'https://github.com/Shubham04Jha/Micrograd_learning',
    }
];
