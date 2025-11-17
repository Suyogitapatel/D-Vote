// ✅ Import election thumbnails
import Thumbnail1 from './assets/flag1.jpg'
import Thumbnail2 from './assets/flag2.jpg'
import Thumbnail3 from './assets/flag3.png'

// ✅ Import candidate images
import Candidate1 from './assets/candidate1.jpg'
import Candidate2 from './assets/candidate2.jpg'
import Candidate3 from './assets/candidate3.jpg'
import Candidate4 from './assets/candidate4.jpg'
import Candidate5 from './assets/candidate5.jpg'
import Candidate6 from './assets/candidate6.jpg'
import Candidate7 from './assets/candidate7.jpg'

// ✅ ELECTIONS DATA
export const elections = [
  {
    id: "e1",
    title: "Presidential Election",
    description: "Election to choose the next president of the country.",
    thumbnail: Thumbnail1,
    candidates: ["c1", "c2"],
    voters: [],
  },
  {
    id: "e2",
    title: "Parliamentary Election",
    description: "National level election for parliamentary members.",
    thumbnail: Thumbnail2,
    candidates: ["c3", "c4"],
    voters: [],
  },
  {
    id: "e3",
    title: "Local Government Election",
    description: "Municipal and district elections across regions.",
    thumbnail: Thumbnail3,
    candidates: ["c5", "c6", "c7"],
    voters: [],
  },
]

// ✅ CANDIDATES DATA
export const candidates = [
  {
    id: "c1",
    fullName: "Enoch Ganyo",
    image: Candidate1,
    motto: "Sed quibusdam recusandae alias error harum maxime adipisci amet laborum.",
    voteCount: 23,
    election: "e1",
  },
  {
    id: "c2",
    fullName: "John Asiama",
    image: Candidate2,
    motto: "Honesty and progress for all citizens.",
    voteCount: 18,
    election: "e1",
  },
  {
    id: "c3",
    fullName: "Sarah Nartey",
    image: Candidate3,
    motto: "Empowering women and youth across the nation.",
    voteCount: 27,
    election: "e2",
  },
  {
    id: "c4",
    fullName: "Michael Osei",
    image: Candidate4,
    motto: "Stronger economy, better future.",
    voteCount: 35,
    election: "e2",
  },
  {
    id: "c5",
    fullName: "Linda Boateng",
    image: Candidate5,
    motto: "Local jobs, local growth.",
    voteCount: 12,
    election: "e3",
  },
  {
    id: "c6",
    fullName: "Peter Mensah",
    image: Candidate6,
    motto: "Development through unity.",
    voteCount: 9,
    election: "e3",
  },
  {
    id: "c7",
    fullName: "Rita Owusu",
    image: Candidate7,
    motto: "Clean governance, clean environment.",
    voteCount: 15,
    election: "e3",
  },
]

// ✅ VOTERS DATA
export const voters = [
  {
    id: "v1",
    fullName: "Ernest Achiever",
    email: "achiever@gmail.com",
    password: "achiever123",
    isAdmin: true,
    votedElections: ["e2"],
  },
  {
    id: "v2",
    fullName: "Aman Kumar",
    email: "aman@example.com",
    password: "aman123",
    isAdmin: false,
    votedElections: [],
  },
  {
    id: "v3",
    fullName: "Shreya Singh",
    email: "shreya@example.com",
    password: "shreya123",
    isAdmin: false,
    votedElections: ["e1"],
  },
]
