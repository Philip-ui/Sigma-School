# Breakdown Template for organizing your thoughts and sharing your video learnings 


### Links

- Zoom Recording URL: [Add solution URL here](https://www.youtube.com/watch?v=EFw9NNYDml8&t=2s)
- GitHub page URL:[Add GitHub page URL here](https://github.com/Philip-ui/pokemon-clone)
- Deployed GitHub page URL: [Add deployed GitHub page URL here](https://philip-ui.github.io/pokemon-clone/)

## [Team Express]
### 1. What parts were you in charge of?
- Home page `[Irfan]`
- Johto page `[Lokmann]`
- Kanto page `[Kok Onn]`

### 2. Explain the feature you are most proud of. What techniques/methods you've used?

Share some of the key insights and lessons you gained while working on this project. 
Taking some time to write them down and provide code samples of the sections you found particularly important can be an effective way to solidify your understanding.

To see how you can add code snippets, refer below:
`[Lokmann]`
- Used grid to create a responsive and dynamic layout, and implemented a hover effect that enlarges the image and displays more information.

`[Kok Onn]`
- The feature I'm most proud of is using CSS flexbox. I can style the elementswith ease and save some lines of codes.

.header {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  max-width: 1440px;
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  background-color: rgb(240, 231, 231);
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
}
/* Header title */
.bold-letter {
  width: 60%;
  max-width: 600px;
}

h1 {
  padding: 1rem;
  margin-left: auto;
  margin-right: auto;
}
/* Back to homepage button */
.button-left a {
  background: grey;
  border-radius: 5px;
  border: 2px solid rgb(81, 79, 79);
  padding: 5px 10px;
  text-decoration: none;
  display: block;
  transition: all 0.5s;
  color: black;
}

.button-left a:hover {
  transform: scale(0.9);
}
/* 1st Generation Pokemon cards container */
.poke-container {
  background-color: rgb(248, 248, 251);
  padding: 2rem;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: space-evenly;
  max-width: 1440px;
}
/* Pokemon cards */
.pokemon {
  padding: 1.25rem;
  border-radius: 0.75rem;
  background-color: beige;
  margin: 0.5rem 0;
  cursor: pointer;
}

.img-container {
  min-width: 200px;
  min-height: 200px;
  text-align: center;
}
/* Footer Copyright */
footer {
  display: flex;
  max-width: 1440px;
  margin-left: auto;
  margin-right: auto;
  padding: 50px;
  background-color: rgb(240, 231, 231);
}

footer p {
  font-weight: 600;
  font-size: large;
}

@media (max-width: 768px) {
  .poke-container {
    max-width: 768px;
    width: 100%;
  }
  .img-container {
    min-width: 200px;
    min-height: 200px;
    text-align: center;
  }
}

@media (max-width: 600px) {
  .header {
    max-width: 600px;
  }

  .poke-container {
    max-width: 600px;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
  }

  .pokemon {
    min-width: 200px;
  }
}

'[Irfan]'


If you want more help with writing markdown, we'd recommend checking out [The Markdown Guide](https://www.markdownguide.org/) to learn more.

### 3. Name one coding struggle and how you dealt with it
`[Lokmann]`

- Figuring out how to properly align the images with the text below. I tried using different display properties, but it wasn't working. Eventually, I discovered that I needed to use the grid-row property to adjust the placement.

`[Kok Onn]`

- The one coding struggle is to understand the pokemon API JSON codes which I'm not familiar. And it took me some time in viewing the tutorials, googling the API topics and studying the Pokemon API documentation to finally understand how to do it.

'[Irfan]'

### 4. Name one improvement you would like to work on.

In this section, pinpoint concepts or techniques that need further development for future projects.These might include concepts that you're not yet entirely confident in or techniques that you'd like to hone and master.

`[Lokmann]`
- In the future, I would like to work on using modularised media query classes to ensure that my designs are media responsive in a more optimized way. Will implement something along these lines: link [here](https://www.youtube.com/watch?v=TUD1AWZVgQ8)

`[Kok Onn]`
- One improvement which I like to work on is to fetch all images, names and ids at one go instead of 20 at a time. This would entail nested API fetch which would be another level.

'[Irfan]'

# Useful resources (include if any)

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

---

