# What do I need to know to help?
If you are looking to help to with a code contribution our project uses NextJS, a React framework. If you don't feel ready to make a code contribution yet, no problem! There may be some open issues related to documentation or design. You can also propose improvements by opening a new issue. <!-- You can also check out the documentation issues [link to the docs label or tag on your issue tracker] or the design issues that we have [link to design label or tag on issue tracker if your project tracks design issues].-->

## If you are interested in making a code contribution and would like to learn more about the technologies that we use, check out the list below.

Include bulleted list of
resources (tutorials, videos, books) that new contributors
can use to learn what they need to know to contribute to your project
- React, NextJS, TypeScript, Javascript
- CSS + CSS Modules
- GitHub Actions

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!


## How do I make a contribution?
Never made an open source contribution before? Wondering how contributions work in the in our project? Here's a quick rundown!

1. Find an [issue](/issues) that you are interested in addressing or a feature that you would like to add.
1. Fork the repository associated with the issue to youraccount. This means that you will have a copy of the repository under your-GitHub-username/repository-name.
1. Clone the repository to your local machine using git clone https://github.com/github-username/repository-name.git.
1. Create a new branch for your fix using git checkout -b branch-name-here.
1. Make the appropriate changes for the issue you are trying to address or the feature that you want to add.
1. Use `git add insert-paths-of-changed-files-here` to add the file contents of the changed files to the "snapshot" git uses to manage the state of the project, also known as the index.
1. Use `git commit -m "Insert a short message of the changes made here"` to store the contents of the index with a descriptive message.
1. Push the changes to the remote repository using `git push origin branch-name-here`.
1. Submit a pull request to the upstream repository.
1. Title the pull request with a short description of the changes made and the issue or bug number associated with your change. For example, you can title an issue like so "Added GIF of Rihanna for Status Code ### to resolve #4352".
 In the description of the pull request, be sure to explain the changes that you made, any issues you think exist with the pull request you made, and any questions you have for the maintainer. It's OK if your pull request is not perfect (no pull request is), the reviewer will be able to help you fix any problems and improve it!
1. Wait for the pull request to be reviewed by a maintainer.
1. Make changes to the pull request if the reviewing maintainer recommends them.
1. Celebrate your success after your pull request is merged! 🎉


## Adding a New Status Code

- The GIF should include Rihanna and not already be included on https://www.httriri.com/. In rare cases, a GIF that already exists in the HTTRIRI collection can be used for another status code but within the same set of proposed changes a new GIF should be chosen for the other status code to ensure there are no duplicate images and the overall size of the collection is growing. 
- Project maintainers reserve the right to determine whether or not a particular Rihanna GIF reflects the status code in question.
- New GIFs should be added to the `/public/images` folder and named like [statuscode].gif
- The statuses file should be updated to include the new status code in `statuses`. Note the statusCodes should appear in the `statuses` object in ascending order. https://github.com/M0nica/httriri/blob/main/utils/statuses.ts

- For status code 404. I added a new image `404.gif` to `/public/images` and updated statuses.ts to include:

```{
    code: 404,
    title: "Not Found",
    description:
      "Rihanna singing Story of my life Searching for the right But it keeps avoiding me",
  },
```

Note the code, title and description (which is used for [image alt text](https://developer.mozilla.org/en-US/docs/Web/API/HTMLImageElement/alt) are all required. The title should match the title on https://httpstatuses.com/ for that particular status code.

## Creating GIFs
Here are some resources for creating GIFs:

- [EzGif](http://ezgif.com/video-to-gif) - Web
- [Giftuna.io](http://giftuna.io/) - Open source. Windows, Linux, Mac
- [GifMaker](https://play.google.com/store/apps/details?id=com.gif.gifmaker) - Android

 Creating GIFs with [EzGif](http://ezgif.com/video-to-gif)
* On the website header, click on *Video to gif* option
* Upload the video file or URL
* Click on Upload video

## Finding GIFs
Here are some tips for finding GIFs:
* When using Google, track down any GIF by clicking "Search Tools" under the search bar, then go into the "Any Type" dropdown and select "Animated."
* You can make use of [Tumblr](https://www.tumblr.com/), the GIF's natural habitat to find cool GIFs.
* Find the GIF you are looking for by searching a term or set of terms in the search bar atop [giphy](https://giphy.com/).

## Where can I go for help?
- If you need help, you can ask questions directly in the pull request or issue. 

## What does the Code of Conduct mean for me?
- Our [Code of Conduct](CODE_OF_CONDUCT.md) means that you are responsible for treating everyone on the project with respect and courtesy regardless of their identity. If you are the victim of any inappropriate behavior or comments as described in our Code of Conduct, we are here for you and will do the best to ensure that the abuser is reprimanded appropriately, per our code.

Portions of this contributing.md file are based off of Safia Abdalla's [template for creating open source contributor guidelines](https://opensource.com/life/16/3/contributor-guidelines-template-and-tips)
