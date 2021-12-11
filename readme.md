# CS 601 Project
## Edward Scheff

My website is the start of a site that's all about consulting services I can offer. I'm in the MSSD program but still really enjoy solving business analytics and supply chain problems, so want to do some consulting in that domain as a side business.

### How to Open the Website
- Live version on web at: https://serene-panini-537ecb.netlify.app/index.html
- Submitted project: Unzip the folder
- Intended starting page is 'index.html', though it is possible to open any of the .html files and navigate to any of the other pages
- Right-click on the file in your file browser, click 'Open With', and select the browser you woud like to use to open
- Enjoy the site!

### Feedback from Presentation Implemented
- Increased font size and padding on screen
- Changed the color of the nav & footer
- Borders rounded to a lesser extent
- Used .jpeg images where there were .avif files
- Introduced 2-column layout to top of home page

### Objectives Met

#### Design
- I really struggle with visual aesthetics, and am really proud of what I was able to accomplish
- Coolers helped me select colors
- Took presentation feedback

#### Layout
- Tested on desktop browsers of various widths + mobile
- Used media queries + flexbox to help achieve responsive design
- Used DOM manipulation to show/hide cumbersome elements on smaller screens (photos + show a list instead of a table)

#### Text
- My website tells a story geared towrads the intended audience (small business owners in need of help with supply chain problems)
- On the home page, I used a marketing framework (the storybrand framework) to walk the visiter through their needs and present myself as the solution to their problems
- The other pages are all relevant to the intended visitor's needs, giving them:
    - an intro to who I am
    - projects I've worked on and the imact I've made
    - a work sample
    - supply chain/business analytics resources
    - a way to contact me

#### Images
- All images have specified alt text and width/height, images are responsive as page size changes
- Credit is given (most images sources from unsplash)

#### Mechanics
- Links work, and each page is accessible from each other page except the form submission confirmation page
- Tested in Chrome, Firefox, and Safari

#### HTML
- Semantic elements used throughout the site
- Most pages have 5-7 elements, and the ones that don't are intentional. For example, the contact page should have a low barrier to entry. Every click/paragraph is a heavier lift and the user journey is a funnel. If someone's already on that page they already want to contact me, make it simple!

#### CSS
- CSS used throughout the site. The main elements I templated are grey and blue blocks, that are used throughout, with slight variations based on particular need
- Media queries to help adapt to various screen sizes & print scenario
- Flexbox to help with responsivity & alignment

#### Javascript
- Contact buttons on site use JavaScript to take user to the contact page
- Safety Stock Calculator uses javascript & Javascript Math methods to calculate safety stock based on user inputs
- DOM manipulation based on safety stock results
- Javascript to help get resources from JSON file (used fetch)

#### Vue
- Resources page: Vue helps show/hide the 'access article here' link on hover

#### Dom Manipulation
- Safety Stock Calculator result populated into DOM
- Resources page: data populated by changing DOM after Fetch
- Resources page: Vue show/hide 'access article here' link
- Home page: hide/show table/list

#### Validation/Accessiblity
- Enabled a noscript element to let user know that site works best with JavaScript enabled
- Validated HTML, CSS, & JavaScript
- Alt text, labels, etc. used with accessiblity in mind

#### Extra Credit
- Fetch used to get data from JSON
- Map used in Safety Stock Calculator to help map service levels to z-scores
- FlexBox used to help with repsonsive design

### Final Thoughts
I'm really proud of what I've accomplished because this is my first exposure to web development, can't make things look nice to save my life, and can tell I've come a long way since the beginning of the course.

I know my limitations, I'm a data person. So if I do end up wanting to do some consulting work and use this site I'll definitely hire a designer to make the site look nicer, and while I enjoy writing I'm not great at writing for SEO, so while I like what the content says I'd probably hire a SEO specialist to go over and edit to make it more optimized for search discovery.