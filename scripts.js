// Select elements
const description = document.querySelector('.description');
const randomizerButton = document.querySelector('.randomizer');
const statusDisplay = document.querySelector('.status');
const artDisplay = document.querySelector('.art');
const defaultArt = artDisplay.textContent;
const quoteDisplay = document.querySelector('.quote');
const divider = document.querySelector('.divider');
const activityDisplay = document.querySelector('.activity');
const resetLink = document.querySelector('.reset');


//ASCII art array
const logoArt = [
`

 █████   ███   █████       █████   ███   █████      ███████████ ███████████    █████████ 
░░███   ░███  ░░███       ░░███   ░███  ░░███      ░█░░░███░░░█░░███░░░░░███  ███░░░░░███
 ░███   ░███   ░███ ██████ ░███   ░███   ░███ ██   ░   ░███  ░  ░███    ░███ ███     ░░░ 
 ░███   ░███   ░██████░░███░███   ░███   ░███░░        ░███     ░██████████ ░███         
 ░░███  █████  ███░███ ░███░░███  █████  ███           ░███     ░███░░░░░███░███         
  ░░░█████░█████░ ░███ ░███ ░░░█████░█████░            ░███     ░███    ░███░░███     ███
    ░░███ ░░███   ░░██████    ░░███ ░░███     ██       █████    ███████████  ░░█████████ 
     ░░░   ░░░     ░░░░░░      ░░░   ░░░     ░░       ░░░░░    ░░░░░░░░░░░    ░░░░░░░░░  

`,
`

 █████   ███   █████       █████   ███   █████      █████   ███   █████         █████   █████      █████   ████
░░███   ░███  ░░███       ░░███   ░███  ░░███      ░░███   ░███  ░░███         ░░███   ░░███      ░░███   ███░ 
 ░███   ░███   ░███ ██████ ░███   ░███   ░███ ██    ░███   ░███   ░███ ██████  ███████  ░███       ░███  ███   
 ░███   ░███   ░██████░░███░███   ░███   ░███░░     ░███   ░███   ░██████░░███░░░███░   ░███       ░███████    
 ░░███  █████  ███░███ ░███░░███  █████  ███        ░░███  █████  ███░███ ░███  ░███    ░███       ░███░░███   
  ░░░█████░█████░ ░███ ░███ ░░░█████░█████░          ░░░█████░█████░ ░███ ░███  ░███ ███░███      █░███ ░░███  
    ░░███ ░░███   ░░██████    ░░███ ░░███     ██       ░░███ ░░███   ░░██████   ░░█████ ████████████████ ░░████
     ░░░   ░░░     ░░░░░░      ░░░   ░░░     ░░         ░░░   ░░░     ░░░░░░     ░░░░░ ░░░░░░░░░░░░░░░░   ░░░░ 

`,
`

 █████   ███   █████       █████   ███   █████        █████████           █████            
░░███   ░███  ░░███       ░░███   ░███  ░░███        ███░░░░░███         ░░███             
 ░███   ░███   ░███ ██████ ░███   ░███   ░███ ██    ███     ░░░  ██████  ███████   ██████  
 ░███   ░███   ░██████░░███░███   ░███   ░███░░    ░███         ░░░░░███░░░███░   ░░░░░███ 
 ░░███  █████  ███░███ ░███░░███  █████  ███       ░███          ███████  ░███     ███████ 
  ░░░█████░█████░ ░███ ░███ ░░░█████░█████░        ░░███     ██████░░███  ░███ ██████░░███ 
    ░░███ ░░███   ░░██████    ░░███ ░░███     ██    ░░█████████░░████████ ░░█████░░████████
     ░░░   ░░░     ░░░░░░      ░░░   ░░░     ░░      ░░░░░░░░░  ░░░░░░░░   ░░░░░  ░░░░░░░░ 

`,
`

 █████   ███   █████       █████   ███   █████      ██████   ██████ ███        █████          
░░███   ░███  ░░███       ░░███   ░███  ░░███      ░░██████ ██████ ░░░        ░░███           
 ░███   ░███   ░███ ██████ ░███   ░███   ░███ ██    ░███░█████░███ ████  ████████████   █████ 
 ░███   ░███   ░██████░░███░███   ░███   ░███░░     ░███░░███ ░███░░███ ███░░░░░███░   ███░░  
 ░░███  █████  ███░███ ░███░░███  █████  ███        ░███ ░░░  ░███ ░███░░█████ ░███   ░░█████ 
  ░░░█████░█████░ ░███ ░███ ░░░█████░█████░         ░███      ░███ ░███ ░░░░███░███ ███░░░░███
    ░░███ ░░███   ░░██████    ░░███ ░░███     ██    █████     ████████████████ ░░█████ ██████ 
     ░░░   ░░░     ░░░░░░      ░░░   ░░░     ░░    ░░░░░     ░░░░░░░░░░░░░░░░   ░░░░░ ░░░░░░  

`,
`

 █████   ███   █████       █████   ███   █████      █████   ███   █████       ██████████  
░░███   ░███  ░░███       ░░███   ░███  ░░███      ░░███   ░███  ░░███       ░░███░░░░███ 
 ░███   ░███   ░███ ██████ ░███   ░███   ░███ ██    ░███   ░███   ░███ ██████ ░███   ░░███
 ░███   ░███   ░██████░░███░███   ░███   ░███░░     ░███   ░███   ░██████░░███░███    ░███
 ░░███  █████  ███░███ ░███░░███  █████  ███        ░░███  █████  ███░███ ░███░███    ░███
  ░░░█████░█████░ ░███ ░███ ░░░█████░█████░          ░░░█████░█████░ ░███ ░███░███    ███ 
    ░░███ ░░███   ░░██████    ░░███ ░░███     ██       ░░███ ░░███   ░░██████ ██████████  
     ░░░   ░░░     ░░░░░░      ░░░   ░░░     ░░         ░░░   ░░░     ░░░░░░ ░░░░░░░░░░   

`,
`

 █████   ███   █████       █████   ███   █████      █████                         ███                     
░░███   ░███  ░░███       ░░███   ░███  ░░███      ░░███                         ░░░                      
 ░███   ░███   ░███ ██████ ░███   ░███   ░███ ██    ░███         ██████  ███████ ████   ██████  ████████  
 ░███   ░███   ░██████░░███░███   ░███   ░███░░     ░███        ███░░██████░░███░░███  ███░░███░░███░░███ 
 ░░███  █████  ███░███ ░███░░███  █████  ███        ░███       ░███████░███ ░███ ░███ ░███ ░███ ░███ ░███ 
  ░░░█████░█████░ ░███ ░███ ░░░█████░█████░         ░███      █░███░░░ ░███ ░███ ░███ ░███ ░███ ░███ ░███ 
    ░░███ ░░███   ░░██████    ░░███ ░░███     ██    ███████████░░██████░░███████ █████░░██████  ████ █████
     ░░░   ░░░     ░░░░░░      ░░░   ░░░     ░░    ░░░░░░░░░░░  ░░░░░░  ░░░░░███░░░░░  ░░░░░░  ░░░░ ░░░░░ 
                                                                        ███ ░███                          
                                                                       ░░██████                           
                                                                        ░░░░░░                            

`,
`

 █████   ███   █████       █████   ███   █████      ███████████  ████████████████████  
░░███   ░███  ░░███       ░░███   ░███  ░░███      ░░███░░░░░███░░███░░░░░░███░░░░░███ 
 ░███   ░███   ░███ ██████ ░███   ░███   ░███ ██    ░███    ░███ ░███   █ ░███    ░███ 
 ░███   ░███   ░██████░░███░███   ░███   ░███░░     ░██████████  ░███████ ░███████████ 
 ░░███  █████  ███░███ ░███░░███  █████  ███        ░███░░░░░███ ░███░░░█ ░███░░░░░███ 
  ░░░█████░█████░ ░███ ░███ ░░░█████░█████░         ░███    ░███ ░███  ░  ░███    ░███ 
    ░░███ ░░███   ░░██████    ░░███ ░░███     ██    ███████████  █████    █████   █████
     ░░░   ░░░     ░░░░░░      ░░░   ░░░     ░░    ░░░░░░░░░░░  ░░░░░    ░░░░░   ░░░░░ 

`,
`

 █████   ███   █████       █████   ███   █████       █████████  █████      
░░███   ░███  ░░███       ░░███   ░███  ░░███       ███░░░░░███░░███       
 ░███   ░███   ░███ ██████ ░███   ░███   ░███ ██   ░███    ░░░  ░███       
 ░███   ░███   ░██████░░███░███   ░███   ░███░░    ░░█████████  ░███       
 ░░███  █████  ███░███ ░███░░███  █████  ███        ░░░░░░░░███ ░███       
  ░░░█████░█████░ ░███ ░███ ░░░█████░█████░         ███    ░███ ░███      █
    ░░███ ░░███   ░░██████    ░░███ ░░███     ██   ░░█████████  ███████████
     ░░░   ░░░     ░░░░░░      ░░░   ░░░     ░░     ░░░░░░░░░  ░░░░░░░░░░░ 

`,
`

 █████   ███   █████       █████   ███   █████      ██████████  ███████████
░░███   ░███  ░░███       ░░███   ░███  ░░███      ░░███░░░░███░░███░░░░░░█
 ░███   ░███   ░███ ██████ ░███   ░███   ░███ ██    ░███   ░░███░███   █ ░ 
 ░███   ░███   ░██████░░███░███   ░███   ░███░░     ░███    ░███░███████   
 ░░███  █████  ███░███ ░███░░███  █████  ███        ░███    ░███░███░░░█   
  ░░░█████░█████░ ░███ ░███ ░░░█████░█████░         ░███    ███ ░███  ░    
    ░░███ ░░███   ░░██████    ░░███ ░░███     ██    ██████████  █████      
     ░░░   ░░░     ░░░░░░      ░░░   ░░░     ░░    ░░░░░░░░░░  ░░░░░       

`,
`

 █████   ███   █████       █████   ███   █████      ███████████ █████   ███   ██████████   ███   █████
░░███   ░███  ░░███       ░░███   ░███  ░░███      ░█░░░███░░░█░░███   ░███  ░░███░░███   ░███  ░░███ 
 ░███   ░███   ░███ ██████ ░███   ░███   ░███ ██   ░   ░███  ░  ░███   ░███   ░███ ░███   ░███   ░███ 
 ░███   ░███   ░██████░░███░███   ░███   ░███░░        ░███     ░███   ░███   ░███ ░███   ░███   ░███ 
 ░░███  █████  ███░███ ░███░░███  █████  ███           ░███     ░░███  █████  ███  ░░███  █████  ███  
  ░░░█████░█████░ ░███ ░███ ░░░█████░█████░            ░███      ░░░█████░█████░    ░░░█████░█████░   
    ░░███ ░░███   ░░██████    ░░███ ░░███     ██       █████       ░░███ ░░███        ░░███ ░░███     
     ░░░   ░░░     ░░░░░░      ░░░   ░░░     ░░       ░░░░░         ░░░   ░░░          ░░░   ░░░      

`]

