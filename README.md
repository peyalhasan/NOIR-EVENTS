# NOIR Events 🎉

A modern event discovery and management platform built with Next.js, allowing users to explore, register, and manage events seamlessly.

![NOIR Events](/public/Nior%20Events.png)

## 🌐 Live Demo

**[Visit NOIR Events](https://noir-events.vercel.app)**

## ✨ Features

- **Event Discovery**: Browse and search through various events like TechCrunch Disrupt, Cannes Film Festival, Coachella, and more
- **Secure Authentication**: 
  - Encrypted password storage
  - Secure session management
  - Protected routes and API endpoints
- **User Registration & Login**: email password based secure authentication system
- **Event Details**: Comprehensive event information with locations and descriptions
- **Interactive Maps**: 
  - Google Maps integration for event locations
  - Location display by venue name
  - Interactive map view on event details page
  - Get directions functionality
- **Interest Tracking**: Mark events as "Interested" or "Going"
- **Payment Integration**: 
  - Secure Stripe payment processing
  - Automatic email confirmation after successful payment
- **Email Notifications**:
  - Payment confirmation with details
- **SEO Optimized**:
  - Schema.org structured data markup
  - Event rich snippets for search engines
  - Meta tags for social sharing
  - Improved search engine visibility
- **MongoDB Atlas (AWS)**: Cloud-hosted scalable database
- **Responsive Design**: Beautiful UI that works on all devices
- **Real-time Updates**: Dynamic event status and attendance tracking

## 🛠️ Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Language**: JavaScript
- **Styling**: CSS/Tailwind CSS
- **Database**: MongoDB Atlas (AWS)
- **Authentication**: Secure session-based authentication
- **Email Service**: Resend for payment confirmation emails
- **Maps**: Google Maps API for location display
- **SEO**: Schema.org structured data markup
- **Deployment**: [Vercel](https://vercel.com)

## 📁 Project Structure

```
noir-events/
├── app/
│   ├── actions/           # Server actions
│   ├── components/        # Reusable components
│   │   ├── Auth/         # Authentication components
│   │   ├── details/      # Event detail components
│   │   ├── landing/      # Landing page components
│   │   ├── meta/         # Meta tags and SEO (Schema markup)
│   │   └── payments/     # Payment components
│   ├── contexts/         # React Context providers
│   ├── details/          # Event details pages
│   │   └── [id]/        # Dynamic event routes
│   ├── fonts/            # Custom fonts
│   ├── hooks/            # Custom React hooks
│   ├── login/            # Login page
│   ├── payment/          # Payment pages
│   │   └── [eventId]/   # Dynamic payment routes
│   ├── providers/        # Context providers
│   ├── register/         # Registration page
│   ├── services/         # API services
│   └── utils/            # Utility functions
├── db/                   # Database configuration
├── models/               # Database models (MongoDB schemas)
└── utils/                # Global utilities
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager
- MongoDB Atlas account (AWS region)
- Google Cloud account (for Maps API)
- Gmail account or SendGrid for payment confirmation emails
- Stripe account for payments

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/peyalhasan/NOIR-EVENTS.git
cd NOIR-EVENTS
```

2. **Install dependencies**

```bash
npm install
```


1. **Run the development server**

```bash
npm run dev
# or
yarn dev
```

5. **Open your browser**

Navigate to [http://localhost:3000](http://localhost:3000)

## 📝 Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 🎨 Featured Events

- **TechCrunch Disrupt** - San Francisco, USA
- **Cannes Film Festival** - Cannes, France
- **Coachella Valley Music Festival** - Indio, California, USA
- **Mobile World Congress** - Barcelona, Spain
- **Art Basel** - Miami, USA
- **SXSW** - Austin, Texas, USA

**User Features:**
- Secure registration with email verification
- Login with encrypted credentials
- Automatic session management
- Logout with token invalidation
- Password reset functionality (if implemented)
- Personalized event dashboard

## 🔍 SEO & Schema Markup

**Structured Data Implementation:**
- Schema.org Event markup for all event pages
- Rich snippets in Google search results
- Enhanced visibility in search engines
- Event details displayed directly in search

**Schema includes:**
This helps events appear in Google's event search results with rich cards showing event details, dates, and locations.

## 🗺️ Google Maps Integration

**Location Display Features:**
- Interactive Google Maps embedded on event detail pages
- Automatic geocoding from location name to coordinates
- Map markers showing exact event venue
- Zoom and pan controls for better navigation
- Get directions link to Google Maps app
- Responsive map view on all devices

**How it works:**
1. Event location is stored as a name (e.g., "San Francisco, USA")
2. Google Geocoding API converts location name to coordinates
3. Google Maps JavaScript API displays the interactive map
4. Users can click to get directions or view larger map

**Example locations:**
- TechCrunch Disrupt → San Francisco, USA
- Cannes Film Festival → Cannes, France  
- Coachella → Indio, California, USA
- SXSW → Austin, Texas, USA

## 📧 Contact

**Peyal Hasan**
- GitHub: [@peyalhasan](https://github.com/peyalhasan)
- Project Link: [https://github.com/peyalhasan/NOIR-EVENTS](https://github.com/peyalhasan/NOIR-EVENTS)
- Live Site: [https://noir-events.vercel.app](https://noir-events.vercel.app)


## 🙏 Acknowledgments

- Next.js team for the amazing framework
- Vercel for hosting and deployment
- All contributors and users of NOIR Events

---

**Made with ❤️ by Peyal Hasan**