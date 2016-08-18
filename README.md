#HackSheffield Website
##Contribution
The website is managed by Danny and additionally the rest of the Committee.
##Branches
`master` is the default branch. This is the production branch, with any changes being committed going live immediately. _(Github updated pages!)_

Any non-minor change to the website should be made to a new _feature branch_ (eg. `add-video-header`), and then merged into `master` when ready using a _pull request_.
###New websites
When creating a new website (eg. for the next season while the current website is still live), it should have it's own branch (eg. `2017s` for Spring 2017 Season) and it's own feature branches, mirroring the flow of the live website.

When it is ready to go live, [tag](https://git-scm.com/book/en/v2/Git-Basics-Tagging) the last commit for the old website with a useful identifier (eg. `2016s`) and then use a _pull request_ to merge the new website branch (eg. `2017s`) into `master`.
