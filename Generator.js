// Function for Generating unique id number randomly
function generateId() {
    let id = "";
    const characters = "0123456789";
    const length = 4;       //to set length of the generated id number
    
    for (let i = 0; i < 4; i++) {
    id += characters.charAt(Math.floor(Math.random() * length));
    }
    
    return id;
    }
    
    //Handle Logout
    const logoutButton = document.querySelector("#logout-btn");
    
    logoutButton.addEventListener("click", function () {
    window.location.href = "Login.html";
    }); //Currently Logout only redirects to the LoginPage, when it will be connected with backend it can be modified for handling Logout operation

    // Handle form submission
    const form = document.querySelector("#id-card-form");
    
    form.addEventListener("submit", function (event) {
    event.preventDefault();

    document.getElementById("options-container").style.display = "flex";

    // const photo = document.querySelector("#photo-file").files[0];
    const name = document.querySelector("#name").value;
    const rollNo = document.querySelector("#roll-no").value;
    const bloodGroup = document.querySelector("#blood-group").value;
    const institution = document.querySelector("#institution").value;
    const font = document.querySelector("#font").value;
    
    // Generate unique id number
    const id = 'BCE/'+ generateId();   //Here BCE is used as abriviation of Bhagalpur College of Engineering
    console.log(id);
    
    // Update preview (For Generating Preview of the ID card)

    const uniqueidContainer = document.querySelector("#unique-id-container");
    const nameContainer = document.querySelector("#name-container");
    const rollNoContainer = document.querySelector("#roll-no-container");
    const bloodGroupContainer = document.querySelector("#blood-group-container");
    const institutionContainer = document.querySelector("#institution-container");

    document.getElementById("info-container").style.fontFamily = font; //for updating font
    photo.src = document.querySelector("#photo-file").files[0] ? URL.createObjectURL(document.querySelector("#photo-file").files[0]) : "default-photo.png";
    uniqueidContainer.textContent='ID :' + id;
    nameContainer.textContent =' Name :' + name;
    rollNoContainer.textContent =' Roll No. :' +  rollNo;
    bloodGroupContainer.textContent = ' Blood Group :' + bloodGroup;
    institutionContainer.textContent = ' Institution :' + institution;
    
   
    
    // Store data in localStorage
    const data = {
    // photo : photo,    
    name: name,
    rollNo: rollNo,
    bloodGroup: bloodGroup,
    institution: institution,
    font: font,
    id: id
    };
    
    localStorage.setItem("id-card-data", JSON.stringify(data));
    });
    
    // Handle regenerate button click
    const regenerateButton = document.querySelector("#regenerate-btn");
    
    regenerateButton.addEventListener("click", function (event) {
    event.preventDefault();

    const data = JSON.parse(localStorage.getItem("id-card-data"));
    
    // Update preview
    const font_color = document.querySelector("#font-color").value;
    const logo_text_update = document.querySelector("#event-name").value;
    const logo = document.querySelector("#logo");
    const photo = document.querySelector("#photo");
    const uniqueidContainer = document.querySelector("#unique-id-container");
    const nameContainer = document.querySelector("#name-container");
    const rollNoContainer = document.querySelector("#roll-no-container");
    const bloodGroupContainer = document.querySelector("#blood-group-container");
    const institutionContainer = document.querySelector("#institution-container");
    const logotext = document.querySelector("#logo-text");
    

    document.getElementById("info-container").style.color = font_color; //for updating font color
    logo.src = document.querySelector("#logo-file").files[0] ? URL.createObjectURL(document.querySelector("#logo-file").files[0]) : "default-logo.png";
    photo.src = document.querySelector("#photo-file").files[0] ? URL.createObjectURL(document.querySelector("#photo-file").files[0]) : "default-photo.png";
    uniqueidContainer.textContent='ID : ' + data.id;
    nameContainer.textContent =' Name : ' + data.name;
    rollNoContainer.textContent =' Roll No. : ' + data.rollNo;
    bloodGroupContainer.textContent =' Blood Group : ' + data.bloodGroup;
    institutionContainer.textContent =' Institution : ' + data.institution;
    logotext.innerHTML=logo_text_update;
    
    // Update font
    document.documentElement.style.setProperty("--font-family", data.font);
    });
    
    // Handle print button click
    const printButton = document.querySelector("#print-btn");
    
    printButton.addEventListener("click", function (event) {
    event.preventDefault();
    
    document.getElementById("preview-header").style.display = "none";
    document.getElementById("download-btn-container").style.display = "none";

    const previewContainer = document.querySelector('#preview-section');
    html2pdf(previewContainer);
    });