//Quote array
const wowQuote = [
    `“I am Deathwing, the Destroyer, the end of all things! Inevitable. Indomitable. I am the Cataclysm!” - Deathwing the Unsubtle`,
    `“You are not prepared!” - Ilidan Stormrage...and everyone else`,
    `“Lok’tar Ogar!” - Chris Metzen`,
    `“No king rules forever, my son” - Terenas Menthil`,
    `An illusion? What are you hiding?!” - Every single damn guard in Suramar`,
    `“By fire be purged!” - Ragnaros`,
    `“The Lich King must fall!” - Tirion Fordring`,
    `“You face Jaraxxus, Eredar Lord of the Burning Legion!” - Jaraxxus, Eredar Lord of the Burning Legion, obviously`,
    `“A single spark can set the world aflame.” - Kael'thas Sunstrider`,
    `“A king is only as strong as his people.” - Anduin Wrinn`,
    `“I have no time for games.” - Jaina`
]

//Activity array
const wowActivity = [
    `Knocking out some dailies`,
    `Running a couple of dungeons`,
    `Running your weekly 'circuit of disappointment'`,
    `Farming some rep`,
    `Working on a profession`,
    `You remember Archaeology, right?`,
    `Finishing this month's Trading Post`,
    `Cleaning out your bank`,
    `Redoing your favorite mounts list`,
    `Leveling an alt`,
    `Putting together a new transmog`
]

