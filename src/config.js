export const config = {
  // Your Github Converted Token To Know How To Get Your Token Look at Readme.md
  // githubConvertedToken: "Z2hwX0N1ME4zYkk4TGFaSUZhSWJGMFNYcGtaU3A2OWc4NDA1TzM3OA==",
  githubConvertedToken: process.env.REACT_APP_TOKEN,

  // Your Github UserName
  githubUserName: process.env.REACT_APP_BLOG_USER,

  // Your Github Repo Name Where You Have your issues as Blog
  githubRepo: process.env.REACT_APP_BLOG_REPO,

  // Set it to true if you have a Github app to add to this project
  // and fill the client ID & secret
  enableOAuth: true,
  // OAuthClientID: 'Iv1.e3f6bee0cfac2603',
  OAuthClientID: process.env.REACT_APP_OAUTH_CID,
  // OAuthSecret: '1ecaca015ac37f7cdeb97395d00dcd4d96c6b910',
  OAuthSecret: process.env.REACT_APP_OAUTH_SECRET,

  // Your Personal Blog Title
  title : process.env.REACT_APP_BLOG_TITLE,

  // Your Personal Blog Subtitle
  subtitle : "2049, 相信未来",

  // Header customization
  header: {
    backgroundColor: '#f1f6f8', // can be a CSS gradient
    backgroundColorDark: '#4C566A',
    titleColor: 'rgb(109 168 220)',
    titleColorDark: '#16a085',
    subtitleColor: '#37474f',
    subtitleColorDark: '#D8DEE9',
  },
};
