
export interface Project{
            imageLink?: string,
            title:string,
            description:string,
    hostedLink?: string, githubLink:string
}
export const ProjectsList: Project[] = [
    {
        imageLink:'http://shubhamjha.me/my-images/portfolio/portfolioPreview.png',
        title:'Portfolio Website',
        description:'A mobile-first portfolio featuring a custom Canvas starfield background and Radix UI components.',
        githubLink:'https://github.com/Shubham04Jha/Portfolio'
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
        description: 'A minimal autograd engine reimplemented from scratch in Python using OOP. Modeled computation graphs for backpropagation, enabling a deep understanding of gradient tracking and neural network forward/backward passes.',
        githubLink: 'https://github.com/Shubham04Jha/Micrograd_learning',
    }
];