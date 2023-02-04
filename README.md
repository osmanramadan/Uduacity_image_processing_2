### what project do
- control height and width of images 

### main website
- http://localhost:3000/

### Scripts
- Install: ```npm install```
- Build: ```npm run build```
- Lint: ```npm run lint```
- Prettify: ```npm run prettier```
- Run unit tests: ```npm run test```
- Start server: ```npm run start_server```


### how access end points
# Example 1
http://localhost:3000/api/images
Will display and list available image names
- Available filenames are:
  - encenadaport
  - fjord
  - icelandwaterfall
  - palmtunnel
  - santamonica
# Example 2
http://localhost:3000/api/images?filename=fjord
Will ask you to give parameters

# Example 3
http://localhost:3000/api/images?filename=fjord&width=200&height=200

will resize image make width =>200 px , height =>200 px
and save image in __direname/images/thumb/