//Status array
const loadingMsg = [
    `Cataloging transmog...`,
    `Confirming n+1 Alliance horses...`,
    `Consulting the bronze dragonflight...`,
    `Polishing your armor...`,
    `Calculating optimal boar livers...`,
    `Spawning whelps...`,
    `Adding more murlocs...`,
    `Preventing the ice stone from melting...`
]

//Generate random Index
const randomIndex = (array) => (Math.floor(Math.random() * array.length))

//Randomize status message
const randomStatus = () => loadingMsg[randomIndex(loadingMsg)];

//Randomize ASCII art
const randomArt = () => logoArt[randomIndex(logoArt)];

//Randomize quote
const randomQuote = () => wowQuote[randomIndex(wowQuote)];

//Randomize activity
const randomActivity = () => wowActivity[randomIndex(wowActivity)];


//Formatting activity display
const label = document.createElement("span");
label.classList.add("activity-label");
label.textContent = "You could try: ";


// Button click listener
randomizerButton.addEventListener('click', () => {
  // Show a loading message and clear any previous information
    statusDisplay.style.display = 'block';
    statusDisplay.textContent = randomStatus();
    description.style.display = 'none';  
    quoteDisplay.textContent = ""
    activityDisplay.textContent = "";

 
  // Simulate "loading"
    setTimeout(() => {
        artDisplay.textContent = randomArt();
        quoteDisplay.textContent = randomQuote();
        divider.style.display = 'block';
        activityDisplay.appendChild(label);
        activityDisplay.append(randomActivity()); 
        statusDisplay.style.display = 'none';
        resetLink.style.display = 'block';
        }, 800); 
})

// Reset link
resetLink.addEventListener('click', () => {
  // Hide results and reset page to initial state
  artDisplay.textContent = defaultArt;
  description.style.display = 'block'; 
  quoteDisplay.textContent = "";
  activityDisplay.textContent = "";
  statusDisplay.textContent = "";
  divider.style.display = 'none';
  resetLink.style.display = 'none';
});