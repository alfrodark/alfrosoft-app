import documentsAnimation from '../../../animations/documentsAnimation/data'
import scaleAnimation from '../../../animations/scaleAnimation/data.json'
import automationAnimation from '../../../animations/automationAnimation/data.json'
import uxAnimation from '../../../animations/uxAnimation/data'
import rootsImage from '../../../assets/root.svg'

const SOLUTIONS_INTRO = [
  'Arc Development is available to assist your company with technology, whether we’re updating outdated software or developing fresh ideas.',
  'Regular commercial software ultimately dictates how you operate by leaving you with a lot of things you don’t need and without some of the things you do. You run the danger of slipping behind competitors and missing out on significant cost savings from greater productivity if you don’t use any software at all.',
  'Your needs, desires, and objectives are the driving forces behind the creation of our personalized solutions. This collaborative process creates precisely tailored software that is far more efficient than generic alternatives at enhancing your workflow and lowering costs.',
  'We provide precisely what you desire in the manner that you specify.',
]

const SOLUTIONS_DATA = [
  {
    title: 'Digital Documents & Data',
    paragraph: [
      'Errors must be reduced. Reduce waste. Cut costs.',
      'The cost of purchasing, printing, and distributing paper is in the billions per year. This not only has a significant negative impact on the environment, but it also hurts your bottom line.',
      'You may eliminate these unnecessary costs, speed up your communications, and do your part for the environment by using digital forms and documents.',
    ],
    animation: documentsAnimation,
  },
  {
    title: 'Scale',
    paragraph: [
      'Our application architecture guarantees reliable growth regardless of whether you’re a big brand, just getting started, or exploding right now.',
    ],
    animation: scaleAnimation,
  },
  {
    title: 'Automation',
    paragraph: [
      'Why waste time when you don’t have to?',
      'We can assist you in locating procedures that now easily lend themselves to automation because they involve time- or event-based activities.',
      'Gaining productivity raises profitability, giving you more time to concentrate on your business rather than busywork.',
    ],
    animation: automationAnimation,
  },
  {
    title: 'User Experience Design',
    paragraph: [
      'A good design that cannot be used is not a good design.',
      'So why are there so many irritating, difficult-to-use software components?',
      'We can create unique, personable experiences that solve problems rather than create new ones by prioritizing users and the real ways they interact with technology.',
    ],
    animation: uxAnimation,
  },
]

const rootcauseBlockData = {
  title: 'Root-Cause Analysis',
  paragraph: [
    'Many issues are simply manifestations of larger, underlying issues.',
    'In order to create a comprehensive plan for the most successful technology deployment, we can assist you in carefully examining every aspect of your company.',
  ],
  image: rootsImage,
}

export { SOLUTIONS_DATA, SOLUTIONS_INTRO, rootcauseBlockData }
