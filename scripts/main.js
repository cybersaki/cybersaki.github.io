var before = document.getElementById('before')
var command = document.getElementById("input"); 
var textarea = document.getElementById("textbox"); 
var terminal = document.getElementById("terminal");
var git = 0
// List of all the entered commands
var commands = []

// Printing banner on loading
setTimeout(() => {
    printLines(banner, "", 80);
    textarea.focus();
}, 100);

// Open listeners and and initially set the text and history to blank
window.addEventListener("keyup", enterKey);
textarea.value = "";
command.innerHTML = textarea.value;

// Handles the pressing of different key presses
function enterKey(e) {
    // Reload
    if (e.keyCode == 181) {
      document.location.reload(true);
    }
    // Enter Key
    if (e.keyCode == 13) {
        commands.push(command.innerHTML);
        git = commands.length;
        addLine(" guest@localhost:$ " + command.innerHTML, "no-animation", 0);
        router(command.innerHTML.toLowerCase());
        command.innerHTML = "";
        textarea.value = "";
    }
    // Previous commands (up)
    if (e.keyCode == 38 && git != 0) {
        git -= 1;
        textarea.value = commands[git];
        command.innerHTML = textarea.value;
    }
    // Next Command (down)
    if (e.keyCode == 40 && git != commands.length) {
        git += 1;
        if (commands[git] === undefined) {
            textarea.value = "";
        } else {
            textarea.value = commands[git];
        }
        command.innerHTML = textarea.value;
    }
}

// Router
function router(cmd){
    switch (cmd.toLowerCase()) {
        case "help":
            printLines(help, "color2 margin", 80);
            break;

        case "cyb3rs4k1":
            printLines(about, "color2 margin", 80)
            break;
            
        case "social":
            printLines(social, "color2 margin", 80)
            break;
        
        case "history":
            addLine("<br>", "", 0);
            printLines(commands, "color2", 80);
            addLine("<br>", "command", 80 * commands.length + 50);
            break;

        case "clear":
            setTimeout(() => {
                terminal.innerHTML = '<a id="before"></a>';
                before = document.getElementById("before");
            }, 1);
            printLines(banner, "", 80)
            break;
        
        case "linkedin":
            addLine("Opening LinkedIn...", "color2", 0);
            openNewTab(linkedin);
            break;
        case "github":
            addLine("Opening Github...", "color2", 0);
            openNewTab(github);
            break;

        case "twitter":
            addLine("Opening Twitter...", "color2", 0);
            openNewTab(twitter);
            break;

        case "ls":
            addLine("Nice idea. What a classic noob move you think of my website could leak upon!^*!<br>", "color2", 0);
            break;
        
        case "cd":
            addLine("You think you can navigate to and fro, and you think I will let you go as you wish:)<br>", "color2", 0);
            break;

        case "sudo":
            addLine("with great power comes great responsibility! Go do this in your home kernel!!<br>","color2",0);
            break;

        case "su":
            addLine("with great power comes great responsibility! Sudo my b****!!<br>","color2",0);
            break;    

        case "exit":
            window.close();
            addLine("If the window doesn't close, it might be because of a safety feature! Close the tab manually, Just kidding!","color2",0);
            break;

        default:
            addLine("<span class=\"inherit\">Command not found ra venna mavaney. For a list of commands, type <span class=\"command\">'help'</span>.</span>", "error", 100);
            break;
    }
}

// Print the contents of a list line by line
function printLines(name, style, time){
    name.forEach((item, index) => {
        addLine(item, style, index*time);
    })
}

function addLine(text, style, time) {

    // Replace all spaces with nbsp character
    var t = "";
    for (let i = 0; i < text.length; i++) {
      if (text.charAt(i) == " " && text.charAt(i + 1) == " ") {
        t += "&nbsp;&nbsp;";
        i++;
      } else {
        t += text.charAt(i);
      }
    }

    // Create a new 'p' and append it to the terminal just before the before
    setTimeout(() => {
      var next = document.createElement("p");
      next.innerHTML = t;
      next.className = style;
  
      before.parentNode.insertBefore(next, before);
  
      window.scrollTo(0, document.body.offsetHeight);
    }, time);
}

// Open a link in the new tab
// Open new Tab
function openNewTab(link) {
    setTimeout(() => {
      window.open(link, "_blank");
    }, 500);
  }
