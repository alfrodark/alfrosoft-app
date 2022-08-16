import vision from '../../../assets/vision.png'
import consultation from '../../../assets/consultationIcon.png'
import mockup from '../../../assets/mockupIcon.png'
import review from '../../../assets/reviewIcon.png'
import design from '../../../assets/designIcon.png'
import build from '../../../assets/buildIcon.png'
import launch from '../../../assets/launchIcon.png'
import maintain from '../../../assets/maintainIcon.png'
import iterate from '../../../assets/iterateIcon.png'

import technologyAnimation from '../../../animations/technologyAnimation/data.json'

const VisionsParagraph = {
  title: 'Vision',
  paragraph: [
    'Every element of human life has been completely changed by the development of computers and the Internet that followed. This has improved our comfort levels, widened our social circles, and changed the way we perceive the world.',
    'What was before restricted to enormous rooms and teams of engineers is now in each and every one of our hands. The core of what we do is to use this limitless potential to solve issues and improve lives.', 
    'We wish to assist companies in maximizing the benefits of cutting-edge technology. We want to assist lead the world into this upcoming phase of technical advancement, exploration, and creativity since creating the future is the best way to anticipate it.',
    'We can guarantee you have the greatest tools possible to succeed in this new frontier by holding ourselves to the highest standards and impeccable quality.In the future, each person will have customised software that is specially crafted to suit their way of life, culture, and interests in order to help them overcome challenges in life. Each undertaking advances that objective.',
  ],
  image: vision,
}

const TechnologyParagraph = {
  title: 'Technology',
  paragraph: [
    'In 2013, Facebook pioneered a new method of creating websites. React.js, a new system, completely transforms the process and practice of website development.',
    'React websites are built with small chunks of code called components rather than long individual pages like traditional websites. These components are faster and easier to maintain, as well as easily reused and customized, and each serves a specific purpose.',
    'They astonished the world by launching a comparable solution, called React Native, for creating iOS and Android apps two years later. Instead of having to learn two entirely different development platforms, you can use the skills you already have from creating websites and use them right away! This was a considerable advancement.',
    'AirBnB, Microsoft, Netflix, Pinterest, Skype, Tesla, UberEats, and more businesses now employ this technology. When Facebook acquired Instagram, significant areas of the platform were even completely rebuilt using React.',
    'Since then, developers have expanded upon these technologies by automating project setup and deployment, enabling authors to concentrate primarily on their original work.',
    'By drastically decreasing the burden and optimizing the workflow for creating new software, as well as by lowering the entry barrier for producing mobile apps, these technological breakthroughs translate into savings.',
    'With this, customisation is more accessible to you than ever before and is also faster, better, and more economical.',
  ],
  animation: technologyAnimation,
}

const Process = [
  {
    title: 'Consultation',
    paragraph: [
      ' When you realize you need a piece of technology for your business, our process begins. Whether you already know where to start and what to do, or you just know you want to take things to the next level, our initial consultation will help you examine your business holistically in order to find the best solutions.',
      'In order to identify other potential areas for consideration, detailed notes will be taken on your requirements and constraints.',
      ' Our knowledge and intuition will assist usher you into this new horizon of possibilities where computers are capable of performing previously unthinkable tasks such as object detection and machine learning processing.',
      'We envision a future in which every individual has personalized software that is custom tailored to their lifestyle, culture, and interests, assisting them in overcoming life challenges. Each project is a step in the right direction.',
    ],
    image: consultation,
    style: { backgroundColor: '#B3B3B3', color: '#fff' },
  },
  {
    title: 'Mockup',
    paragraph: [
      'Details such as cost and timeline will be finalized once we have decided on the best path forward and a solution to pursue.',
      'We may now begin working on your minimal viable product. That is merely a fancy term for a mockup, which captures the fundamental layout structure and functionality but lacks colors, graphics, or any other final design features.',
      ' This enables us to focus on the problem itself rather than becoming sidetracked by details and aesthetics.',
    ],
    image: mockup,
    style: { backgroundColor: '#FF69B4', color: '#fff' },
  },
  {
    title: 'Review',
    paragraph: [
      'Before moving any farther we come back to you with our progress. This gives you the freedom to discuss any changes you may want or any ideas you may have come up with before any heavy lifting has been done.',
      'We give you an interactive demonstration of the mockups, thoroughly explaining the thought process that went into each screen and every anticipated feature.',
      '  Once you’re completely satisfied with the vision for our solution we get down to the nitty gritty, fine-details of design.',
    ],
    image: review,
    style: { backgroundColor: '#39B54A', color: '#fff' },
  },
  {
    title: 'Design',
    paragraph: [
      'We wll begin working on the details of the final product using the mockups and notes that were made during the consultation as guidance. Using any brand-related elements, such as logos, colors, and typefaces, to enhance the existing comfortable experience is also part of this.',
      'Every detail is important, and every choice will be carefully considered.',
    ],
    image: design,
    style: { backgroundColor: '#6D5D46', color: '#fff' },
  },
  {
    title: 'Second Review ',
    paragraph: [
      ' To ensure that we produce exactly what you want, exactly how you want it, a second round of review is necessary.',
      ' Once again, the demonstration will be very participatory as we walk over the finished designs. Again, this offers you the chance to make changes and ensure that everything is done correctly the first time.',
    ],
    image: review,
    style: { backgroundColor: '#39B54A', color: '#fff' },
  },
  {
    title: 'Build',
    paragraph: [
      ' Here is where the action begins.',
      ' After you have approved the final designs, engineering will start. We begin by prioritizing certain elements of the project over others and scaffolding it out on a high level.',
      ' Then, until each section is prepared to be connected to the following component, it is developed in order of importance.',
      ' Backend, behind-the-scenes operations are typically completed first. Once all of the services are in place, we can start working on the front end, or user interface.',
      ' However, completing the application does not mean we are finished because we use extensive testing to ensure compatibility with all intended devices.',
      ' We will only accept a product as finished and move it through the production process following our thorough inspections. The result is a consumer version of the code and content that is optimized, compressed, and ready for deployment.',
    ],
    image: build,
    style: { backgroundColor: '#FBB03B', color: '#fff' },
  },
  {
    title: 'Launch',
    paragraph: [
      ' You are the first to be informed when construction is finished. We will present your brand-new program in the real world so you can see exactly how it will appear to your users.',
      ' We hit the button and release your project to the general public when you utter the command. In order for you to immediately start enjoying the benefits of your technology investment, we are there to make sure everything goes according to plan.',
    ],
    image: launch,
    style: { backgroundColor: '#C1272D', color: '#fff' },
  },
  {
    title: 'Maintain',
    paragraph: [
      'Following a successful launch, we maintain close contact to solicit feedback and learn how the project is being received.',
      'From that point on, we ensure that your application is kept current and utilizing the best features and procedures available. As part of our routine maintenance, we will incorporate any new innovations or techniques that are found in projects that come after yours.',
    ],
    image: maintain,
    style: { backgroundColor: '#8E45CE', color: '#fff' },
  },
  {
    title: 'Iterate',
    paragraph: [
      'Every time you develop a fresh concept for enhancing your ongoing project or develop an altogether new system, the cycle is restarted.',
      'In order to construct and evolve your application over time, we must prepare for upcoming features and modifications. We can respond with continuous integration of new material when new use cases and consumer needs emerge.',
      'By allowing you to swiftly adopt changes rather than having to wait months for a single update, our iterative process will keep you current and competitive.',
    ],
    image: iterate,
    style: { backgroundColor: '#543f31', color: '#fff' },
  },
]

export { VisionsParagraph, TechnologyParagraph, Process }
