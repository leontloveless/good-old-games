## About Good Old Games

[Good Old Games](https://www.good-old-games.com/) is a platform offering thousands of free HTML5 games that can be played directly in your browser without requiring any login. The site features classic games across multiple categories including Puzzle, Arcade, Adventure, Action, and more.

This project is based on [gfiles](https://github.com/BinBashBanana/gfiles) and [chrome-dino](https://github.com/wayou/t-rex-runner) for providing game data.

## Getting Started

First, set up your environment variables by creating a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your-google-analytics-id
NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID=your-adsense-client-id
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Environment Variables

The application uses the following environment variables:

| Variable                               | Description                                               |
| -------------------------------------- | --------------------------------------------------------- |
| `NEXT_PUBLIC_GOOGLE_ANALYTICS_ID`      | Your Google Analytics measurement ID (e.g., G-XXXXXXXXXX) |
| `NEXT_PUBLIC_GOOGLE_ADSENSE_CLIENT_ID` | Your Google AdSense client ID (e.g., ca-pub-XXXXXXXXXX)   |

Make sure to add these to your deployment environment as well.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
